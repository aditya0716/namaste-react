import { Outlet } from "react-router-dom";
import React from "react";

const About = () => {
  return (
    <div>
      <h1>Finding the path</h1>
      <Outlet />
    </div>
  );
};

export default About;
