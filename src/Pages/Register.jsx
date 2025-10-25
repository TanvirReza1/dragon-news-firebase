import React, { use, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 chararctar");
      return;
    } else {
      setNameError("");
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log("all registered info-", name, photo, email, password);
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl">Register your account</h2>
        <form onSubmit={handleRegister} className="card-body">
          {/* name */}
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-xs text-error">{nameError}</p>}
            {/* phtotURL */}
            <label className="label">PhotoURL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="PhotoURL"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center">
              Already have an account ?
              <Link className="text-secondary" to="/auth/logIn">
                LogIn
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
