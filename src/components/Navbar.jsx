import React from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
export default function Navbar(){
    const [nav,setNav] = React.useState(false)
    function handleNav(){
        setNav(prev => !prev)
    }
   
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
            <ul className="hidden md:flex">
                <a href="#home" className="p-4">Home</a>
                <a href="#company" className="p-4">Company</a>
                <a href="#newsletter" className="p-4">Newsletter</a>
                <a href="#resources" className="p-4">Resources</a>
                <a href="#contact" className="p-4">Contact</a>
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
                <ul className="p-3 ">
                    <li className="p-4 border-b border-gray-500">Home</li>
                    <li className="p-4 border-b border-gray-500">Company</li>
                    <li className="p-4 border-b border-gray-500">Resources</li>
                    <li className="p-4 border-b border-gray-500">About</li>
                    <li className="p-4 border-b border-gray-500">Contact</li>
                </ul>
            </div>
            
        </div>
    )
}