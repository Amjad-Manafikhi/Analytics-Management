import React from "react";


export default function Cards(props){
    return(
        <div className="bg-white rounded-2xl flex flex-col border border-gray-200 w-[250px] shadow-2xl hover:scale-105  duration-500 p-7 items-center">
            <img src={props.src} alt="/" className="w-[100px] mb-4" />
            <p className="font-bold">{props.number} User</p>
            <h3 className="font-bold text-3xl mt-2" >${props.price}</h3>
            <ul className="p-3">
                <li className="p-2 border-b border-gray-300">{props.number*500} GB Storage</li>
                <li className="p-2 border-b border-gray-300">{props.number} Granted User</li>
                <li className="p-2 border-b border-gray-300">Send Up To {props.number}</li>
            </ul>
            <button className='cursor-pointer bg-[#00df9a] text-black rounded-md font-medium w-[150px] my-2 px-6 py-3'>
              Start Trial
            </button>
        </div>


    )
}