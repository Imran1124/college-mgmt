import React from 'react';

export default function SkeletonLoader({ height }) {
  return (
    <div role="status" className=" animate-pulse w-full">
      <div className={`${height} bg-gray-200 rounded-lg`}></div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
