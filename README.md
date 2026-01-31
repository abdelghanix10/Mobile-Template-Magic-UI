# Mobile MagicUI Template

A modern, responsive, and animated mobile-first landing page template built with Next.js 16, Tailwind CSS, and Framer Motion.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🚀 Features

- **Next.js 16**: Utilizing the latest features of the React framework.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Framer Motion**: Smooth, complex animations and page transitions.
- **Radix UI**: Accessible, unstyled UI primitives.
- **Dark Mode**: Built-in dark mode support using `next-themes`.
- **Responsive Design**: Mobile-first approach, looking great on all devices.
- **Components**:
  - Hero Section
  - Feature Highlights & Scrolling
  - Bento Grid
  - Pricing Tables
  - Testimonials
  - FAQ Accordion
  - Contact Form
  - Mobile Drawer Navigation

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [Vaul](https://vaul.emilkowal.ski/) (Drawer component)

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abdelghanix10/mobile-magicui.git
   cd mobile-magicui
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router pages
│   ├── contact/          # Contact page
│   ├── get-started/      # Get Started page
│   ├── pricing/          # Pricing page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── sections/         # Landing page sections (Hero, Features, etc.)
│   ├── ui/               # Reusable UI components (Button, Card, etc.)
│   └── ...
├── lib/                  # Utility functions and configuration
│   ├── config.tsx        # Site configuration and data
│   └── utils.ts          # Helper functions
└── ...
```

## 🎨 Customization

- **Site Config**: Update `src/lib/config.tsx` to change site name, description, links, features, and pricing data.
- **Theming**: Modify `tailwind.config.ts` and `src/app/globals.css` to customize colors and fonts.

## 📄 License

This project is licensed under the MIT License.
