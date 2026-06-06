# WhatsApp Integration Plan

The static prototype uses `wa.me` links. Production should use WhatsApp Cloud API or a managed provider such as Twilio, WATI or AiSensy.

## Recommended production flow

1. Customer submits booking.
2. Backend stores booking as `pending`.
3. Backend sends WhatsApp template message to priest:
   - customer name
   - service
   - date/time
   - address
   - notes/gothram/star
   - accept link
   - reject link
4. Priest taps accept/reject.
5. Backend updates booking status.
6. Backend sends WhatsApp template message to customer.
7. If accepted, customer sees payment QR and contact/location details.

## Environment variables

```text
WHATSAPP_ACCESS_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_VERIFY_TOKEN=
APP_BASE_URL=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

## Message templates to create

Template: `priest_booking_request`

```text
New booking request
Name: {{1}}
Service: {{2}}
Date: {{3}}
Time: {{4}}
Address: {{5}}
Notes: {{6}}
Accept: {{7}}
Reject: {{8}}
```

Template: `customer_booking_accepted`

```text
Namaste {{1}}, your {{2}} booking is accepted for {{3}} at {{4}}.
Payment can be completed using the UPI QR shown on the booking page.
Location: {{5}}
```

Template: `customer_booking_rejected`

```text
Namaste {{1}}, your {{2}} booking request for {{3}} at {{4}} could not be accepted.
Please contact us to choose another slot.
```

## Minimal Cloud API send function

```ts
export async function sendWhatsAppTemplate({
  to,
  templateName,
  languageCode = "en",
  bodyParameters,
}: {
  to: string;
  templateName: string;
  languageCode?: string;
  bodyParameters: string[];
}) {
  const response = await fetch(
    `https://graph.facebook.com/v20.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "template",
        template: {
          name: templateName,
          language: { code: languageCode },
          components: [
            {
              type: "body",
              parameters: bodyParameters.map((text) => ({ type: "text", text })),
            },
          ],
        },
      }),
    },
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response.json();
}
```

## Security notes

- Accept/reject links should include a signed token, not just a booking id.
- Use Supabase service role only inside server code.
- Do not expose WhatsApp API tokens in browser JavaScript.
- Store a notification log for troubleshooting.
