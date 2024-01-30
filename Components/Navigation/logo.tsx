import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
        return (
            <div>
                <Head>
                <link href="https://db.onlinewebfonts.com/c/ad118fd848f5254b108b7e7bfab6b7b7?family=Just+Bubble" rel="stylesheet" type="text/css"/>
                </Head>
                <style jsx>{`
                div {
                    display:inline-block;
                }

                .logo {
                    font-size: 32px;
                    background-color: transparent;
                    font-weight: normal;
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    text-align: left;
                    font-family: "Just Bubble";
                    transition: transform 1s ease-in-out;

                }
                .logo:hover {
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
                <div>
                    <Link href="/">
                        <button className={`logo ${className || ''}`}>Jessica</button>
                    </Link>
                </div>
            </div>
        );
    };
    export default Logo;