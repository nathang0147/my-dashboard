"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function AuthNavbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link
                        className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                        href="https://jesseltoncap.com/"
                    >
                        Lesseltoncap DashBoard
                    </Link>
                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <FontAwesomeIcon icon={faBars} className="text-white" />
                    </button>
                </div>

                {/* Navbar Content */}
                <div
                    className={`lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none ${
                        navbarOpen ? "block rounded shadow-lg" : "hidden"
                    }`}
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="flex items-center">
                            <Link
                                className="lg:text-white lg:hover:text-gray-200 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href="https://jesseltoncap.com/#about"
                            >
                                About Us
                            </Link>
                        </li>

                        <li className="flex items-center">
                            <Link
                                className="lg:text-white lg:hover:text-gray-200 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                href="https://jesseltoncap.com/#contact"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
