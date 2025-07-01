import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyEvent = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/my-events/${user.email}`)
      .then((res) => res.json())
      .then((results) => {
        setEvents(results);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    const ToastContent = ({ closeToast }) => (
      <div>
        <p>Are you sure you want to delete this event?</p>
        <div className="mt-2 flex justify-end gap-2">
          <button
            onClick={async () => {
              closeToast();
              try {
                const res = await fetch(
                  `${import.meta.env.VITE_BASE_URL}/event/${id}`,
                  {
                    method: "DELETE",
                  }
                );

                const data = await res.json();

                if (res.ok) {
                  toast.success("Event deleted successfully!");
                  setEvents((prev) => prev.filter((event) => event._id !== id));
                } else {
                  toast.error(data.message || "Failed to delete event.");
                }
              } catch (error) {
                console.error("Delete Error:", error);
                toast.error("Something went wrong while deleting.");
              }
            }}
            className="btn bg-red-500 text-white"
          >
            Yes
          </button>
          <button onClick={closeToast} className="btn bg-white">
            No
          </button>
        </div>
      </div>
    );

    toast.info(<ToastContent />, {
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
    });
  };

  return (
    <div className="grid max-w-11/12 mx-auto my-10 grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
      {events.length === 0 ? (
        <p className="text-center col-span-full text-gray-500">
          No events found.
        </p>
      ) : (
        events.map((event) => (
          <div
            key={event._id}
            className="shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="max-w-sm mx-auto bg-white text-gray-800 rounded-lg shadow-lg border-2 border-yellow-400 overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-1">{event.title}</h2>
                <p className="text-sm text-gray-600 mb-2">
                  Posted By:{" "}
                  <span className="font-semibold text-gray-800">
                    {event.name}
                  </span>
                </p>
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
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                  {event.description}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">Attendees:</span>{" "}
                  {event.attendeeCount}
                </p>
                <div className="flex gap-4 justify-between mt-4">
                  <Link
                    to={`/event-update/${event._id}`}
                    className="w-1/2 btn bg-blue-500 text-white font-bold rounded-lg "
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="w-1/2 btn bg-red-500 text-white font-bold rounded-lg "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyEvent;
