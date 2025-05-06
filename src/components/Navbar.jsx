import React from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { FaCircleChevronUp } from "react-icons/fa6";

export default function Navbar({isInView}){
    const [nav,setNav] = React.useState(false)
    const homeElem = React.useRef(null);
    function handleNav(){
        setNav(prev => !prev)
    }
    function handleUp(){
        const el = document.getElementById("home");
        if (el) el.scrollIntoView({ behavior: "smooth" })

    }
   
    return (
        <>
        {nav && <div className="w-[100%] h-screen fixed bg-transparent z-8 " onClick={handleNav}></div>}
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
            <ul className="hidden md:flex">
                <a href="#home" className="hover:text-gray-400 p-4">Home</a>
                <a href="#company" className="hover:text-gray-400 p-4">Company</a>
                <a href="#newsletter" className="hover:text-gray-400 p-4">Newsletter</a>
                <a href="#resources" className="hover:text-gray-400 p-4">Resources</a>
                <a href="#contact" className="hover:text-gray-400 p-4">Contact</a>
            </ul>

            <div className="cursor-pointer md:hidden" onClick={handleNav}>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20}/>}

            </div>
            <div
                className={`md:hidden z-10 transform transition-transform duration-500 p-2 fixed top-0 
                ${!nav ? "-translate-x-[320px]" : "-translate-x-[20px]"} 
                bg-[#000300] h-full border-r border-gray-500 w-[60%] max-w-[300px] uppercase`}
            >
                <h1 className="m-[8px] w-full text-3xl font-bold text-[#00df9a]">React.</h1>
                <ul className="p-3 flex flex-col ">                        <a href="#home" className=" hover:text-gray-400 p-4 border-b border-gray-500">Home</a>
                    <a href="#company" className="hover:text-gray-400 p-4 border-b border-gray-500">Company</a>
                    <a href="#newsletter" className="hover:text-gray-400 p-4 border-b border-gray-500">Newsletter</a>
                    <a href="#resources" className="hover:text-gray-400 p-4 border-b border-gray-500">Resources</a>
                    <a href="#contact" className="hover:text-gray-400 p-4 border-b border-gray-500">Contact</a>
                </ul>
            </div>
            <FaCircleChevronUp  
                ref={homeElem}
                onClick={handleUp}
                className={`box-border text-gray-500 bg-black border-none rounded-full duration-300 ${!isInView ? "w-[40px] h-[40px]" : "w-0 h-0"} z-10 cursor-pointer fixed bottom-7 right-7`}  />
        </div>
        </>
    )
}