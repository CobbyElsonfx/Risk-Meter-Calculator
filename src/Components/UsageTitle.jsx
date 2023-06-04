import React from "react";
import {
    Typography,
  } from "@material-tailwind/react";

function UsageTitle() {
    return (
        <> 
         <h1 className="text-center font-medium font-[50px]">Risk Meter</h1>
          <Typography className="text-center text-sm sm:text-md font-sans px-4">
             Your website is often the face of your brand. It is where you present your products and services and how you build brand awareness and trust. However, in today’s fast-paced digital world, risks are commonplace. So, it is critical to implement certain website maintenance practices to help reduce your risk. 
             Calculate yours now:
          </Typography>  
        </>
    )
}

export default UsageTitle
