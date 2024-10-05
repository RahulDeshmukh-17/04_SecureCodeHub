import React from "react";

export default function Card({d1,d2,d3,Data,Cname}) {
  return (
    <>
       <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1678086754/static/daniel-korpai-bokiptpzdpk-unsplashjpg_1678086751_94913.jpg"
        alt="Card image"
      />

      {/* Card content */}
      <div className="px-6 py-4">
        <div className="font-bold text-xs mb-2  h-auto flex-row">
            <button className="p-3 text-xs mr-2 bg-blue-200 hover:bg-blue-500 text-blue-500 hover:text-white rounded">{d1}</button>
            <button className="p-3 text-xs mr-2 bg-blue-200 hover:bg-blue-500 text-blue-500 hover:text-white rounded">{d2}</button>
            <button className="p-3 text-xs mr-2 bg-blue-200 hover:bg-blue-500 text-blue-500 hover:text-white rounded">{d3}</button>
        </div>
        <p className="font-bold text-2xl">{Cname}</p>
        <p className="text-gray-700 text-base text-base">
          {Data}
        </p>
      </div>

      {/* Button section */}
      <div className="py-4">
        <a
          href="#"
          className="bg-yellow-500 text-sm hover:bg-yellow-500 text-white font-bold py-2 px-4 ml-5 rounded-md"
        >
          Visit Website
        </a>
        <a
          href="#"
          className="bg-blue-700 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 ml-5 rounded-md"
        >
          View Case Study
        </a>
      </div>
    </div>
    </>
  );
}
