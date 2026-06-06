# Aathreyasa Krupa Pooja Services

First MVP for a low-maintenance pooja booking website for Kilambhi Narasimha Charyulu.

## What is built now

- Public booking page with service category, pooja type, date, time, address, notes/gothram/star.
- Availability rule: all days, 9 AM to 6 PM.
- Advance booking rule: 2 days for Hyderabad or online, 7 days outside Hyderabad.
- Blocked dates can be added from the Priest Desk and appear greyed out in the calendar.
- Booking requests are stored in browser local storage for prototype testing.
- Priest Desk can accept/reject bookings and generate WhatsApp messages.
- Payment is modeled as after acceptance. UPI QR is intentionally pending until the final UPI ID/QR is provided.
- Contact section includes WhatsApp, email and location URL.
- Core UI language switcher for English, Hindi, Telugu, Tamil and Kannada.

## Open locally

Open this file in a browser:

```text
/Users/gnanalakshmi/Documents/Personal/aathreyasa-krupa-pooja-services/index.html
```

Or run a tiny local server:

```bash
python3 -m http.server 4173
```

Then visit:

```text
http://localhost:4173/
```

## Next production step

This static MVP proves the flow. For production, connect:

- Supabase database using `backend/supabase-schema.sql`
- WhatsApp Cloud API using `backend/whatsapp-integration.md`
- Static UPI QR image once you share the UPI ID or QR file
- Deployment on Vercel, Cloudflare Pages or Netlify

## Data to update later

In `app.js`, update:

- `priest.whatsapp` when your father's final WhatsApp number is ready.
- `priest.upiId` after you confirm the UPI ID.
- `poojaCategories` when service names need changes.
- `slots` if slots should be 30 minutes, 90 minutes or custom by pooja type.

The temporary hero image was generated for this project and saved at:

```text
assets/pooja-hero.png
```
