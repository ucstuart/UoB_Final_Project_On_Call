import React from "react";

const SideNav = () => {
  return (
    <div className="w-1/6 bg-[#fff] hover:h-full flex flex-col mb-6 mb-10">
      <h1 className="text-center text-2xl mb-20 mt-5 text-dec"> ON CALL</h1>
      <div className="bg-[grey] w-100 h-10 mb-10 pr-10 text-right">Home</div>
      <div className="bg-[grey] w-100 h-10  mb-10 pr-10 text-right"> About us</div>
      <div className="bg-[grey] w-100 h-10 mb-10 pr-10 text-right"> Forms</div>
      <div className="bg-[grey] w-100 h-10 mb-10 pr-10 text-right">Pranks</div>
      <div className="bg-[grey] w-100 h-10 mb-10 pr-10 text-right">Texts</div>
      <div className="bg-[grey] w-100 h-10 mb-10 pr-10 text-right">Contact</div>
      <div className="bg-[grey] w-100 h-10  mb-10 pr-10 text-right">Information</div>
    </div>
  )
}
export default SideNav;
