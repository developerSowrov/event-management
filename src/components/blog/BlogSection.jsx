import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Tips for Planning a Successful Event",
    date: "2025-06-20",
    excerpt:
      "Planning an event can be overwhelming. Here are the top five tips to make your next event a huge success.",
    author: "Sowrov",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    slug: "top-5-tips-planning-successful-event",
  },
  {
    id: 2,
    title: "Choosing the Perfect Venue for Your Event",
    date: "2025-05-15",
    excerpt:
      "The venue sets the tone for your event. Learn how to pick the perfect location to impress your guests.",
    author: "Tania Rahman",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    slug: "choosing-perfect-venue-event",
  },
  {
    id: 3,
    title: "How to Manage Event Budgets Efficiently",
    date: "2025-04-30",
    excerpt:
      "Managing your event budget is crucial. Discover effective strategies to keep your expenses under control.",
    author: "Arif Mahmud",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=60",
    slug: "manage-event-budgets-efficiently",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map(
            ({ id, title, date, excerpt, author, image, slug }) => (
              <div
                key={id}
                className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {new Date(date).toLocaleDateString()} &nbsp;|&nbsp; By{" "}
                    {author}
                  </p>
                  <p className="text-gray-700 mb-4">{excerpt}</p>
                  <a
                    href={`/blog/${slug}`}
                    className="text-yellow-500 font-semibold hover:underline"
                  >
                    Read More &rarr;
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
