import React from "react";

const Spinner = () => {
  return (
    <span className="flex h-[calc(100vh-120px)] w-full items-center justify-center">
      <ThreeDots
        height="120"
        width="130"
        radius="9"
        color="#e21b70"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </span>
  );
};

export default Spinner;
