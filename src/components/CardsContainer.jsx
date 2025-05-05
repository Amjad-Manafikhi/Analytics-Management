import React from "react"
import Cards from './cards.jsx';

import Single from './../assets/single.png';
import Double from './../assets/double.png';
import Triple from './../assets/triple.png';

export default function CardsContainer(){
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
        return <Cards key={data.price} src={data.src} price={data.price} number={data.number}/> 
    })
    return (

        <div id='resources' className="w-full bg-white flex gap-10 flex-wrap p-5 py-30 items-center justify-center">
            {elementData}
        </div>
    )
}