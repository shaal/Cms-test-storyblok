"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
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

const components = {
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
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
