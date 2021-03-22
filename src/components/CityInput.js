import debounce from "lodash.debounce";
import React, { useCallback } from "react";

export default function CityInput({ setCity }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedInput = useCallback(
    debounce((e) => setCity(e.target.value), 300),
    [setCity]
  );

  return <input className="city-input" onChange={debouncedInput} />;
}
