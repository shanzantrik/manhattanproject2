# Manhattan Project 2.0 - Author Portfolio Website

A modern, beautiful Next.js portfolio website for author Ashish Warudkar featuring BitPay integration for book purchases.

## Features

- 🎨 Modern, seamless design with smooth animations
- 📱 Fully responsive layout
- 💳 BitPay payment integration for book purchases
- 📧 Contact form with email notifications
- 📬 Newsletter signup functionality
- ⚡ Built with Next.js 14, TypeScript, and Tailwind CSS
- 🎭 Framer Motion animations for enhanced UX

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- BitPay merchant account (for payment processing)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd manhattan20
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

Edit `.env.local` and add your BitPay API key and other configuration:

```env
BITPAY_API_KEY=your_bitpay_api_key_here
BITPAY_ENVIRONMENT=test  # or 'production' for live
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## BitPay Integration

### Setting up BitPay

1. Sign up for a BitPay merchant account at [bitpay.com](https://bitpay.com)
2. Generate an API key from your BitPay merchant dashboard
3. Add the API key to your `.env.local` file

### Testing Payments

- Use `BITPAY_ENVIRONMENT=test` for testing with testnet
- Use `BITPAY_ENVIRONMENT=production` for live transactions

### Webhook Configuration

Configure your BitPay webhook URL to point to:
```
https://yourdomain.com/api/bitpay-webhook
```

## Project Structure

```
manhattan20/
├── app/
│   ├── api/              # API routes (BitPay, contact, newsletter)
│   ├── purchase/         # Purchase success page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   ├── AboutAuthor.tsx   # About the author section
│   ├── AboutBook.tsx     # About the book section
│   ├── PurchaseSection.tsx # Book purchase section
│   ├── ContactSection.tsx  # Contact form
│   └── NewsletterSignup.tsx # Newsletter signup
└── ...
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme. The site uses a primary blue color scheme by default.

### Content

Update content in the component files:
- Author information: `components/AboutAuthor.tsx`
- Book information: `components/AboutBook.tsx`
- Contact details: `components/Footer.tsx` and `components/ContactSection.tsx`

### Email Integration

The contact form and newsletter signup currently log submissions. To send actual emails, integrate with:
- SendGrid
- Resend
- Mailchimp
- Nodemailer

Update the API routes in `app/api/contact/route.ts` and `app/api/newsletter/route.ts`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

This Next.js app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## License

Copyright © 2025 Manhattan Project 2.0 - All Rights Reserved.

## Support

For questions or support, contact:
- Phone: +1.661.233.1023
- Address: 658 E Lago Lindo Rd, Palmdale, CA 93550
