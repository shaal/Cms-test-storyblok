"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import { Product } from "@/lib/types";

interface ProductCardProps {
  blok: Product;
}

export default function ProductCard({ blok }: ProductCardProps) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        {blok.image?.filename && (
          <Image
            src={blok.image.filename}
            alt={blok.image.alt || blok.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        {blok.category && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {blok.category}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{blok.name}</h3>
        {blok.description && (
          <p className="text-gray-600 mb-4 line-clamp-2">{blok.description}</p>
        )}

        {blok.features && blok.features.length > 0 && (
          <ul className="space-y-1 mb-4">
            {blok.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-2xl font-bold text-primary-600">
            ${blok.price}
          </span>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
