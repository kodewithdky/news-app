import spinner from "../assets/spinner/repel.svg";
import React from "react";

const Spinner = () => {
  return (
    <div className="text-center my-3">
      <img src={spinner} alt="loadin..." />
    </div>
  );
};

export default Spinner;
