# Project Plan

## Stack

MVP now:

- Dependency-free HTML, CSS and JavaScript
- Browser local storage for prototype booking data
- Manual WhatsApp links for testing

Production:

- Next.js + TypeScript
- Supabase Postgres
- Supabase Edge Functions or Next.js API routes
- WhatsApp Cloud API
- Vercel or Cloudflare Pages

## Build phases

1. Prototype website and booking flow: complete in this folder.
2. Add real database and admin authentication.
3. Add WhatsApp Cloud API and approved templates.
4. Add UPI QR/payment section after final UPI details are available.
5. Deploy and test with real bookings.

## Remaining decisions

- Final WhatsApp number for the priest.
- UPI ID or QR code image.
- Whether accepted bookings should collect an advance amount or only show payment details.
- Whether every service uses 1-hour slots or some services need longer blocked windows.
- Whether customer notifications should use WhatsApp only or also email/SMS.
