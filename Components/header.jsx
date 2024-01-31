"use client"
import React, {useState} from "react";
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

export default function Header() {
    const [menuIcon, setIcon] = useState(false);

    const handleSmallerScreensNav = () =>
    (
        setIcon( !menuIcon )
    )

    return (
        <header className="bg-custom-skyblue text-white w-full ease-in duration-300 fixed top-0 left-0 z-10">
            <nav className="max-w-[1566px] mx-auto h-[100px] flex justify-between items-center p-4">
                <div>
                    <Link href="/" onClick={handleSmallerScreensNav}>
                        <span className="font-extrabold text-3xl md:text-2xl xl:text-3xl uppercase hover:scale-105">Jessica</span>
                    </Link>
                </div>

                {/* LARGER SCREENS NAVIGATION*/}
                <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-white">
                    <li className="mr-5 hover:scale-105">
                        <Link href="/">Home</Link>
                    </li>
                </ul>
                <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-white">
                    <li className="mr-5 hover:scale-105">
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
                <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-white">
                    <li className="mr-5 hover:scale-105">
                        <Link href="/contactUs">Contact Us</Link>
                    </li>
                </ul>

                {/*SMALLER SCREENS NAV ICONS*/}
                <div onClick={handleSmallerScreensNav} className="flex md:hidden">
                    {menuIcon ?
                        ( <AiOutlineClose size={25} className="text-white"/>)
                        :
                        (<AiOutlineMenu size={25} className="text-white"/>)
                    }
                </div>

                {/*SMALLER SCREENS NAVBAR*/}
                <div className = {menuIcon ?
                    ('md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-custom-skyblue text-white text-center ease-in-out duration-300')
                    :
                    ('md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-custom-skyblue text-white text-center ease-in duration-300')
                }>
                    {/*SMALLER SCREEN NAVBAR LINKS*/}
                    <div className="w-full">
                        <ul className="font-bold text-2xl">
                            <li onClick={handleSmallerScreensNav} className="py-5 hover:scale-105 cursor-pointer">
                                <Link href="/">Home</Link>
                            </li>
                            <li onClick={handleSmallerScreensNav} className="py-5 hover:scale-105 cursor-pointer">
                                <Link href="/projects">Projects</Link>
                            </li>
                            <li onClick={handleSmallerScreensNav} className="py-5 hover:scale-105 cursor-pointer">
                                <Link href="/contactUs">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </header>
    )

}