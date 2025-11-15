import { StoryblokStory } from "storyblok-generate-ts";
import { storyblokInit, apiPlugin, getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";

// Initialize Storyblok
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN!,
  use: [apiPlugin],
});

export default async function Home() {
  let story: StoryblokStory | null = null;

  try {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/home", {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    story = data.story;
  } catch (error) {
    console.error("Error fetching story:", error);
  }

  // Fallback content if Storyblok is not configured or story not found
  if (!story) {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-3xl">
              <p className="text-accent-300 font-semibold uppercase tracking-wide mb-4">
                Premium Quality Backpacks
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Adventure Awaits with the Perfect Backpack
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Discover our collection of premium backpacks designed for hiking, travel, and everyday adventures. Quality, durability, and style combined.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
                >
                  Shop Now
                </a>
                <a
                  href="#features"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-white/30"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Adventure Pack?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We design backpacks that combine functionality, durability, and style for all your adventures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "shield",
                  title: "Lifetime Warranty",
                  description: "We stand behind our products with a comprehensive lifetime warranty."
                },
                {
                  icon: "star",
                  title: "Premium Materials",
                  description: "Crafted from high-quality, durable materials that last for years."
                },
                {
                  icon: "truck",
                  title: "Free Shipping",
                  description: "Enjoy free shipping on all orders within the continental US."
                },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-100">
                    <svg
                      className="w-8 h-8 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                          feature.icon === "shield"
                            ? "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            : feature.icon === "star"
                            ? "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            : "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                        }
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Adventure?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Browse our collection and find the perfect backpack for your next journey.
              </p>
              <a
                href="/products"
                className="inline-block bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
              >
                View All Products
              </a>
            </div>
          </div>
        </section>

        {/* Setup Instructions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                🚀 Setup Instructions
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-700 mb-4">
                  This website is powered by <strong>Storyblok CMS</strong>. To get started:
                </p>
                <ol className="space-y-4 text-gray-700">
                  <li>
                    <strong>Create a Storyblok account:</strong> Visit{" "}
                    <a href="https://www.storyblok.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                      storyblok.com
                    </a>{" "}
                    and sign up for a free account.
                  </li>
                  <li>
                    <strong>Create a new space:</strong> In Storyblok, create a new space for your backpack website.
                  </li>
                  <li>
                    <strong>Get your access token:</strong> Go to Settings → Access Tokens and copy your preview token.
                  </li>
                  <li>
                    <strong>Configure your environment:</strong> Create a <code>.env.local</code> file and add:
                    <pre className="bg-gray-100 p-4 rounded-lg mt-2">
                      NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your_preview_token_here
                    </pre>
                  </li>
                  <li>
                    <strong>Install dependencies:</strong>
                    <pre className="bg-gray-100 p-4 rounded-lg mt-2">npm install</pre>
                  </li>
                  <li>
                    <strong>Start the development server:</strong>
                    <pre className="bg-gray-100 p-4 rounded-lg mt-2">npm run dev</pre>
                  </li>
                  <li>
                    <strong>Import component schemas:</strong> See the <code>STORYBLOK_SETUP.md</code> file for detailed instructions on creating the component schemas in Storyblok.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return <StoryblokComponent blok={story.content} />;
}
