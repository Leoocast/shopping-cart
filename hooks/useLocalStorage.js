import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {

        try {
            if(window === undefined)
                return initialValue
                
            const item = window.localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (ex) {

            // console.log("Exception at: useLocalStorage [creating]\n", ex)
            //Tal vez no exista el window en el back
            return initialValue;
        }
  })

  const setValue = (value) => {
    try {
      setStoredValue(value);

      window.localStorage.setItem(key, JSON.stringify(value));

    } catch (ex) {
        
      console.log("Exception at: useLocalStorage [get]\n", ex)
    }
  };
  return [storedValue, setValue];
}