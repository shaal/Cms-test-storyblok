# Adventure Pack - Backpack Company Website

A modern, fully-featured website for a backpack company built with **Next.js** and **Storyblok CMS**. This project showcases a complete e-commerce-style website with product listings, features, testimonials, and more - all manageable through Storyblok's visual editor.

## 🚀 Features

- **Headless CMS Integration** - Powered by Storyblok for easy content management
- **Modern Tech Stack** - Built with Next.js 14, React 18, and TypeScript
- **Responsive Design** - Beautiful UI that works on all devices
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Component Library** - Reusable components for building pages
- **Real-time Preview** - See changes instantly with Storyblok's Visual Editor
- **SEO Friendly** - Optimized for search engines with Next.js
- **Type Safety** - Full TypeScript support for better development experience

## 📦 Components

The website includes the following Storyblok components:

- **Hero** - Eye-catching header sections with CTAs
- **Product Grid** - Display products in a beautiful grid layout
- **Product Card** - Individual product displays with images, prices, and features
- **Features** - Showcase key benefits and features
- **Testimonials** - Customer reviews and ratings
- **Newsletter** - Email subscription form
- **Content Section** - Flexible content blocks with images
- **Call to Action** - Conversion-focused sections
- **Navigation** - Responsive navbar with mobile menu
- **Footer** - Complete footer with links and social media

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **CMS:** Storyblok
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn
- A Storyblok account (free tier available)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Storyblok

1. Create a Storyblok account at https://www.storyblok.com/
2. Create a new space
3. Get your preview token from Settings → Access Tokens
4. Copy `.env.local.example` to `.env.local`
5. Add your Storyblok token:

```env
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your_preview_token_here
```

### 3. Set Up Storyblok Components

Follow the detailed instructions in [STORYBLOK_SETUP.md](./STORYBLOK_SETUP.md) to:
- Create component schemas in Storyblok
- Set up content stories
- Configure the Visual Editor

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Start Creating Content

1. Log in to your Storyblok space
2. Create stories using the component schemas
3. See changes in real-time at http://localhost:3000

## 📁 Project Structure

```
backpack-website/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with navbar and footer
│   ├── page.tsx             # Home page
│   ├── products/            # Products page
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   └── [...slug]/           # Dynamic routes for Storyblok
├── components/              # React components
│   ├── Hero.tsx
│   ├── ProductGrid.tsx
│   ├── ProductCard.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── Newsletter.tsx
│   ├── ContentSection.tsx
│   ├── CallToAction.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/                     # Utility files
│   ├── storyblok.ts        # Storyblok configuration
│   └── types.ts            # TypeScript types
├── public/                  # Static assets
├── .env.local.example      # Environment variables template
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: {
    // Your primary color shades
  },
  accent: {
    // Your accent color shades
  },
}
```

### Adding New Components

1. Create a new component in `components/`
2. Register it in `lib/storyblok.ts`
3. Create the corresponding schema in Storyblok
4. Add TypeScript types in `lib/types.ts`

### Modifying Pages

Edit the page files in the `app/` directory to change layouts and add new pages.

## 📝 Content Management

### Creating Products

1. In Storyblok, navigate to your Products story
2. Add a Product Grid component
3. Add Product Card components with:
   - Product name
   - Price
   - Image
   - Description
   - Features
   - Category

### Managing Features

1. Add a Features component to any page
2. Add Feature Items with:
   - Title
   - Description
   - Icon (choose from available options)

### Adding Testimonials

1. Add a Testimonials component
2. Add Testimonial Cards with:
   - Customer name
   - Role/title
   - Review content
   - Rating (1-5 stars)
   - Avatar image (optional)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add your environment variable:
   - `NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN`
4. Deploy!

### Update Storyblok Visual Editor

After deployment, update the Visual Editor location in Storyblok:
1. Go to Settings → Visual Editor
2. Set Location to your production URL

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Storyblok Documentation](https://www.storyblok.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storyblok React SDK](https://github.com/storyblok/storyblok-react)

## 🤝 Contributing

This is a starter template. Feel free to customize it for your needs!

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🎉 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- CMS powered by [Storyblok](https://www.storyblok.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Ready to start your adventure?** Follow the setup guide and start building your backpack company website today! 🎒
