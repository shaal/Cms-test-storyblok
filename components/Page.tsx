"use client";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

interface PageProps {
  blok: {
    _uid: string;
    component: string;
    body?: any[];
  };
}

export default function Page({ blok }: PageProps) {
  return (
    <div {...storyblokEditable(blok)} className="min-h-screen">
      {blok.body?.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
