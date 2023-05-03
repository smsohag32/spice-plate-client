import React, { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const { createUser, userLogout, updateProfileInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [success, setSuccess] = useState("");
  const [password, setPassword] = useState("");
  const [nameEr, setNameEr] = useState("");
  const [emailEr, setEmailEr] = useState("");
  const [passwordEr, setPasswordEr] = useState("");
  const [matchingEr, setMatchingEr] = useState("");
  // handle user register
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setNameEr("");
    setPasswordEr("");
    setMatchingEr("");
    setEmailEr("");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
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
    } else if (!(password === confirm)) {
      setMatchingEr(`Password doesn't matching`);
      return;
    }
    // firebase authentication
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess("Account Created successful");
        userLogout()
          .then()
          .catch((error) => console.log(error.message));
        navigate("/login");
        updateProfileInfo(name, photo);
        e.target.reset();
      })
      .catch((error) => {
        setError("Something went wrong !");
        console.log(error);
      });
  };
  //   handle email validation
  const handleEmailEr = (e) => {
    console.log(e.target.value);
    const email = e.target.value;
    if (!(email && password)) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };
  //   handle password er
  const handlePasswordEr = (e) => {
    const password = e.target.value;
    setPassword(password);
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
            {error && (
              <div className="mt-1 text-red-400 bg-warning rounded-sm py-2  transform bg-opacity-10 duration-300 font-medium text-sm">
                <p className="ms-3">{error}</p>
              </div>
            )}
            <div className="form-control mt-4">
              <button
                disabled={isEmpty}
                type="submit"
                className="btn primary-btn"
              >
                Register
              </button>
            </div>
            <hr className="my-2 border-2" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
