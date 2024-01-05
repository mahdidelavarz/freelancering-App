import { useEffect, useState } from "react";

export default function useLocalStorageState(key, initialState) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key) || null;
    console.log(savedValue)
    return savedValue ? JSON.parse(savedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key,value]);
  return [value, setValue];
}
