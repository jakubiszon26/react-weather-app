import React, { useState } from "react";

const Degrees = ({ temp, cityName }) => {
  const [isFarenheit, setIsFarenheit] = useState(false);

  return (
    <>
      <h1>{cityName}</h1>
      <span onClick={() => setIsFarenheit(!isFarenheit)} className="degrees">
        {isFarenheit
          ? Math.round(1.8 * (temp - 273) + 32)
          : Math.round(temp - 273.15)}
        °
      </span>
    </>
  );
};
export default Degrees;
