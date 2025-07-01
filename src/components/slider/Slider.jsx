import React from "react";
import tech from "../../assets/tech.jpg";
import night from "../../assets/song.jpg";
import skill from "../../assets/skill.jpg";
const Slider = () => {
  return (
    <div>
      <div className="carousel w-full mt-20">
        <div className="carousel-item w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${night})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md flex flex-col  items-center">
                <h1 className="mb-5 text-5xl font-bold">Live Music Night</h1>
                <p className="mb-5">
                  Experience electrifying performances by top bands. Let the
                  rhythm guide your night with friends!
                </p>
                <div>
                  <button className="btn btn-grad px-7 font-bold">
                    Browse Events
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${tech})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-lg flex flex-col  items-center ">
                <h1 className="mb-5 text-5xl font-bold">
                  Tech Conference 2025
                </h1>
                <p className="mb-5">
                  Discover innovations, meet industry leaders, and grow your
                  network at the biggest tech event of the year.
                </p>
                <div className=" ">
                  <button className="btn btn-grad px-7 font-bold">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item w-full">
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${skill})`,
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-2xl flex flex-col  items-center">
                <h1 className="mb-5 text-5xl font-bold">
                  Skill Workshop & Meetup
                </h1>
                <p className="mb-5">
                  Learn directly from experts and upgrade your skills. Join
                  interactive sessions and grow together.Learn directly from
                  experts and upgrade your skills. Join interactive sessions and
                  grow together.
                </p>
                <div className="">
                  <button className="btn btn-grad px-7 font-bold">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
