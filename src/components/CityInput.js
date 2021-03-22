import React from "react";

export default function CityInput({ setCity }) {
  return (
    <input className="city-input"
      onChange={(e) => {
        let handler;
        clearTimeout(handler);
        handler = setTimeout(() => {
          setCity(e.target.value);
        }, 3000);
      }}
    />
  );
}
