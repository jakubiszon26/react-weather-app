import React from "react";

const Degrees = ({ temp, cityName }) => {
  return (
    <>
      <h1>{cityName}</h1>
      <span className="degrees">{Math.round(temp - 273.15)}°</span>
    </>
  );
};
export default Degrees;
