import React from "react";
import NewsEvent from "../Home/NewsEvent";
import useTitle from "../../hooks/useTitle";

const Events = () => {
  useTitle("Event");
  return (
    <div className="">
      <NewsEvent />
    </div>
  );
};

export default Events;
