import StoryblokClient from "storyblok-js-client";

const accessToken = process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN;

// Initialize Storyblok client (only if token is available)
export const storyblokClient = accessToken
  ? new StoryblokClient({
      accessToken,
      cache: {
        clear: "auto",
        type: "memory",
      },
    })
  : null;

export async function getStoryblokData(slug: string, params?: any) {
  if (!storyblokClient) {
    console.warn("Storyblok client not initialized. Please set NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN");
    return null;
  }

  try {
    const { data } = await storyblokClient.get(`cdn/stories/${slug}`, {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
      ...params,
    });
    return data;
  } catch (error) {
    console.error("Error fetching Storyblok data:", error);
    return null;
  }
}
