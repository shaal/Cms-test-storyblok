"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import { NewsletterBlok } from "@/lib/types";
import { useState } from "react";

interface NewsletterProps {
  blok: NewsletterBlok;
}

export default function Newsletter({ blok }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to your backend
    console.log("Newsletter signup:", email);
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section {...storyblokEditable(blok)} className="py-16 bg-primary-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {blok.title}
          </h2>
          {blok.description && (
            <p className="text-xl text-blue-100 mb-8">{blok.description}</p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={blok.placeholder || "Enter your email"}
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <button
              type="submit"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              {blok.button_text || "Subscribe"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-accent-200 font-semibold">
              Thank you for subscribing!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
