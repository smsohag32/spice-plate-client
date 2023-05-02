import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  // handle user register
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-slate-50">
      <div className="default-container py-4">
        <div className="card w-full max-w-md mx-auto my-5 shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div>
              <h5 className="text-2xl font-bold text-center">
                Create an Account
              </h5>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
              />
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
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-2">
              <span className="text-xs">
                Already have an account? please
                <Link
                  className="primary-text font-medium ms-1 link"
                  to="/login"
                >
                  Login
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

export default Register;
