import React, { useEffect } from "react";
// import Slider from "../slider/Slider";
import { useLoaderData } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import Meet from "../../components/Meet/Meet";
import Service from "../../components/Service/Service";
import Content from "../../components/content/Content";

const Home = () => {
  const data = useLoaderData();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [data]);
  return (
    <div>
      {/* <Slider></Slider> */}
      <div className="w-[1150px] mx-auto">
        <Service></Service>
        <Meet></Meet>
        <Content></Content>
      </div>
    </div>
  );
};

export default Home;
