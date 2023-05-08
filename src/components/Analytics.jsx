import React from "react";
import Laptop from "../assests/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#33d3a0] font-bold"> DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:3xl text-2xl ">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure
            nobis, dolor quidem assumenda aperiam placeat! Eius iste ex, culpa
            illo tempora, expedita enim sit debitis accusamus porro sint. Sequi.
          </p>
          <button className=" bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 transition duration-300 ease-in-out hover:scale-110">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
