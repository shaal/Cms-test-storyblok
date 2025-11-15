"use client";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { ProductGridBlok } from "@/lib/types";

interface ProductGridProps {
  blok: ProductGridBlok;
}

export default function ProductGrid({ blok }: ProductGridProps) {
  return (
    <section {...storyblokEditable(blok)} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {(blok.title || blok.description) && (
          <div className="text-center mb-12">
            {blok.title && (
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {blok.title}
              </h2>
            )}
            {blok.description && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {blok.description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.products?.map((product) => (
            <StoryblokComponent blok={product} key={product._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
