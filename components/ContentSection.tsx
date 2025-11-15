"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import { ContentSectionBlok } from "@/lib/types";

interface ContentSectionProps {
  blok: ContentSectionBlok;
}

export default function ContentSection({ blok }: ContentSectionProps) {
  const imageOnLeft = blok.image_position === "left";

  return (
    <section {...storyblokEditable(blok)} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${imageOnLeft ? "" : "md:grid-flow-dense"}`}>
          <div className={imageOnLeft ? "md:order-2" : ""}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {blok.title}
            </h2>
            <div
              className="prose prose-lg text-gray-600"
              dangerouslySetInnerHTML={{ __html: blok.content }}
            />
          </div>

          {blok.image?.filename && (
            <div className={`relative h-96 rounded-xl overflow-hidden shadow-lg ${imageOnLeft ? "md:order-1" : ""}`}>
              <Image
                src={blok.image.filename}
                alt={blok.image.alt || blok.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
