"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const navItems = [
        {
            name: "Home",
            link: "/",
            //   icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "/about",
            //   icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact",
            link: "/contact",
            //   icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />

        },
    ];

    return (
        <nav className="bg-white dark:bg-gray-800 w-full">
            <div className="">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between lg:w-1/3">
                        <a href="#">
                            <img
                                className="w-auto h-6 sm:h-7"
                                src="https://merakiui.com/images/full-logo.svg"
                                alt=""
                            />
                        </a>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 8h16M4 16h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            }`}
                    >

                        <div className="flex flex-col gap-2 lg:gap-6 capitalize lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                            {navItems.map((navItem: any, idx: number) => (
                                <Link
                                    key={`link=${idx}`}
                                    href={navItem.link}
                                    className={cn(
                                        "relative text-gray-600 items-center flex space-x-1  dark:hover:text-neutral-300 hover:text-neutral-500"
                                    )}
                                >
                                    <span className="block sm:hidden">{navItem.icon}</span>
                                    <span className="text-sm">{navItem.name}</span>
                                </Link>
                            ))}


                            <div className="relative mt-4 lg:mt-0 lg:mx-4">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="w-4 h-4 text-gray-600 dark:text-gray-300"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>

                                <input
                                    type="text"
                                    className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600"
                                    placeholder="Search"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center gap-2 mt-6 lg:flex lg:mt-0 lg:-mx-2 lg:w-1/3">
                            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full w-1/2">
                                <span>Login</span>
                                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                            </button>
                            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full w-1/2">
                                <span>Sign Up</span>
                                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
