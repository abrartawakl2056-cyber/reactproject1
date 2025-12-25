import React from "react";

export default function About() {
  return (
    <>
      <div className="about  bg-teal-500 h-auto lg:h-150 position-relative overflow-hidden ">
        <h1 className="text-white text-4xl text-center uppercase font-bold  mt-50">
          about component
        </h1>
        <div className="lines mx-auto mt-3 flex justify-center items-center">
          <div className="line w-20 bg-white h-1 me-4"></div>
          <i className="fa-solid fa-star text-white me-4"></i>
          <div className="line w-20 bg-white h-1"></div>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 mx-auto w-[80%] mt-8 text-white gap-8  flex-wrap">
          <div className="col-1 ">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
          <div className="col-2 ">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
        </div>
      </div>
    </>
  );
}
