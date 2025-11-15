import { StoryblokStory } from "storyblok-generate-ts";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";

export default async function ProductsPage() {
  let story: StoryblokStory | null = null;

  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/products", {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    story = data.story;
  } catch (error) {
    console.error("Error fetching story:", error);
  }

  if (!story) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-primary-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-blue-100">
              Explore our premium collection of backpacks
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Configure Storyblok to View Products
            </h2>
            <p className="text-gray-700">
              Create a "products" story in Storyblok with product_grid components to display your backpack collection here.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <StoryblokComponent blok={story.content} />;
}
