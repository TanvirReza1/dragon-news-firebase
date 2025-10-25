import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex justify-center items-center gap-3 flex-col">
      <img src={logo} alt="" />
      <p className="text-accent">
        The Bangladesi News{" "}
        <small>
          <i>(REZA)</i>
        </small>
      </p>
      <p className="text-accent font-semibold">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
