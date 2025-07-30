import React from "react";

const reviews = [
  {
    id: 1,
    name: "Tania Rahman",
    role: "Regular Customer",
    review:
      "Fresh items and fast delivery every time! I love shopping here — the vegetables always arrive crisp and clean.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Arif Mahmud",
    role: "Working Professional",
    review:
      "Such a time-saver! The grocery selection is great, prices are fair, and I never have to wait long for my orders.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Nadia Akter",
    role: "Home Chef",
    review:
      "This shop is a blessing! Always get my cooking essentials on time. The rice, oil, and spices are top-notch quality.",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
  },
];

const ClientsReview = () => {
  return (
    <section className="bg-gray-100 py-16 rounded-2xl">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(({ id, name, role, review, avatar }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={avatar}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {name}
                  </h3>
                  <p className="text-sm text-yellow-500 font-medium">{role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsReview;
