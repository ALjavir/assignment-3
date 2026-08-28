import React, { useState } from 'react';

import logoImg from "~/assets/image/logo.png"

import { NavLink } from 'react-router/internal/react-server-client';
import Buttonorengage from './button';



export default function TopNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { name: "Home", path: "/" },
        { name: "News", path: "/news" },
        { name: "Our App", path: "/Our-App" },
        { name: "Contacts", path: "/Contacts" },
    ];

    return (
        <header className="fixed inset-x-0 mx-auto z-999 flex items-center justify-between w-full  p-4 bg-white border-b border-gray-200">

            <img
                className="h-8 md:h-10 w-auto object-contain"
                src={logoImg}
                alt="Pixelab"
            />


            <nav className="hidden md:flex items-center gap-5 md:gap-8">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `text-sm md:text-base font-medium whitespace-nowrap transition-colors ${isActive
                                ? "text-o font-bold"
                                : "text-gray-600 hover:text-black"
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
                <a
                    className="text-sm md:text-base font-medium text-gray-700 hover:text-o transition-colors"
                    href="#"
                >
                    Log in
                </a>

                <Buttonorengage text="Sign up" path="#" />
            </div>


            <button
                className="flex md:hidden text-gray-700 hover:text-orange-500 focus:outline-none"
                aria-label="Toggle Menu"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>


            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 p-6 flex flex-col gap-6 z-50 md:hidden">

                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `text-base font-medium transition-colors ${isActive
                                        ? "text-black font-bold"
                                        : "text-gray-600 hover:text-orange-500"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>


                    <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                        <a
                            className="text-center text-base font-medium text-gray-700 hover:text-orange-500 transition-colors"
                            href="#"
                        >
                            Log in
                        </a>
                        <Buttonorengage text="Sign up" path="#" />
                    </div>

                </div>
            )}

        </header>
    );
}