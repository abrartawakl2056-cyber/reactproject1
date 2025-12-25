import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer bg-slate-600 p-10">
        <div
          className="w-full mx-auto grid gap-8 
                  grid-cols-1 md:grid-cols-3 text-center text-white"
        >
          <div className="grid1">
            <h2 className="text-2xl md:text-4xl uppercase font-bold tracking-wide mb-2">
              Location
            </h2>
            <p className="mb-2">2215 John Daniel Drive</p>
            <h6>Clark, MO 65243</h6>
          </div>

          <div className="grid2">
            <h2 className="text-2xl md:text-3xl uppercase font-bold tracking-wide mb-2">
              Around the Web
            </h2>
            <div className="flex justify-center gap-4 mt-2">
              <i className="fa-brands fa-facebook text-3xl"></i>
              <i className="fa-brands fa-twitter text-3xl"></i>
              <i className="fa-brands fa-linkedin text-3xl"></i>
              <i className="fa-solid fa-globe text-3xl"></i>
            </div>
          </div>

          <div className="grid3">
            <h2 className="text-2xl md:text-3xl uppercase font-bold tracking-wide">
              About Freelancer
            </h2>
            <p className="mt-2">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="footer-end bg-slate-800 text-center text-white p-3">
        <h6>Copyright © Your Website 2021</h6>
      </div>
    </>
  );
}
