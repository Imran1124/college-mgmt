import React from 'react';
import { IoMdRefresh } from 'react-icons/io';

export default function RefreshButton() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center">
      <div className="group flex relative">
        <button
          onClick={handleRefresh}
          className="w-12 transform hover:scale-110 transition duration-300 ease-in-out hover:text-blue-500"
        >
          <IoMdRefresh size={28} />
        </button>
        <span
          className="group-hover:opacity-100 transition-opacity bg-[#115e59] px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto font-normal"
        >
          Reload
        </span>
      </div>
    </div>
  );
}
