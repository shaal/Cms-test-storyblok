export interface StoryblokAsset {
  filename: string;
  alt?: string;
  title?: string;
}

export interface StoryblokLink {
  cached_url: string;
  linktype: string;
  url?: string;
}

export interface Product {
  _uid: string;
  component: string;
  name: string;
  price: number;
  image: StoryblokAsset;
  description?: string;
  features?: string[];
  category?: string;
}

export interface Feature {
  _uid: string;
  component: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  _uid: string;
  component: string;
  name: string;
  role?: string;
  content: string;
  avatar?: StoryblokAsset;
  rating?: number;
}

export interface HeroBlok {
  _uid: string;
  component: "hero";
  title: string;
  subtitle?: string;
  description?: string;
  image?: StoryblokAsset;
  cta_text?: string;
  cta_link?: StoryblokLink;
  secondary_cta_text?: string;
  secondary_cta_link?: StoryblokLink;
}

export interface ProductGridBlok {
  _uid: string;
  component: "product_grid";
  title?: string;
  description?: string;
  products: Product[];
}

export interface FeaturesBlok {
  _uid: string;
  component: "features";
  title?: string;
  description?: string;
  features: Feature[];
}

export interface TestimonialsBlok {
  _uid: string;
  component: "testimonials";
  title?: string;
  description?: string;
  testimonials: Testimonial[];
}

export interface NewsletterBlok {
  _uid: string;
  component: "newsletter";
  title: string;
  description?: string;
  placeholder?: string;
  button_text?: string;
}

export interface ContentSectionBlok {
  _uid: string;
  component: "content_section";
  title: string;
  content: string;
  image?: StoryblokAsset;
  image_position?: "left" | "right";
}

export interface CallToActionBlok {
  _uid: string;
  component: "cta";
  title: string;
  description?: string;
  button_text: string;
  button_link?: StoryblokLink;
  background_color?: string;
}
