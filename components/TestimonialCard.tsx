"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  blok: Testimonial;
}

export default function TestimonialCard({ blok }: TestimonialCardProps) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white p-8 rounded-xl shadow-md"
    >
      {blok.rating && (
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < blok.rating! ? "text-accent-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

      <p className="text-gray-700 mb-6 italic">&ldquo;{blok.content}&rdquo;</p>

      <div className="flex items-center">
        {blok.avatar?.filename ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={blok.avatar.filename}
              alt={blok.avatar.alt || blok.name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
            <span className="text-primary-600 font-bold text-lg">
              {blok.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-bold text-gray-900">{blok.name}</p>
          {blok.role && <p className="text-sm text-gray-600">{blok.role}</p>}
        </div>
      </div>
    </div>
  );
}
