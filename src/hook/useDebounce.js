import React from "react";
export default function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = React.useState(value);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
}
