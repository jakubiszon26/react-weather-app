import debounce from "lodash.debounce";
import React, { useCallback } from "react";

export default function CityInput({ setCity }) {
  const debouncedInput = useCallback(
    debounce((e) => setCity(e.target.value), 500),
    [setCity]
  );

  return <input className="city-input" onChange={debouncedInput} />;
}
