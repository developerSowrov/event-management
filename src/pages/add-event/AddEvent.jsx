import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddEvent = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const eventData = {
      title: form.title.value,
      name: form.name.value,
      email: user.email,
      datetime: form.datetime.value,
      location: form.location.value,
      description: form.description.value,
      attendeeCount: 0,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/add-event`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      });

      if (res.ok) {
        alert("Event added successfully!");
        navigate("/events");
      } else {
        alert("Failed to add event");
      }
    } catch (err) {
      alert("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4 py-10">
      <div className="w-full max-w-4xl bg-gray-900 rounded-2xl shadow-2xl p-10 border border-gray-700">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-8">
          Add New Event
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Event Title */}
          <div>
            <label className="block text-white font-semibold mb-1">
              Event Title
            </label>
            <input
              name="title"
              type="text"
              placeholder="Enter event title"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-white font-semibold mb-1">
              Location
            </label>
            <input
              name="location"
              type="text"
              placeholder="Event location"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Posted By */}
          <div>
            <label className="block text-white font-semibold mb-1">
              Posted By
            </label>
            <input
              name="name"
              type="text"
              defaultValue={user?.name}
              disabled
              className="w-full px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-md cursor-not-allowed"
              required
            />
          </div>

          {/* Date & Time */}
          <div>
            <label className="block text-white font-semibold mb-1">
              Date & Time
            </label>
            <input
              name="datetime"
              type="datetime-local"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Attendee Count */}
          <div className="md:col-span-2">
            <label className="block text-white font-semibold mb-1">
              Attendee Count
            </label>
            <input
              name="attendeeCount"
              type="number"
              value={0}
              disabled
              className="w-full px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-md cursor-not-allowed"
            />
          </div>

          {/* Description (span 2 columns) */}
          <div className="md:col-span-2">
            <label className="block text-white font-semibold mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Describe the event"
              rows="4"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn md:col-span-2 btn-grad w-full rounded-sm"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
