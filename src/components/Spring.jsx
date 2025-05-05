"use client"

import { spring } from "motion"
import { useState, useEffect } from "react"

export default function Spring() {
    const [state, setState] = useState(false)
    
    useEffect(() => {
        const interval = setInterval(() => {
          setState((prev) => !prev);
        }, 2000); 
    
        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="example-container">
            <div className="box " data-state={state} />

            <style>
                {`
                    .example-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 20px;
                    }

                    .example-container .box {
                        width: 75px;
                        height: 75px;
                        background-color: #00df9a;
                        border-radius: 10px;
                        transition: transform ${spring(0.6, 0.6)};
                        transform: translateX(-100%);
                        margin-bottom:40px;
                    }

                    .example-container .box[data-state="true"] {
                        transform: translateX(100%) rotate(90deg);
                    }

                    .example-container button {
                        background-color: #00df9a;
                        color: #0f1115;
                        border-radius: 5px;
                        padding: 10px;
                        margin: 10px;
                    }
                `}
            </style>
        </div>
    )
}
