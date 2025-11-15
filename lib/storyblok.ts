import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokClient from "storyblok-js-client";

// Import components
import Page from "@/components/Page";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ProductCard from "@/components/ProductCard";
import Features from "@/components/Features";
import FeatureItem from "@/components/FeatureItem";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import ContentSection from "@/components/ContentSection";
import CallToAction from "@/components/CallToAction";

const accessToken = process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN;

if (!accessToken) {
  throw new Error("NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN is not defined");
}

// Initialize Storyblok client
export const storyblokClient = new StoryblokClient({
  accessToken,
  cache: {
    clear: "auto",
    type: "memory",
  },
});

// Initialize Storyblok with components
storyblokInit({
  accessToken,
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    product_grid: ProductGrid,
    product_card: ProductCard,
    features: Features,
    feature_item: FeatureItem,
    newsletter: Newsletter,
    testimonials: Testimonials,
    testimonial_card: TestimonialCard,
    content_section: ContentSection,
    cta: CallToAction,
  },
});

export async function getStoryblokData(slug: string, params?: any) {
  try {
    const { data } = await storyblokClient.get(`cdn/stories/${slug}`, {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
      ...params,
    });
    return data;
  } catch (error) {
    console.error("Error fetching Storyblok data:", error);
    return null;
  }
}
