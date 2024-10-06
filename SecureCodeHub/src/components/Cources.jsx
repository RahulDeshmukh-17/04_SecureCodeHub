import React from "react";
import Card from "./Card";
import Keycource from "./Keycource";

function Cources() {
  return (
    <>
<div className="bg-black flex justify-center">
    <div className="w-4/5 bg-white p-14 ">
    <div>
      <div className="text-center p-8" >
        <p className="text-blue-400 text-center text-base font-bold p-5">
          TAKE A LOOK
        </p>
        <p className="text-4xl pb-6 font-sans font-bold">Some Related Cources</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <Card d1="BRANDING" d2="UX DESIGN" d3="WEBDESIGN" Data="This focuses on designing the ways in which users interact with a product or service. Interaction designers work to create intuitive, easy-to-use interfaces that enable users to complete tasks ." Cname="Java Full Stack With DSA" imgadd="https://res.cloudinary.com/dbyioi2qq/q_auto/v1678086754/static/daniel-korpai-bokiptpzdpk-unsplashjpg_1678086751_94913.jpg"/>
        <Card d1="MARKETING" d2="Digital DESIGN" d3="WEBDESIGN" Data="This specialization focuses on creating the visual elements of a website, including color, typography, and layout. Visual designers work to create a cohesive and visually appealing look and feel for the website." Cname="MERN Stack Development" imgadd="https://res.cloudinary.com/dbyioi2qq/q_auto/v1678086905/static/milad-fakurian-0_8gaofrzbw-unsplashjpg_1678086904_37172.jpg"/>
        <Card d1="BRANDING" d2="UX DESIGN" d3="WEBDESIGN" Data="This speciality focuses on developing a long-term plan for how a brand should be positioned in the marketplace. Brand strategists conduct research to understand the target audience, competitors." Cname="Blockchain Development" imgadd="https://res.cloudinary.com/dbyioi2qq/q_auto/v1678087027/static/lee-campbell-dtdlvpy-vvq-unsplashjpg_1678087024_22296.jpg"/>
        </div>
      </div>
    </div>
    </div>
    </div>
    <div className="flex justify-center bg-black">
      <Keycource/>
    </div>
    <div>
      
    </div>
    </>
  );
}

export default Cources;
