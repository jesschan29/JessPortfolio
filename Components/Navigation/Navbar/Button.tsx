import React from 'react';
import Link from "next/link";
import Head from 'next/head';

interface ButtonProps {
    className?: string;
}

const Button: React.FC<ButtonProps> = ({className}) => {
        return (
            <div>
                <Head>
                <link href="https://db.onlinewebfonts.com/c/ad118fd848f5254b108b7e7bfab6b7b7?family=Just+Bubble" rel="stylesheet" type="text/css"/>
                </Head>
                <style jsx>{`
                .button {
                    font-size: 32px;
                    background-color: transparent;
                    font-weight: normal;
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    text-align: right;
                    font-family: "Just Bubble";
                    transition: transform 0.5s ease-in-out;
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
                <div className="lg:inline-block lg:ml-20">
                    <Link href="/">
                        <button className={`button ${className || ''}`}>Home</button>
                    </Link>
                </div>
                <div className="lg:inline-block lg:ml-20">
                    <Link href="/Projects/Projects">
                        <button className={`button ${className || ''}`}>Projects</button>
                    </Link>
                </div>
                <div className="lg:inline-block lg:ml-20">
                    <Link href="/ContactUs/ContactUs">
                        <button className={`button ${className || ''}`}>Contact Us</button>
                    </Link>
                </div>
            </div>
        );
    };
    export default Button;