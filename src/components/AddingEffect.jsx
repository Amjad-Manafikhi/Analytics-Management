

import { useEffect, useState } from "react"

export default function AddingEffect({number}) {
    const[value, setValue] = useState(Math.max(0,number-75));
    console.log(value)
    useEffect(() => {
        if (value >= number) return;

        const interval = setInterval(() => {
        setValue((prev) => {
            if (prev === number) {
            clearInterval(interval);
            return prev;
            }
            return prev + 1;
        });
        }, 20); // Faster increment

        return () => clearInterval(interval);
  }, [value, number]);
    return (
        value
    ) 
}


