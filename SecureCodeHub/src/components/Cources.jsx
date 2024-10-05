import React from "react";
import Card from "./Card";

function Cources({Cname}) {
  return (
    <>
      <div className="text-center">
        <p className="text-blue-400 text-center text-14px font-sans">
          TAKE A LOOK
        </p>
        <p className="text-34px">Some Related Cources</p>
      </div>
      
      <div>
        <Card d1="BRANDING" d2="UX DESIGN" d3="WEBDESIGN" Data="This focuses on designing the ways in which users interact with a product or service. Interaction designers work to create intuitive, easy-to-use interfaces that enable users to complete tasks ." Cname="Java Full Stack With DSA"/>
      </div>
    </>
  );
}

export default Cources;
