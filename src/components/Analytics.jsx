import React from "react";
import Laptop from './../assets/laptop.jpg';
export default function Analytics(){

    return (
        <div id="company" className="scroll-smooth flex justify-center w-full h-screen bg-white ">
            <div className="grid mx-auto w-[85%] md:grid-cols-2">
                <img
                    src={Laptop}
                    alt="/"
                    className="w-[400px] m-auto"
                    data-aos="zoom-in-up"
                    data-aos-offset="20"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="600"
                    
                />
                <div className="flex flex-col m-auto">
                    <p className=" text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-2xl text-xl font-bold my-1">Manage Data Analytics</h1>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odit nihil repudiandae pariatur ipsum aperiam et recusandae vitae quisquam incidunt, ut eum, nam quibusdam non facilis facere? Laboriosam, officia veritatis!</p>
                    <button className="cursor-pointer h-[48px] bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] ">Get Started</button>
                </div>
            </div>
        </div>
    )
}   