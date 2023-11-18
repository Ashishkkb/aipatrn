import * as React from "react";
import kd from "./kd.svg"
import second from "./second.svg"
import downarrow from "./downarrow.svg"
import first from "./first.svg"


import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-col w-screen overflow-x-auto px-5">
            
            <div className="w-[1400px] overflow-x-scroll custom-scroll">
                <div className="flex">
                    <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0 relative">
                        <Image src={first} alt="new" />
                        <div className="text-white text-md absolute font-bold bottom-20 left-6">
                            Learn From Best Mentors
                        </div>
                        <div className="text-white text-md absolute font-bold bottom-6 left-4">
                            <button
                                className="text-white text-base rounded-full border-solid border-white border-4 px-6 py-2 max-md:px-5 flex flex-row justify-between"
                            >
                                START LEARNING
                                
                                <Image src={downarrow} alt="new" className="ml-10" />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0 relative" >
                        <Image src={second} alt="new" />
                        <div className="text-white text-md absolute font-bold bottom-6 left-4 flex flex-col hover:dro">
                            <button
                                className="text-white text-base border-solid border-white border-b-2 px-6 py-2 max-md:px-5 flex flex-row justify-between"
                            >
                                Free Edit
                                
                                <Image src={downarrow} alt="new" className="ml-10" />
                            </button>
                            <button
                                className="text-white text-base border-solid border-white border-b-2 px-6 py-2 max-md:px-5 flex flex-row justify-between"
                            >
                                Interactive
                                
                                <Image src={downarrow} alt="new" className="ml-10" />
                            </button>
                            <button
                                className="text-white text-base border-solid border-white border-b-2 px-6 py-2 max-md:px-5 flex flex-row justify-between"
                            >
                                Easy Interface
                                
                                <Image src={downarrow} alt="new" className="ml-10" />
                            </button>
                            <button
                                className="text-white text-base border-solid border-white border-b-2 px-6 py-2 max-md:px-5 flex flex-row justify-between"
                            >
                                Compare to other
                                
                                <Image src={downarrow} alt="new" className="ml-10" />
                            </button>
                        </div>

                    </div>
                    <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0 relative" style={{ backgroundImage: `url(${kd})` }}>
                        <Image src={kd} alt="new" />
                        <div className="text-white text-6xl absolute font-bold bottom-10 left-10 ">
                            +20 K
                        </div>
                        <div className="text-white text-xl absolute font-bold bottom-10 right-24 ">
                            Glass Pattern generated this week <br /> in the first release
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}