import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <p className="text-5xl font-bold text-center mt-16">
        Unlock Your Potential with Our Courses
      </p>
      <p className=" text-lg mb-16 text-center text-gray-600 mt-3 w-10/12 mx-auto">
        Explore expertly designed courses tailored to enhance your skills,
        ignite your passion, and guide you toward achieving your personal and
        professional goals with confidence and success.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="shadow-2xl">
          <div className="max-w-sm mx-auto bg-white text-gray-800 rounded-lg shadow-lg border-2 border-yellow-400 overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="https://example.com/image.jpg" // ✅ put your own image link here
              alt="Career Counseling"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Career Counseling</h2>
              <p className="text-sm text-gray-600 mb-4">Education</p>

              <div className="mb-4">
                <span className="text-lg text-gray-500 mr-1">Price:</span>
                <span className="text-xl font-semibold">$49</span>
                <div className="text-sm text-gray-600 mt-4">Time: 1 Hour</div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">
                  Counselor:{" "}
                  <span className="font-bold text-gray-800">John Doe</span>
                </span>
                <span className="text-sm text-yellow-500">Rating: 4.8</span>
              </div>

              <div className="flex justify-center">
                <Link
                  to="/details/Career Counseling"
                  className="w-full btn bg-yellow-400 text-white font-bold btn-grad rounded-lg pt-4"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-5xl font-bold text-center mt-24">
        Our Milestones and <span className="t ">ACHIEVEMENTS</span>
      </p>
      <p className=" text-lg mb-10 text-center text-gray-600 mt-3 w-10/12 mx-auto">
        With dedication and hard work, we’ve reached remarkable
        milestones—transforming lives, earning trust, and making a meaningful
        impact. Every achievement reflects our commitment to your success and
        growth.
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-16 justify-center mx-auto w-9/12">
        <div className="btn-grad data  space-y-2 p-8" data-aos="fade-right">
          <p className="text-2xl lg:text-5xl font-bold">27K+</p>
          <p className="text-lg lg:text-2xl font-semibold">Client Success</p>
          <p className="text-sm">
            Join 27,000+ satisfied clients who have transformed their lives and
            achieved success with our expert guidance and personalized support.
          </p>
        </div>
        <div className="btn-grad data  space-y-2 p-8" data-aos="fade-left">
          <p className="text-2xl lg:text-5xl font-bold">7K+</p>
          <p className="text-lg lg:text-2xl font-semibold">Active Members</p>
          <p className="text-sm">
            Join our vibrant community of 7,000+ active members, all committed
            to growth, learning, and success. Together, we achieve more!
          </p>
        </div>

        <div className="btn-grad data  space-y-2 p-8" data-aos="fade-left">
          <p className="text-2xl lg:text-5xl font-bold">100+</p>
          <p className="text-lg lg:text-2xl font-semibold">Country Visited</p>
          <p className="text-sm">
            Explore the world with us! We've helped clients from over 100
            countries discover new opportunities and achieve their dreams
            globally.
          </p>
        </div>
        <div className="btn-grad data  space-y-2 p-8" data-aos="fade-right">
          <p className="text-2xl lg:text-5xl font-bold">4.7</p>
          <p className="text-lg lg:text-2xl font-semibold">Client Ratings</p>
          <p className="text-sm">
            With a 4.7-star client rating, we pride ourselves on delivering
            exceptional service and results that exceed expectations every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
