import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const LogIn = () => {
  const [error, setError] = useState("");
  const { signIn } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log("log in successfully", email, password);
    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);

        navigate(`${location.state ? location.state : "/"}`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        setError(errorCode);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl">LogIn your account</h2>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

            <p className="font-semibold text-center">
              Don't have an account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
