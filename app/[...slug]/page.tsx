import { StoryblokStory } from "storyblok-generate-ts";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string[];
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const slug = params.slug ? params.slug.join("/") : "home";

  let story: StoryblokStory | null = null;

  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    story = data.story;
  } catch (error) {
    console.error("Error fetching story:", error);
    notFound();
  }

  if (!story) {
    notFound();
  }

  return <StoryblokComponent blok={story.content} />;
}

export async function generateStaticParams() {
  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/links/", {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });

    const paths: { slug: string[] }[] = [];

    Object.values(data.links).forEach((link: any) => {
      if (link.is_folder || link.slug === "home") {
        return;
      }

      const slug = link.slug === "/" ? [] : link.slug.split("/").filter(Boolean);
      paths.push({ slug });
    });

    return paths;
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
