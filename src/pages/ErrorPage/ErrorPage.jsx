import React from "react";
import Lottie from "lottie-react";
import errorImage from "../../assets/animation/errorImg.json";
import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  useTitle("Bad request");
  return (
    <div className="bg-green-50 h-screen flex-col w-full flex items-center justify-center">
      <Lottie
        className="w-[30%] rounded-full mx-auto"
        animationData={errorImage}
      ></Lottie>
      <p className="text-sm font-semibold md:text-sm text-gray-700 mb-8">
        {error?.message}
      </p>
      <Link to="/" className="primary-btn">
        Back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
