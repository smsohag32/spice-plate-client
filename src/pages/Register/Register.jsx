import React, { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const { createUser, logoutUser, updateProfileInfo } = useContext(AuthContext);
  const [isEmpty, setIsEmpty] = useState(false);
  const [success, setSuccess] = useState("");
  const [nameEr, setNameEr] = useState("");
  const [emailEr, setEmailEr] = useState("");
  const [passwordEr, setPasswordEr] = useState("");
  const [matchingEr, setMatchingEr] = useState("");
  // handle user register
  const handleRegister = (e) => {
    e.preventDefault();
    setSuccess("");
    setNameEr("");
    setPasswordEr("");
    setMatchingEr("");
    setEmailEr("");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    const photoUrl = e.target.photo.value;

    // validation check
    if (!name) {
      setNameEr("Please fill out name field");
      return;
    } else if (!email) {
      setEmailEr("Please fill out email field");
      return;
    }
    // email validation
    else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      setEmailEr(`Email doesn't valid. include @`);
      return;
    } else if (!password) {
      setPasswordEr("Please fill out password field");
      return;
    } else if (!(password === confirm)) {
      setMatchingEr(`Password doesn't matching`);
      return;
    } else {
      setNameEr("");
    }
  };
  //   handle email validation
  const handleEmailEr = (e) => {
    console.log(e.target.value);
    const email = e.target.value;
    if (!email) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };
  //   handle password er
  const handlePasswordEr = (e) => {
    const password = e.target.value;
    if (!password) {
      setIsEmpty(true);
    } else if (password) {
      setIsEmpty(false);
    }
    if (password.length < 6) {
      setPasswordEr("Password must be 6 characters of long");
    } else {
      setPasswordEr("");
    }
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
              {nameEr && (
                <label className="label">
                  <span className="label-text-alt text-red-500 opacity-60 hover:text-red-500 hover:opacity-90 text-xs">
                    {nameEr}
                  </span>
                </label>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={handleEmailEr}
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
              {emailEr && (
                <label className="label">
                  <span className="label-text-alt text-red-500 opacity-60 hover:text-red-500 hover:opacity-90 text-xs">
                    {emailEr}
                  </span>
                </label>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={handlePasswordEr}
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              {passwordEr && (
                <label className="label">
                  <span className="label-text-alt text-red-500 opacity-60 hover:text-red-500 hover:opacity-90 text-xs">
                    {passwordEr}
                  </span>
                </label>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="confirm password"
                className="input input-bordered"
              />
              {matchingEr && (
                <label className="label">
                  <span className="label-text-alt text-red-500 opacity-60 hover:text-red-500 hover:opacity-90 text-xs">
                    {matchingEr}
                  </span>
                </label>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                placeholder="photoURL"
                className="input input-bordered"
                name="photo"
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

            <div className="form-control mt-5">
              <button
                disabled={isEmpty}
                type="submit"
                className="btn primary-btn"
              >
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
