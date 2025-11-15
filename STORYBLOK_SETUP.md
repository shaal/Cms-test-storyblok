# Storyblok Setup Guide

This guide will help you set up Storyblok CMS for your backpack company website.

## Prerequisites

1. A Storyblok account (sign up at https://www.storyblok.com/)
2. Node.js 18+ installed
3. npm or yarn package manager

## Step 1: Create a Storyblok Space

1. Log in to your Storyblok account
2. Click "Create new space"
3. Choose a name (e.g., "Backpack Website")
4. Select your preferred region
5. Click "Create space"

## Step 2: Get Your Access Token

1. In your Storyblok space, go to **Settings** → **Access Tokens**
2. Copy your **Preview Token**
3. Create a `.env.local` file in the root of this project
4. Add your token:

```env
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your_preview_token_here
```

## Step 3: Create Component Schemas

You need to create the following component schemas in Storyblok. Go to **Block Library** → **+ New Block** for each component:

### 1. Page Component

**Technical name:** `page`
**Display name:** Page

**Schema:**
- **body** (Blocks) - Allow multiple blocks

### 2. Hero Component

**Technical name:** `hero`
**Display name:** Hero

**Schema:**
- **title** (Text) - Required
- **subtitle** (Text)
- **description** (Textarea)
- **image** (Asset - Images)
- **cta_text** (Text)
- **cta_link** (Link)
- **secondary_cta_text** (Text)
- **secondary_cta_link** (Link)

### 3. Product Card Component

**Technical name:** `product_card`
**Display name:** Product Card

**Schema:**
- **name** (Text) - Required
- **price** (Number) - Required
- **image** (Asset - Images) - Required
- **description** (Textarea)
- **features** (Text) - Allow multiple
- **category** (Text)

### 4. Product Grid Component

**Technical name:** `product_grid`
**Display name:** Product Grid

**Schema:**
- **title** (Text)
- **description** (Textarea)
- **products** (Blocks) - Allow only `product_card` component, allow multiple

### 5. Feature Item Component

**Technical name:** `feature_item`
**Display name:** Feature Item

**Schema:**
- **title** (Text) - Required
- **description** (Textarea) - Required
- **icon** (Single-Option)
  - Options: `shield`, `star`, `truck`, `heart`, `globe`, `default`

### 6. Features Component

**Technical name:** `features`
**Display name:** Features

**Schema:**
- **title** (Text)
- **description** (Textarea)
- **features** (Blocks) - Allow only `feature_item` component, allow multiple

### 7. Testimonial Card Component

**Technical name:** `testimonial_card`
**Display name:** Testimonial Card

**Schema:**
- **name** (Text) - Required
- **role** (Text)
- **content** (Textarea) - Required
- **avatar** (Asset - Images)
- **rating** (Number) - Min: 1, Max: 5

### 8. Testimonials Component

**Technical name:** `testimonials`
**Display name:** Testimonials

**Schema:**
- **title** (Text)
- **description** (Textarea)
- **testimonials** (Blocks) - Allow only `testimonial_card` component, allow multiple

### 9. Newsletter Component

**Technical name:** `newsletter`
**Display name:** Newsletter

**Schema:**
- **title** (Text) - Required
- **description** (Textarea)
- **placeholder** (Text) - Default: "Enter your email"
- **button_text** (Text) - Default: "Subscribe"

### 10. Content Section Component

**Technical name:** `content_section`
**Display name:** Content Section

**Schema:**
- **title** (Text) - Required
- **content** (Richtext) - Required
- **image** (Asset - Images)
- **image_position** (Single-Option)
  - Options: `left`, `right`

### 11. Call to Action Component

**Technical name:** `cta`
**Display name:** Call to Action

**Schema:**
- **title** (Text) - Required
- **description** (Textarea)
- **button_text** (Text) - Required
- **button_link** (Link)
- **background_color** (Single-Option)
  - Options: `primary`, `accent`

## Step 4: Create Content Stories

### Home Page Story

1. Go to **Content** → **+ Entry**
2. Name: "Home"
3. Slug: "home"
4. Select content type: `page`
5. Click "Create"

In the **body** field, add the following blocks:

1. **Hero Block**
   - Title: "Adventure Awaits with the Perfect Backpack"
   - Subtitle: "Premium Quality Backpacks"
   - Description: "Discover our collection of premium backpacks designed for hiking, travel, and everyday adventures."
   - CTA Text: "Shop Now"
   - CTA Link: `/products`
   - Secondary CTA Text: "Learn More"
   - Secondary CTA Link: `#features`
   - Image: Upload a hero image

2. **Features Block**
   - Title: "Why Choose Adventure Pack?"
   - Description: "We design backpacks that combine functionality, durability, and style."
   - Add 3-6 feature items with appropriate icons

3. **Product Grid Block**
   - Title: "Featured Products"
   - Description: "Check out our most popular backpacks"
   - Add 3-6 product cards with images, prices, and descriptions

4. **Testimonials Block**
   - Title: "What Our Customers Say"
   - Add 3-6 testimonial cards

5. **Newsletter Block**
   - Title: "Stay Updated"
   - Description: "Subscribe to get special offers and outdoor tips"

6. **CTA Block**
   - Title: "Ready to Start Your Adventure?"
   - Description: "Browse our collection and find the perfect backpack"
   - Button Text: "View All Products"
   - Button Link: `/products`

### Products Page Story

1. Create a new story named "Products"
2. Slug: "products"
3. Content type: `page`
4. Add a Product Grid block with all your products

### About Page Story

1. Create a new story named "About"
2. Slug: "about"
3. Content type: `page`
4. Add Content Section blocks with your company story

### Contact Page Story

1. Create a new story named "Contact"
2. Slug: "contact"
3. Content type: `page`
4. Add content as needed

## Step 5: Configure Visual Editor (Optional)

1. Go to **Settings** → **Visual Editor**
2. Set the **Location (Default Environment)** to: `http://localhost:3000/`
3. For production, update this to your live domain

## Step 6: Enable Real-time Editing

The website is already configured for real-time editing. When you edit content in Storyblok's Visual Editor, changes will appear instantly in the preview.

## Sample Content Ideas

### Product Examples

1. **Alpine Explorer 45L**
   - Price: $189
   - Category: Hiking
   - Features: Water-resistant, Ergonomic straps, Multiple compartments
   - Description: Perfect for multi-day hiking trips

2. **Urban Commuter 25L**
   - Price: $129
   - Category: Laptop
   - Features: Padded laptop sleeve, USB charging port, Anti-theft pocket
   - Description: Ideal for daily commutes and work

3. **Travel Pro 55L**
   - Price: $249
   - Category: Travel
   - Features: Carry-on approved, Expandable, TSA-friendly
   - Description: Your perfect travel companion

### Feature Examples

- **Lifetime Warranty** (shield icon)
- **Premium Materials** (star icon)
- **Free Shipping** (truck icon)
- **Eco-Friendly** (globe icon)
- **Customer Love** (heart icon)

### Testimonial Examples

- "Best backpack I've ever owned! Survived a 3-month trip through Asia." - Sarah J.
- "The quality is outstanding. Worth every penny!" - Mike T.
- "Perfect for my daily commute. Fits my laptop and gym gear." - Emma L.

## Troubleshooting

### Token Issues

If you see errors about missing access tokens:
1. Make sure `.env.local` exists in the project root
2. Verify the token is correct
3. Restart the dev server after adding the token

### Component Not Found

If you see "Component X not found" errors:
1. Verify the technical name matches exactly in Storyblok
2. Check that the component is registered in `lib/storyblok.ts`
3. Restart the dev server

### Images Not Loading

If images don't display:
1. Check that the image domains are in `next.config.js`
2. Verify images are uploaded in Storyblok
3. Check browser console for CORS errors

## Next Steps

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open http://localhost:3000
4. Start editing content in Storyblok!

## Resources

- [Storyblok Documentation](https://www.storyblok.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Storyblok React SDK](https://github.com/storyblok/storyblok-react)
