import { StoryblokStory } from "storyblok-generate-ts";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";

export default async function AboutPage() {
  let story: StoryblokStory | null = null;

  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/about", {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    story = data.story;
  } catch (error) {
    console.error("Error fetching story:", error);
  }

  if (!story) {
    return (
      <div className="min-h-screen">
        <div className="bg-primary-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-blue-100">
              Learn about our story and mission
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  Adventure Pack was founded with a simple mission: to create the perfect backpack for every journey.
                  Whether you're hiking through mountains, traveling across continents, or commuting to work,
                  we believe you deserve a backpack that combines quality, durability, and style.
                </p>
                <p>
                  Our team of designers and outdoor enthusiasts work tirelessly to create products that stand up
                  to the rigors of adventure while looking great in any setting. Every backpack is crafted with
                  premium materials and backed by our lifetime warranty.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Configure Storyblok for Custom Content
              </h2>
              <p className="text-gray-700">
                Create an "about" story in Storyblok with content_section components to customize this page with your brand story.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <StoryblokComponent blok={story.content} />;
}
