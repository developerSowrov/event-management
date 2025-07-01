import React, { useEffect, useState } from "react";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("all");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/events`)
      .then((res) => res.json())
      .then((results) => {
        setEvents(results);
      });
  }, []);

  const handleJoin = async (eventId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?.email) {
      alert("Please log in to join the event.");
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/events/${eventId}/join`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to join.");
        return;
      }

      alert("Joined successfully!");

      // Refresh events
      const updatedRes = await fetch(`${import.meta.env.VITE_BASE_URL}/events`);
      const updatedEvents = await updatedRes.json();
      setEvents(updatedEvents);
    } catch (err) {
      console.error("Join Error:", err);
      alert("Something went wrong.");
    }
  };

  const startOfDay = (date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const endOfDay = (date) =>
    new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23,
      59,
      59,
      999
    );

  const getStartOfWeek = (date) => {
    const day = date.getDay();
    const diff = date.getDate() - day;
    return new Date(date.getFullYear(), date.getMonth(), diff);
  };
  const getEndOfWeek = (date) => {
    const start = getStartOfWeek(date);
    return new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate() + 6,
      23,
      59,
      59,
      999
    );
  };

  const getStartOfLastWeek = (date) => {
    const startCurrentWeek = getStartOfWeek(date);
    return new Date(
      startCurrentWeek.getFullYear(),
      startCurrentWeek.getMonth(),
      startCurrentWeek.getDate() - 7
    );
  };

  const getEndOfLastWeek = (date) => {
    const startLastWeek = getStartOfLastWeek(date);
    return new Date(
      startLastWeek.getFullYear(),
      startLastWeek.getMonth(),
      startLastWeek.getDate() + 6,
      23,
      59,
      59,
      999
    );
  };

  const getStartOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1);
  const getEndOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);

  const getStartOfLastMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() - 1, 1);
  const getEndOfLastMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 0, 23, 59, 59, 999);

  const filteredEvents = events.filter((event) => {
    if (!event.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    const eventDate = new Date(event.datetime);
    const now = new Date();

    switch (dateFilter) {
      case "currentWeek": {
        const start = getStartOfWeek(now);
        const end = getEndOfWeek(now);
        return eventDate >= start && eventDate <= end;
      }
      case "lastWeek": {
        const start = getStartOfLastWeek(now);
        const end = getEndOfLastWeek(now);
        return eventDate >= start && eventDate <= end;
      }
      case "currentMonth": {
        const start = getStartOfMonth(now);
        const end = getEndOfMonth(now);
        return eventDate >= start && eventDate <= end;
      }
      case "lastMonth": {
        const start = getStartOfLastMonth(now);
        const end = getEndOfLastMonth(now);
        return eventDate >= start && eventDate <= end;
      }
      default:
        return true;
    }
  });

  return (
    <div className="max-w-11/12 mx-auto my-10">
      {/* Search input */}
      <div className="mb-6 flex flex-col md:justify-between md:flex-row md:items-center md:space-x-4">
        <input
          type="text"
          placeholder="Search events by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 mb-4 md:mb-0 w-full md:w-1/3"
        />

        {/* Date filter dropdown */}
        <select
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/4"
        >
          <option value="all">All Dates</option>
          <option value="currentWeek">Current Week</option>
          <option value="lastWeek">Last Week</option>
          <option value="currentMonth">Current Month</option>
          <option value="lastMonth">Last Month</option>
        </select>
      </div>

      {/* Events grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
        {filteredEvents.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No events found.
          </p>
        ) : (
          filteredEvents.map((event) => (
            <div
              key={event._id}
              className="shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="max-w-sm mx-auto bg-white text-gray-800 rounded-lg shadow-lg border-2 border-yellow-400 overflow-hidden">
                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-1">{event.title}</h2>

                  {/* Posted By */}
                  <p className="text-sm text-gray-600 mb-2">
                    Posted By:{" "}
                    <span className="font-semibold text-gray-800">
                      {event.name}
                    </span>
                  </p>

                  {/* Date & Location */}
                  <div className="text-sm text-gray-600 mb-2">
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
                  <div
                    onClick={() => handleJoin(event._id)}
                    className="flex justify-center"
                  >
                    <button
                      // to={`/event-details/${event._id}`}
                      className="w-full btn bg-yellow-400 text-white font-bold btn-grad rounded-lg  text-center"
                    >
                      Join Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Event;
