import React from "react"
import { ReactTyped } from "react-typed";
export default function Hero({setIsInView}){


    const elementRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsInView(entry.isIntersecting);
        },
        {
            threshold: 0.1, // 10% of the element is visible
        }
        );

        if (elementRef.current) {
        observer.observe(elementRef.current);
        }

        return () => {
        if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, []);

    return (
        <div ref={elementRef} id="home" className="scroll-smooth text-white w-full h-screen flex mt-[-96px]">
            <div className="max-w-[600px] w-[85%] flex flex-col items-center justify-center m-auto">
                <p className="text-center md:text-3xl sm:text-2xl  font-bold text-[#00df9a] ">GROWING WITH DATA ANALYTICS</p>
                <h1 className="text-center md:text-4xl sm:text-3xl text-xl font-bold m-auto py-4">GROW WITH DATA</h1>
                <div className="flex justify-center" >
                    <p className="text-center md:text-2xl sm:text-xl font-bold">Fast, flexible financing for{' '}
                        <ReactTyped
                            className=" text-gray-500 md:text-2xl sm:text-xl font-bold"
                            backSpeed={80}
                            typeSpeed={80}
                            loop
                            strings={[
                                "BTB",
                                "BTC",
                                "SASS"
                            ]}
                        />
                    </p>
                </div>
                <p className="text-center pt-5 md:text-2xl sm:text-1xl font-bold text-gray-500">Moitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
                <button className="cursor-pointer bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black ">Get Started</button>
            </div>
        </div>
    )
}