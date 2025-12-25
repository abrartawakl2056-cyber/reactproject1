import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
       <div className="navbar bg-slate-700 p-9   ">
           <div className="nav w-[90%] mx-auto uppercase flex justify-between text-white">
               <div className="logo  font-bold text-3xl  ">
                 <h1 className=" uppercase ">start framework</h1>
               </div>
               <div className="list  ">
                   <ul className="flex font-bold ">
                    <li className="me-10"><NavLink to='about'>about</NavLink></li>
                    <li className="me-10"><NavLink to='portofolio'>portofolio</NavLink></li>
                    <li><NavLink to='contact'>contact</NavLink></li>
                    
                   </ul>
               </div>
           </div>
       </div>
    </>
  )
}
