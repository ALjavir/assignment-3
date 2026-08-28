import React from 'react';

import heroBg from "~/assets/image/hero-img.png"
import hmePlay from "~/assets/image/learn-more-icon.png"
import Buttonorengage from '~/component/common/button';

export default function Hero() {
    return (
        <section
            id="home-hero-sec"
            className="flex flex-col md:flex-row items-center justify-between  pb-10  gap-20"
        >


            <div className="flex flex-col gap-6 w-full md:w-1/2">
                <h1 className="text-4xl md:text-3xl lg:text-6xl font-extrabold text-[#162032] leading-tight">
                    We boost <br className="hidden md:block" />
                    growth for your <br className="hidden md:block" />
                    statup business
                </h1>

                <p className="text-base md:text-lg text-gray-600 max-w-md leading-relaxed">
                    Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment
                </p>

                <div className="flex flex-wrap items-center gap-10 mt-4">
                    <Buttonorengage text="Get Started" path="#" />

                    <button className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
                        <img
                            src={hmePlay}
                            alt="Play Video"
                            className="w-12 h-12 object-contain group-hover:scale-105 transition-transform "
                        />
                        <span className="font-bold text-[#162032]">Learn More</span>
                    </button>
                </div>
            </div>


            <div className="w-full md:w-1/2 flex justify-center md:justify-end  relative">
                <div className="relative w-full max-w-lg">


                    <img
                        src={heroBg}
                        alt="Hero Business Growth"
                        className="w-full h-auto object-contain relative z-10 shadow-xl rounded-full"
                    />


                    <div className="absolute top-4 -left-4 md:top-12 md:-left-16 bg-white rounded-xl shadow-xl p-3 flex items-center gap-3 z-20 animate-fade-in-up">
                        <div className="bg-black text-white p-2 rounded-lg flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-sm md:text-base font-bold text-gray-900">100% Business Growth</h4>
                            <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                                <span className="text-[#FFB800] text-sm">★</span>
                                <strong className="text-gray-800">4.9</strong>
                                <span>(1520 Reviews)</span>
                            </p>
                        </div>
                    </div>


                    <div className="absolute bottom-12 -left-2 md:bottom-24 md:-left-8 bg-white rounded-xl shadow-xl p-4 flex flex-col z-20">
                        <h4 className="text-sm md:text-base font-bold text-gray-900">1000,000 Happy Clients</h4>
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                            <span className="text-[#FFB800] text-sm">★</span>
                            <strong className="text-gray-800">4.9</strong>
                            <span>(15k Reviews)</span>
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
}