import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/event/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const email = form.email.value;
    const datetime = form.datetime.value;
    const location = form.location.value;
    const description = form.description.value;
    const attendeeCount = parseInt(form.attendeeCount.value);

    const updatedData = {
      title,
      email,
      datetime,
      location,
      description,
      attendeeCount,
    };

    fetch(`${import.meta.env.VITE_BASE_URL}/update-event/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Event updated successfully!");
        navigate("/my-events");
      })
      .catch(() => {
        toast.error("Failed to update event.");
      });
  };

  const { title, email, datetime, location, description, attendeeCount } =
    event;

  return (
    <div className="w-full max-w-4xl bg-gray-900 rounded-2xl shadow-2xl p-10 border border-gray-700 mx-auto my-10">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Update Event
      </h2>

      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block text-white font-semibold mb-1">
            Event Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={title}
            required
            className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            defaultValue={location}
            required
            className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={email}
            readOnly
            className="w-full px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-md cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-1">
            Date & Time
          </label>
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            defaultValue={datetime?.slice(0, 16)}
            required
            className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-white font-semibold mb-1">
            Attendee Count
          </label>
          <input
            type="number"
            id="attendeeCount"
            name="attendeeCount"
            defaultValue={attendeeCount}
            readOnly
            className="w-full px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-md cursor-not-allowed"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-white font-semibold mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={description}
            rows="4"
            required
            className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn md:col-span-2 btn-grad w-full rounded-sm"
        >
          Update Event
        </button>
      </form>
    </div>
  );
};

export default UpdateEvent;
