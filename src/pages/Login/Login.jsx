import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
// login component

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  // handle user login
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-slate-50">
      <div className="default-container py-4">
        <div className="card w-full max-w-sm md:max-w-md mx-auto my-5 shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div>
              <h5 className="text-2xl font-bold text-center">Login</h5>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control">
              <span className="text-xs">
                Don't have an account? please{" "}
                <Link className="primary-text font-medium link" to="/register">
                  Register
                </Link>
              </span>
            </div>
            {error && (
              <div className="mt-1 text-red-400 bg-warning rounded-sm py-2  transform bg-opacity-10 duration-300 font-medium text-sm">
                <p className="ms-3">{error}</p>
              </div>
            )}
            <div className="form-control mt-4">
              <button type="submit" className="btn primary-btn">
                Login
              </button>
            </div>
            <hr className="my-2 border-2" />
            <button className="btn mx-5 btn-outline flex justify-around hover:primary-text">
              <FcGoogle className="text-2xl" /> Continue with google
            </button>
            <button className="btn mx-5 btn-outline flex justify-around hover:primary-text">
              <FaGithub className="text-2xl" /> Continue with gitHub
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
