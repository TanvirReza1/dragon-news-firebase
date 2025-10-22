import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogIn = () => {
  return (
    <div>
      <h2 className="font-bold">LogIn With</h2>
      <div className="space-y-3">
        <button className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> LogIn with google
        </button>
        <button className="btn btn-base btn-outline w-full">
          <FaGithub size={24} /> LogIn with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
