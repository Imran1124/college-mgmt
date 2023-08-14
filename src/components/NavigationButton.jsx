import React from 'react';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

export default function NavigationButton() {
  const handleBack = () => {
    window.history.back();
  };

  const handleForward = () => {
    window.history.forward();
  };

  return (
    <div className="flex justify-between items-center">
      <div className="group flex relative">
        <button
          type="button"
          data-tooltip-target="tooltip-bottom"
          data-tooltip-placement="bottom"
          className="
          w-10
          transform
          hover:scale-110
          transition
          duration-300
          ease-in-out
          hover:text-blue-500"
          onClick={handleBack}
        >
          <IoMdArrowBack size={25} />
        </button>
        <span
          className="group-hover:opacity-100 transition-opacity bg-[#115e59] px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto "
        >
          Back
        </span>
      </div>
      <div className="group flex relative">
        <button
          className=" w-10
          transform
          hover:scale-110
          transition
          duration-300
          ease-in-out
          hover:text-blue-500"
          onClick={handleForward}
        >
          <IoMdArrowForward size={25} />
        </button>
        <span
          className="group-hover:opacity-100 transition-opacity bg-[#115e59] px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
        >
          Forward
        </span>
      </div>
    </div>
  );
}
