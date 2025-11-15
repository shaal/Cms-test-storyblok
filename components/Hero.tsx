"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";
import { HeroBlok } from "@/lib/types";

interface HeroProps {
  blok: HeroBlok;
}

export default function Hero({ blok }: HeroProps) {
  const getLinkUrl = (link: any) => {
    if (!link) return "#";
    return link.cached_url || link.url || "#";
  };

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {blok.subtitle && (
              <p className="text-accent-300 font-semibold uppercase tracking-wide">
                {blok.subtitle}
              </p>
            )}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {blok.title}
            </h1>
            {blok.description && (
              <p className="text-xl text-blue-100 leading-relaxed">
                {blok.description}
              </p>
            )}
            <div className="flex flex-wrap gap-4 pt-4">
              {blok.cta_text && (
                <Link
                  href={getLinkUrl(blok.cta_link)}
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
                >
                  {blok.cta_text}
                </Link>
              )}
              {blok.secondary_cta_text && (
                <Link
                  href={getLinkUrl(blok.secondary_cta_link)}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/30"
                >
                  {blok.secondary_cta_text}
                </Link>
              )}
            </div>
          </div>

          {blok.image?.filename && (
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={blok.image.filename}
                alt={blok.image.alt || blok.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
    </section>
  );
}
