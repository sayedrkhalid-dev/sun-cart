# ☀️ SunCart

> A modern summer e-commerce storefront built with **Next.js** and deployed on **Vercel**.

![SunCart Banner](https://sun-cart-pi.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbanner.02r_lwonn9ly4.png&w=1920&q=75)

🔗 **Live Demo:** [https://sun-cart-pi.vercel.app](https://sun-cart-pi.vercel.app)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Pages & Routes](#pages--routes)
- [Product Catalog](#product-catalog)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Trusted Brands](#trusted-brands)
- [Contact](#contact)

---

## Overview

**SunCart** is a summer-themed e-commerce web application that lets users browse and explore a curated catalog of warm-weather products — from sunglasses and sunscreen to beach towels and flip flops. The app features a dynamic homepage with promotional banners, a full products listing page, and a user profile section.

The project was bootstrapped with **Create Next App** and is continuously deployed via **Vercel**.

---

## Features

- 🛍️ **Product Catalog** — Browse a curated collection of summer essentials with images, ratings, and pricing
- 🎠 **Hero Banner Carousel** — Rotating promotional banners highlighting sales and new arrivals
- 🏷️ **Popular Products Section** — Highlighted featured products on the homepage
- 💡 **Summer Care Tips** — Informative lifestyle tips for sun safety and summer wellness
- 🏪 **Trusted Brands Showcase** — Displays partnered brands including Ray-Ban, Neutrogena, YETI, Speedo, and more
- 👤 **User Profile Page** — Dedicated `/profile` route for user account management
- 📬 **Newsletter Subscription** — Footer newsletter signup form
- 📱 **Responsive Design** — Optimized for desktop and mobile viewports
- ⚡ **Next.js Image Optimization** — All product and banner images are served via `next/image` for performance

---

## Pages & Routes

| Route       | Description                                                                    |
| ----------- | ------------------------------------------------------------------------------ |
| `/`         | Homepage with hero carousel, popular products, summer tips, and brand showcase |
| `/products` | Full product listing page with all available items                             |
| `/profile`  | User profile and account management page                                       |
| `/shop`     | Shop route linked from banner CTAs                                             |

---

## Product Catalog

The store currently features **12 summer products** across multiple categories:

### 🕶️ Eyewear

| Product                               | Price | Reviews     |
| ------------------------------------- | ----- | ----------- |
| Ray-Ban Aviator Classic Sunglasses    | $154  | 154 reviews |
| Oakley Frogskins Polarized Sunglasses | $125  | 125 reviews |

### 🧴 Skincare & Beauty

| Product                                            | Price | Reviews    |
| -------------------------------------------------- | ----- | ---------- |
| Neutrogena Ultra Sheer Dry-Touch SPF 100 Sunscreen | $18   | 18 reviews |
| Cocosolis Organic Suntan & Body Oil                | $32   | 32 reviews |

### 👙 Swimwear & Apparel

| Product                                 | Price | Reviews    |
| --------------------------------------- | ----- | ---------- |
| Speedo Women's Endurance Swimsuit       | $65   | 65 reviews |
| Quiksilver Highline Pro 18" Boardshorts | $60   | 60 reviews |
| The North Face Sundowner Hat            | $35   | 35 reviews |

### 👡 Footwear

| Product                          | Price | Reviews    |
| -------------------------------- | ----- | ---------- |
| Havaianas Brasil Logo Flip Flops | $28   | 28 reviews |
| Reef Men's Santa Ana Sandals     | $55   | 55 reviews |

### 🏖️ Beach & Outdoor Gear

| Product                           | Price | Reviews    |
| --------------------------------- | ----- | ---------- |
| YETI Rambler 30 oz Travel Tumbler | $38   | 38 reviews |
| Rip Curl Eco Beach Towel          | $45   | 45 reviews |
| Herschel Supply Co. Hip Pack      | $40   | 40 reviews |

---

## Tech Stack

| Technology                                                                 | Purpose                                             |
| -------------------------------------------------------------------------- | --------------------------------------------------- |
| [Next.js](https://nextjs.org/)                                             | React framework with file-based routing and SSR/SSG |
| [React](https://react.dev/)                                                | UI component library                                |
| [next/image](https://nextjs.org/docs/pages/api-reference/components/image) | Optimized image loading and lazy rendering          |
| [Vercel](https://vercel.com/)                                              | Hosting and continuous deployment                   |
| CSS / Tailwind _(assumed)_                                                 | Styling and layout                                  |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/sun-cart.git
   cd sun-cart
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the app running locally.

### Available Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start the development server with hot reload |
| `npm run build` | Build the application for production         |
| `npm run start` | Start the production server                  |
| `npm run lint`  | Run ESLint to check for code issues          |

---

## Project Structure

```
sun-cart/
├── public/                  # Static assets (images, icons, banner)
│   └── banner.*             # Hero banner image
├── app/  (or pages/)        # Next.js routing
│   ├── page.js              # Homepage ( / )
│   ├── products/
│   │   └── page.js          # All products listing ( /products )
│   ├── profile/
│   │   └── page.js          # User profile page ( /profile )
│   └── shop/
│       └── page.js          # Shop page ( /shop )
├── components/              # Reusable UI components
│   ├── Navbar.js            # Top navigation bar
│   ├── Footer.js            # Footer with links and newsletter
│   ├── ProductCard.js       # Individual product display card
│   ├── HeroBanner.js        # Carousel banner component
│   └── BrandShowcase.js     # Trusted brands section
├── next.config.js           # Next.js configuration
├── package.json
└── README.md
```

> **Note:** The directory structure above is inferred from the live application. Adjust paths to match your actual source layout.

---

## Deployment

SunCart is deployed on **Vercel** with automatic deployments on every push to the main branch.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to a GitHub repository.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Vercel will auto-detect Next.js and configure the build settings.
4. Click **Deploy** — your site will be live in seconds.

### Environment Variables

If your project uses any environment variables (e.g., API keys, database URLs), create a `.env.local` file at the root:

```env
# Example
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

Add these same variables in your Vercel project settings under **Settings → Environment Variables**.

---

## Trusted Brands

SunCart features products from these well-known summer lifestyle brands:

| Brand      | Category     |
| ---------- | ------------ |
| Ray-Ban    | Eyewear      |
| Neutrogena | Skincare     |
| Oakley     | Eyewear      |
| Havaianas  | Footwear     |
| YETI       | Outdoor Gear |
| Speedo     | Swimwear     |

---

## Contact

| Info       | Details                                    |
| ---------- | ------------------------------------------ |
| 📍 Address | 123 Market Street, Suite 45, San Francisco |
| 📞 Phone   | +8801326878885                             |
| ✉️ Email   | sayedrkhalid.official@gmail.com            |

---

## License

This project is for educational/personal use. All product names, brand names, and trademarks belong to their respective owners.

---

<p align="center">Made with ☀️ by the SunCart team &nbsp;|&nbsp; © SunCart. All rights reserved.</p>
