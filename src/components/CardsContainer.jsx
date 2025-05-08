import {useEffect, useState, useRef} from "react"
import Cards from './cards.jsx';

import Single from './../assets/single.png';
import Double from './../assets/double.png';
import Triple from './../assets/triple.png';

export default function CardsContainer(){
    const [cardInView, setCardInView ] = useState(false);
    const elementRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCardInView(true);
                    observer.disconnect(); // 🛑 Stop observing after first trigger
                }
            },
            {
                threshold: 0.2, // 30% of the element is visible
            }
        );

        if (elementRef.current && !cardInView) {
            observer.observe(elementRef.current);
        }

        return () => {
            observer.disconnect(); // clean up in case component unmounts early
        };
    }, [cardInView]);




    const data=[
        {
            src:Single,
            price:"99",
            number:1,
        },
        {
            src:Double,
            price:"149",
            number:2,
        },
        {
            src:Triple,
            price:"199",
            number:3,
        }
    ]

    const elementData =data.map((data)=>{
        return <Cards cardInView={cardInView} key={data.price} src={data.src} price={data.price} number={data.number}/> 
    })
    return (

        <div id='resources' ref={elementRef} className="w-full bg-white flex gap-10 flex-wrap p-5 py-30 items-center justify-center">
            {elementData}
        </div>
    )
}