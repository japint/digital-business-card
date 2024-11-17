import React from "react";
import profilePic from "../assets/images/main--img.jpg";

const Navbar = () => {
  return (
    <nav>
      <img src={profilePic} className="card--image" />
    </nav>
  );
};

export default Navbar;
