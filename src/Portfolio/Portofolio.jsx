import React, { useState } from "react";
import poert1 from "../assets/poert1.png";
import poert2 from "../assets/port2.png";
import poert3 from "../assets/port3.png";
export default function Portofolio() {
  const [openImg, setOpenImg] = useState(null);

  return (
    <>
      <div className="container mx-auto w-[80%] text-center h-auto mb-9">
        <h1 className="mt-7 text-slate-700 font-bold text-4xl uppercase">
          portfolio component
        </h1>
        <div className="lines mx-auto mt-3 flex justify-center items-center  ">
          <div className="line w-20 bg-slate-700 h-1 me-4 "></div>
          <i className="fa-solid fa-star text-slate-700 me-4" />
          <div className="line w-20 bg-slate-700 h-1  "></div>
        </div>

        <div className=" mx-auto mt-10">
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3 ">
            <div
              className="card-1  relative "
              onClick={() => {
                setOpenImg(poert1);
              }}
            >
              <img src={poert1} alt="poert1" className="rounded " />
              <div className="layer absolute top-0 bottom-0 start-0 end-0 bg-teal-700 z-10  opacity-0 hover:opacity-70 transition duration-700 rounded">
                <div className="zoom relative top-1/2 -translate-y-1/2 ">
                  <i className="fa-solid fa-plus text-7xl text-white z-20  " />
                </div>
              </div>
            </div>

            <div
              className="card-1 relative  "
              onClick={() => {
                setOpenImg(poert2);
              }}
            >
              <img src={poert2} alt="poert1" className="rounded" />
              <div className="layer absolute top-0 bottom-0 start-0 end-0 bg-teal-700 z-10  opacity-0 hover:opacity-70 transition duration-700 rounded">
                <div className="zoom relative top-1/2 -translate-y-1/2 ">
                  <i className="fa-solid fa-plus text-7xl text-white z-20  " />
                </div>
              </div>
            </div>
            <div
              className="card-1 relative "
              onClick={() => {
                setOpenImg(poert3);
              }}
            >
              <img src={poert3} alt="poert1" className="rounded" />
              <div className="layer absolute top-0 bottom-0 start-0 end-0 bg-teal-700 z-10  opacity-0 hover:opacity-70 transition duration-700 rounded">
                <div className="zoom relative top-1/2 -translate-y-1/2 ">
                  <i className="fa-solid fa-plus text-7xl text-white z-20  " />
                </div>
              </div>
            </div>
            <div
              className="card-1 relative "
              onClick={() => {
                setOpenImg(poert1);
              }}
            >
              <img src={poert1} alt="poert1" className="rounded" />
              <div className="layer absolute top-0 bottom-0 start-0 end-0 bg-teal-700 z-10  opacity-0 hover:opacity-70 transition duration-700 rounded">
                <div className="zoom relative top-1/2 -translate-y-1/2 ">
                  <i className="fa-solid fa-plus text-7xl text-white z-20  " />
                </div>
              </div>
            </div>
            <div
              className="card-1 relative"
              onClick={() => {
                setOpenImg(poert2);
              }}
            >
              <img src={poert2} alt="poert1" className="rounded" />
              <div className="layer absolute top-0 bottom-0 start-0 end-0 bg-teal-700 z-10  opacity-0 hover:opacity-70 transition duration-700 rounded">
                <div className="zoom relative top-1/2 -translate-y-1/2 ">
                  <i className="fa-solid fa-plus text-7xl text-white z-20  " />
                </div>
              </div>
            </div>
            <div
              className="card-1 relative"
              onClick={() => {
                setOpenImg(poert3);
              }}
            >
              <img src={poert3} alt="poert1" className="rounded" />
              <div className="layer absolute top-0 bottom-0 start-0 end-0 bg-teal-700 z-10  opacity-0 hover:opacity-70 transition duration-700 rounded">
                <div className="zoom relative top-1/2 -translate-y-1/2 ">
                  <i className="fa-solid fa-plus text-7xl text-white z-20  " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openImg && (
        <div
          style={{ backgroundColor: "rgba(13,148,136,0.3)" }}
          className="fixed inset-0  z-50 flex items-center justify-center"
          onClick={() => setOpenImg(null)}
        >
          <img src={openImg} className="max-w-[50%] max-h-[50%] rounded z-10" />
        </div>
      )}
    </>
  );
}
