'use client'

import { useState } from "react";

const navBarPage = () => {
  const [isClick , setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  }
  return (
    <div>
       <nav className="flex justify-between p-7 bg-white lg:px-56 items-center sticky z-10">
            <div>
                <img className=" lg:w-44" src='/logo.svg' alt="" />
            </div>

            <div className="hidden lg:flex justify-between gap-10 text-gray-500 text-xl ">
                <a href="">Home</a>
                <a href="">Abot</a>
                <a href="">Contact</a>
                <a href="">Blog</a>
                <a href="">Careers</a>
            </div>

            <div>
            <button className='hidden lg:flex items-center justify-center font-semibold rounded-full h-12 w-48 bg-gradient-to-r from-green-400 to-blue-400 text-white  hover:bg-gradient-to-r hover:from-gray-400 hover:to-green-200'>Request Invite</button>
            </div>

            <div onClick={handleClick} className="lg:hidden">
                <img className="w-[35px] h-5" src={isClick ? "/icon-close.svg" : '/icon-hamburger.svg'} alt="" />
            </div>
            
        </nav>
        <div className={`lg:hidden ${isClick ? "lg:hidden flex flex-col  gap-7 text-center text-gray-500 text-xl sticky z-10 bg-white p-7" : "hidden"} `}>
                <a href="">Home</a>
                <a href="">Abot</a>
                <a href="">Contact</a>
                <a href="">Blog</a>
                <a href="">Careers</a>
            </div>
    </div>
  )
}

export default navBarPage
