"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";
import { CallToActionBlok } from "@/lib/types";

interface CallToActionProps {
  blok: CallToActionBlok;
}

export default function CallToAction({ blok }: CallToActionProps) {
  const getLinkUrl = (link: any) => {
    if (!link) return "#";
    return link.cached_url || link.url || "#";
  };

  const bgColor = blok.background_color || "primary";
  const bgClass = bgColor === "primary"
    ? "bg-gradient-to-r from-primary-600 to-primary-800"
    : "bg-gradient-to-r from-accent-500 to-accent-700";

  return (
    <section {...storyblokEditable(blok)} className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {blok.title}
          </h2>
          {blok.description && (
            <p className="text-xl text-blue-100 mb-8">{blok.description}</p>
          )}
          <Link
            href={getLinkUrl(blok.button_link)}
            className="inline-block bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
          >
            {blok.button_text}
          </Link>
        </div>
      </div>
    </section>
  );
}
