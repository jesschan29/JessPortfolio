"use client"
import React, {useState} from "react";
import Link from 'next/link';
import Head from 'next/head';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

export default function Header() {
    const [menuIcon, setIcon] = useState(false);

    const handleSmallerScreensNav = () =>
    (
        setIcon( !menuIcon )
    )

    return (
        <header className="bg-custom-skyblue text-white w-full ease-in duration-300 fixed top-0 left-0 z-10">
            <Head>
                <link href="https://db.onlinewebfonts.com/c/ad118fd848f5254b108b7e7bfab6b7b7?family=Just+Bubble" rel="stylesheet" type="text/css"/>
            </Head>
            <style jsx>{`
            .button{
                font-size: 32px;
                background-color: transparent;
                font-weight: normal;
                padding-left: 1.25rem;
                padding-right: 1.25rem;
                text-align: left;
                font-family: "Just Bubble";
                transition: transform 1s ease-in-out;
            }

            .button2{
                font-size: 32px;
                background-color: transparent;
                font-weight: normal;
                padding-left: 1.25rem;
                padding-right: 1.25rem;
                font-family: "Just Bubble";
                transition: transform 1s ease-in-out;
            }

            .button:hover {
                transform: scale(1.08);
            }

            @font-face{
                font-family: "Just Bubble";
                src: url("ad118fd848f5254b108b7e7bfab6b7b7.eot");
                src: url("ad118fd848f5254b108b7e7bfab6b7b7.eot?#iefix")format("embedded-opentype"),
                    url("ad118fd848f5254b108b7e7bfab6b7b7.woff")format("woff"),
                    url("ad118fd848f5254b108b7e7bfab6b7b7.woff2")format("woff2"),
                    url("ad118fd848f5254b108b7e7bfab6b7b7.ttf")format("truetype"),
                    url("ad118fd848f5254b108b7e7bfab6b7b7.svg#Just Bubble")format("svg");
                font-weight:normal;
                font-style:normal;
                font-display:swap;
            }

            `}</style>
            <nav className="max-w-[1566px] mx-auto h-[100px] flex justify-between items-center p-4">
                <div>
                    <Link href="/" onClick={handleSmallerScreensNav}>
                        <span className="font-extrabold text-3xl md:text-2xl xl:text-3xl uppercase button">Jessica</span>
                    </Link>
                </div>

                {/* LARGER SCREENS NAVIGATION*/}
                <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-white">
                    <li className="button">
                        <Link href="/">Home</Link>
                    </li>
                </ul>
                <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-white">
                    <li className="button">
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
                <ul className="hidden md:flex uppercase font-semibold text-1xl lg:text-[20px] text-white">
                    <li className="button">
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
                            <li onClick={handleSmallerScreensNav} className="py-5 hover:scale-105 cursor-pointer button2">
                                <Link href="/">Home</Link>
                            </li>
                            <li onClick={handleSmallerScreensNav} className="py-5 hover:scale-105 cursor-pointer button2">
                                <Link href="/projects">Projects</Link>
                            </li>
                            <li onClick={handleSmallerScreensNav} className="py-5 hover:scale-105 cursor-pointer button2">
                                <Link href="/contactUs">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </header>
    )

}