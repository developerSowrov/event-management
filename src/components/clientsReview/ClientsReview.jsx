import React from "react";

const reviews = [
  {
    id: 1,
    name: "Tania Rahman",
    role: "Event Organizer",
    review:
      "Sowrov's event management service made our conference a huge success! Professional and attentive to every detail.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Arif Mahmud",
    role: "Startup Founder",
    review:
      "The team was incredible in handling all our event needs smoothly. Highly recommended for corporate events.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Nadia Akter",
    role: "Photographer",
    review:
      "Very friendly and professional! Their planning and execution were flawless and the venues were perfect.",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg",
  },
];

const ClientsReview = () => {
  return (
    <section className="bg-gray-100 py-16 rounded-2xl">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          What Our Clients Say
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
