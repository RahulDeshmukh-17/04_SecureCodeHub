import React from "react";

export default function Keycource() {
  return (
    <>
      <div className="bg-black p-16 flex-row justify-center m-12">
        <div className=" bg-black justify-center flex">
          <div className="flex justify-center p-6 ">
            <div className="text-white bg-black text-xl">
              Gain In-Demand Skills and
              <br />
              Industry Knowledge
            </div>
            <div className="text-white bg-black text-5xl ml-40">
              Stand Out with Certification in
              <br />
              Cybersecurity
            </div>
          </div>
        </div>
        <div className="bg-black flex gap-20 items-center p-9 m-28">
          <img
            className="w-96 h-96 object-cover rounded-2xl"
            src="https://res.cloudinary.com/dmuecdqxy/image/upload/v1725997399/sj43gwcbtonafv4tzass.jpg"
            alt="Card image"
          />
          <img
            className="w-96 h-96 object-cover rounded-2xl"
            src="https://res.cloudinary.com/dmuecdqxy/image/upload/v1725997399/d9nxaze1umrc5rwmvxgn.jpg"
            alt="Card image"
          />
        </div>

        <div className="text-white flex-row justify-center">
            <span className="flex justify-center text-5xl font-bold pb-10">Explore Our Key Courses</span>
            <div className="flex-col justify-center text-xl">
            <p className="flex justify-center">
            Our courses are designed to equip you with the latest skills in </p>
            <p className="flex justify-center">cybersecurity,ensuring you are prepared for real-world</p>
            <p className="flex justify-center"> challenges. From ethical hacking to penetration testing, explore </p>
            <p className="flex justify-center">what makes us stand out.</p>
            
            </div>
        </div>
      </div>
    </>
  );
}
