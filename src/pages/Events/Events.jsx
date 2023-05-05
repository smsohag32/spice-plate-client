import React from "react";
import NewsEvent from "../Home/NewsEvent";
import useTitle from "../../hooks/useTitle";

const Events = () => {
  useTitle("Event");
  return (
    <div className="bg-black">
      <NewsEvent />
    </div>
  );
};

export default Events;
