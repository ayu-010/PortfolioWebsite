"use client";
import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20 w-full">
      {/* 
      .max-w-7xl 
    max-width: 80rem /* 1280px 
*/}
      <h1 className="heading">
        A small collection of{" "}
        <span className="text-orange-500">My Recent Projects</span>
      </h1>

      {/* max width = 80rem 1280px */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10  ">
        {projects.map(({ id, title, des, img, iconLists, link }) => (

          // ek single project ki heigh t width md 768  lg1024
          <div
            className=" lg:min-h-[32.5rem]  sm:h-[41rem] w-[80vw]  h-[32rem]  flex items-center justify-center sm:w-[570px]   "
            key={id}
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[40vw] h-[15vh] overflow-hidden sm:h-[40vh]  mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  
                  <img src="/bg.png" alt="bgimg" />


                </div>
                <img src={img} alt="cover" className="z-10 absolute bottom-0" />
              </div>
              
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-yelllow-400 ">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>


            </PinContainer>

          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
