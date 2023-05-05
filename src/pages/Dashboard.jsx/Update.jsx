import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Update = () => {
  const { updateProfileInfo, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [nameEr, setNameEr] = useState("");
  const [emailEr, setEmailEr] = useState("");
  const [passwordEr, setPasswordEr] = useState("");
  const [matchingEr, setMatchingEr] = useState("");
  // handle user register
  const handleUpdateUser = (e) => {
    e.preventDefault();
    setError("");
    setNameEr("");
    setPasswordEr("");
    setMatchingEr("");
    setEmailEr("");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

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
    }
    updateProfileInfo(name, photo).then((result) => {
      e.target.reset();
      navigate("/dashboard");
    });
  };
  //   handle email validation

  return (
    <div data-aos="fade-up-left" className="bg-slate-50">
      <div className="default-container py-4">
        <div className="card w-full max-w-md mx-auto my-5 shadow-2xl bg-base-100">
          <form onSubmit={handleUpdateUser} className="card-body">
            <div>
              <h5 className="text-2xl font-bold text-center">
                Update Your Information
              </h5>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                defaultValue={user?.displayName}
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
                type="text"
                defaultValue={user?.email}
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
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                placeholder="photoURL"
                defaultValue={user?.photoURL}
                className="input input-bordered"
                name="photo"
              />
            </div>

            {error && (
              <div className="mt-1 text-red-400 bg-warning rounded-sm py-2  transform bg-opacity-10 duration-300 font-medium text-sm">
                <p className="ms-3">{error}</p>
              </div>
            )}
            <div className="form-control mt-4">
              <button type="submit" className="btn border-none primary-btn">
                Update
              </button>
            </div>
            <hr className="my-2 border-2" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
