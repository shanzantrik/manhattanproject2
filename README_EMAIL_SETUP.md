# Email Setup Instructions

## Overview
The application now sends automated emails when a purchase is confirmed via BitPay webhook.

## Setup Steps

### 1. Get Resend API Key
1. Sign up at [https://resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy the API key (starts with `re_`)

### 2. Configure Environment Variables
Add to your `.env.local` file (or Vercel environment variables):

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### 3. Verify Domain (Production)
For production, you'll need to:
1. Add your domain in Resend dashboard
2. Verify DNS records
3. Update the `from` email in `lib/email.ts` to use your verified domain

For testing, you can use Resend's test domain which doesn't require verification.

### 4. Test Email Functionality

#### Option 1: Using the Test Endpoint
Start your development server:
```bash
npm run dev
```

Then test the email endpoint:
```bash
# Test both emails
curl -X POST http://localhost:3000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"type": "both"}'

# Test only admin notification
curl -X POST http://localhost:3000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"type": "admin"}'

# Test only buyer confirmation
curl -X POST http://localhost:3000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"type": "buyer"}'
```

#### Option 2: Using Browser/Postman
- URL: `http://localhost:3000/api/test-email`
- Method: POST
- Body (JSON): `{"type": "both"}`

## Email Flow

When a purchase is confirmed via BitPay webhook:

1. **Admin Notification** → Sent to `contact@manhattanproject20.com`
   - Contains purchase details (invoice ID, buyer email, amount)
   - Includes buyer email in reply-to field

2. **Buyer Confirmation** → Sent to buyer's email
   - Thank you message
   - Purchase confirmation details
   - Next steps information

## Files Modified

- `lib/email.ts` - Email sending functions using Resend
- `app/api/bitpay-webhook/route.ts` - Updated to send emails on purchase confirmation
- `app/api/test-email/route.ts` - Test endpoint for email functionality
- `package.json` - Added Resend dependency
- `env.example` - Updated with RESEND_API_KEY

## Troubleshooting

1. **Emails not sending**: Check that RESEND_API_KEY is set correctly
2. **Domain verification errors**: Use Resend's test domain for development
3. **Check logs**: Email errors are logged to console but don't fail the webhook

## Production Deployment

1. Add `RESEND_API_KEY` to Vercel environment variables
2. Verify your domain in Resend dashboard
3. Update the `from` email address in `lib/email.ts` to use your verified domain
4. Test the webhook endpoint after deployment

