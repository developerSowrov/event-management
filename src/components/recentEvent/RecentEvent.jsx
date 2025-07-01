import React from "react";
const filteredEvents = [
  {
    _id: "1",
    title: "Annual Tech Conference 2025",
    name: "Sowrov Hossain",
    datetime: "2025-08-10T10:00:00",
    location: "Dhaka Convention Center",
    description:
      "Join industry leaders and tech enthusiasts for a day of innovation, networking, and insights into the future of technology.",
    attendeeCount: 120,
  },
  {
    _id: "2",
    title: "Food & Fun Festival",
    name: "Tania Rahman",
    datetime: "2025-07-15T15:00:00",
    location: "Gulshan Lake Park",
    description:
      "A vibrant outdoor festival filled with food stalls, live music, games, and family-friendly entertainment.",
    attendeeCount: 350,
  },
  {
    _id: "3",
    title: "Startup Pitch Night",
    name: "Arif Mahmud",
    datetime: "2025-07-25T18:30:00",
    location: "Innovation Hub, Banani",
    description:
      "Watch aspiring entrepreneurs pitch their groundbreaking ideas to a panel of investors and mentors.",
    attendeeCount: 80,
  },
  {
    _id: "4",
    title: "Photography Masterclass",
    name: "Nadia Akter",
    datetime: "2025-07-18T14:00:00",
    location: "Studio LensArt, Dhanmondi",
    description:
      "Learn professional techniques from expert photographers in this hands-on creative workshop.",
    attendeeCount: 40,
  },
  {
    _id: "5",
    title: "Open Air Movie Night",
    name: "Farhan Islam",
    datetime: "2025-07-22T19:00:00",
    location: "Central Playground, Uttara",
    description:
      "Enjoy a cozy movie night under the stars with popcorn, blankets,launch,dinner and your favorite films.",
    attendeeCount: 200,
  },
  {
    _id: "6",
    title: "Corporate Leadership Summit",
    name: "Shamim Reza",
    datetime: "2025-08-01T09:00:00",
    location: "Hotel Intercontinental, Dhaka",
    description:
      "An exclusive summit for business leaders to explore strategic growth, innovation, and networking opportunities.",
    attendeeCount: 95,
  },
];

const RecentEvent = () => {
  return (
    <div>
      <div className=" pb-10 bg-gray-100 pt-10 rounded-2xl">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div>
            <p className="text-5xl font-bold text-center ">Up Coming Events</p>
            <p className="text-lg text-center text-gray-600 mt-3 mb-10 w-10/12 mx-auto">
              Explore our latest events and be a part of something special. From
              corporate gatherings to community festivals — we host it all!
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event._id}
                className="shadow-xl transition-transform transform hover:scale-105"
              >
                <div className="max-w-sm mx-auto bg-white text-gray-800 rounded-xl border-2 border-yellow-400 overflow-hidden">
                  <div className="p-6">
                    {/* Title */}
                    <h2 className="text-xl font-bold mb-1">{event.title}</h2>

                    {/* Posted By */}
                    <p className="text-sm text-gray-600 mb-2">
                      Posted by:{" "}
                      <span className="font-semibold text-gray-800">
                        {event.name}
                      </span>
                    </p>

                    {/* Date & Location */}
                    <div className="text-sm text-gray-600 mb-3 space-y-1">
                      <p>
                        <span className="font-bold">Date:</span>{" "}
                        {new Date(event.datetime).toLocaleDateString()}
                      </p>
                      <p>
                        <span className="font-bold">Time:</span>{" "}
                        {new Date(event.datetime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                      <p>
                        <span className="font-bold">Location:</span>{" "}
                        {event.location}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Attendee Count */}
                    <p className="text-sm text-gray-600 mb-4">
                      <span className="font-medium">Attendees:</span>{" "}
                      {event.attendeeCount}
                    </p>

                    {/* Join Button */}
                    <button className="btn btn-grad px-7 font-bold">
                      Join Event
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEvent;
