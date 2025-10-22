import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <>
      <h2 className="font-bold mb-5">Find us on</h2>
      <div className="join join-vertical w-full">
        <button className="btn  justify-start bg-base-100 join-item">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn justify-start bg-base-100  join-item">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn  justify-start bg-base-100 join-item">
          <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
    </>
  );
};

export default FindUs;
