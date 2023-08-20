import { useEffect, useState } from "react";


const getStoredValue = <Type>(key: string, defaultValue: Type): Type => {
  const savedItem = localStorage.getItem(key);
  if (savedItem) {
    return JSON.parse(savedItem);
  }
  return defaultValue;
};


export const useLocalStorage = <Type,>(
  key: string,
  defaultValue: Type
): [Type, React.Dispatch<React.SetStateAction<Type>>] => {
  const [value, setValue] = useState(() => {
    return getStoredValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default getStoredValue