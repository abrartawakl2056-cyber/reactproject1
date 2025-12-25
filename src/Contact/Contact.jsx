import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container mx-auto w-[80%] text-center h-auto mb-9 ">
        <h1 className="mt-7 text-slate-700 font-bold text-4xl uppercase">
          conatct section
        </h1>
        <div className="lines mx-auto mt-3 flex justify-center items-center  ">
          <div className="line w-20 bg-slate-700 h-1 me-4 "></div>
          <i class="fa-solid fa-star text-slate-700 me-4"></i>
          <div className="line w-20 bg-slate-700 h-1  "></div>
        </div>

        <div className="mx-auto mt-4  text-start w-[70%]  relative">
          <form action="">
           
            <input
              type="text"
              placeholder="userName"
              className=" border-b border-b-gray-300 w-full peer rounded focus:outline-0"
            /> 
           
            <input
              type="number"
              placeholder="userAge"
              className=" border-b border-b-gray-300 w-full peer rounded mt-20 focus:outline-0"
            /> 
           
            <input
              type="email"
              placeholder="userEmail"
              className=" border-b border-b-gray-300 w-full peer rounded mt-20 focus:outline-0"
            /> 
            <input
              type="password"
              placeholder="userPassword"
              className=" border-b border-b-gray-300 w-full peer rounded mt-20 focus:outline-0"
            /> 
          
           <button type="submit " className="bg-teal-500 text-white  rounded mt-20 p-2"> SendMessage</button>
          </form>
        </div>
      </div>
    </>
  );
}
