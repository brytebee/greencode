# GreenCode Landing Page

A modern, responsive landing page for a premium software development agency built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme with green/emerald gradients
- 📱 Fully responsive design
- 📧 Contact form with email notifications
- ⚡ Smooth animations and hover effects
- 🎯 Optimized for conversions
- 🔒 TypeScript for type safety

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Email:** Resend + React Email

## Getting Started

1. **Clone and install:**

```bash
git clone https://github.com/brytebee/greencode.git
cd greencode-landing
npm install
```

2. **Environment variables:**
   Create `.env.local`:

```env
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_DOMAIN=noreply@greencode.com
NEXT_PUBLIC_ADMIN_EMAIL=contact@greencode.com
NEXT_PUBLIC_LOGO_URL=https://your-logo-url.com/logo.png
```

3. **Run development server:**

```bash
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── api/send-email/     # Email API endpoint
│   └── page.tsx            # Landing page
├── components/
│   ├── email/              # Email templates
│   └── Logo.tsx            # Logo component
└── public/
    └── greencode-logo.png  # Logo asset
```

## Customization

- **Colors:** Edit Tailwind classes (green-\* to your brand color)
- **Content:** Update text in `page.tsx`
- **Logo:** Replace `/public/greencode-logo.png`
- **Email Templates:** Modify files in `/components/email/`

## Deployment

Deploy to Vercel:

```bash
vercel --prod
```

Set environment variables in Vercel dashboard.

## License

MIT
