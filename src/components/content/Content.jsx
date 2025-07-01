import React from "react";

const Content = () => {
  return (
    <div>
      <p className="text-5xl font-bold text-center mt-5">
        Our Milestones and <span className="t">ACHIEVEMENTS</span>
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
