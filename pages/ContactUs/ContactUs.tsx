import React, {useState} from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../../Components/Navigation/Navbar';
import Image from "next/image";
import Link from "next/link";
import {Reveal} from '../../Components/utils/Reveal';
import {Reveal2} from '../../Components/utils/Reveal2';
import {Pop} from '../../Components/utils/Pop';

const ContactUs: NextPage = () => {
    const [fullName, setFullName] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [submissionResult, setSubmissionResult] = useState<string | null>(null);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if required fields have values
        if (fullName && userMessage) {
            // Successful submission
            setSubmissionResult('SUCCESSFUL');
            window.alert('Successful Submission!');
            window.location.reload();
        } else {
            // Failed submission
            setSubmissionResult('FAILED');
            window.alert('Failed Submission! Please fill in all required fields.');
        }
    };
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-300 via-gray-50 to-gray-300 w-100%">
            <div className=""></div>
            <style jsx>{`
            input[type=text], textarea {
                width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
                margin-top: 6px;
                margin-bottom: 16px;
                resize: vertical;
            }

            input[type=submit] {
                background-color: #e7ac9a;
                color: white;
                padding: 12px 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }

            input[type=submit]:hover {
                opacity: 80%;
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

            @font-face{
                font-family: "pureMilk";
                src: url("/pure-milk/Pure Milk.otf")format("opentype");
            }

            .font-pureMilk {
                font-family: "pureMilk";
            }

            .font-bubble {
                font-family: "Just Bubble";
            }

            @keyframes zoom-in {
            0% {
                transform: scale(1);
                opacity: 0;
            }
            50%, 100% {
                transform: scale(1.15);
                opacity: 1;
            }
            }

            .animate-zoom-in {
            animation: zoom-in 3s infinite;
            }

            .looped-zoom {
            animation-delay: 5s;
            }

            @keyframes upDownAnimation {
            0%, 100% {
                transform: translateY(0%);
            }
            50% {
                transform: translateY(4%);
            }
            }
            .animate-up-down {
            animation: upDownAnimation 6s infinite;
            }

            @keyframes leftRightAnimation {
            0%, 100% {
                transform: translateX(0%);
            }
            50% {
                transform: translateX(-10%);
            }
            }
            .animate-left-right {
            animation: leftRightAnimation 7s infinite;
            }

            `}</style>
            <Navbar>
            </Navbar>
            <div className="flex grow px-8">
                <Head>
                    <title>Contact Us</title>
                    <meta name="description" content="Contact Us Page" />
                    <link rel="icon" href="/bg/logo icon.png" />
                    <link href="https://db.onlinewebfonts.com/c/ad118fd848f5254b108b7e7bfab6b7b7?family=Just+Bubble" rel="stylesheet" type="text/css"/>
                </Head>
            </div>

            <div className="flex flex-col items-center w-full mx-auto justify-center">
                <Image src="/bg/My Portfolio/3_3.png" alt="bgtop" width={1640} height={900} className="h-screen w-full object-cover sm:object-fill" style={{ zIndex: 1, objectPosition: 'left'}}/>
                <div className="flex w-full h-full mx-auto justify-center align-center absolute inset-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-black" style={{ zIndex: 2 }}>
                        <div className="flex justify-center items-end md:items-center md:justify-end">
                            <Pop>
                                <Image src="/bg/contactuslogo.png" alt="contactUs" width={1110} height={651} className="pt-16 md:pt-0 w-[70%] sm:w-4/5 h-auto mx-auto md:mr-0"/>
                            </Pop>
                        </div>
                        <div className="flex justify-center items-start md:items-center md:justify-start md:ml-20">
                            <Reveal>
                                <p className="font-pureMilk text-[70px] sm:text-[90px]">Contact Us</p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>

            <main className="flex-grow justify-center items-center">
            <>
                <div className="w-full">
                    <div>
                        <div className="mb-10 mt-[-140px] pt-52 sm:mb-20 lg:my-30 min-h-screen w-100%">
                            <Pop>
                                <div className="mb-10 relative transition-transform duration-1000 ease-in-out hover:scale-105">
                                    <div className="relative mt-10 rounded-3xl justify-center items-center bg-custom-blue mx-auto p-7 w-3/4 h-3/4 sm:w-2/3 sm:h-2/3" style={{zIndex:1}}>
                                        <br></br>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            <div className="mt-1 sm:mt-10 items-left grid grid-rows-1 mx-2">
                                                <Pop>
                                                    <div className="flex flex-col justify-center items-center rounded-2xl mx-auto w-4/5 sm:w-5/6 md:w-5/6 lg:w-[50%]">
                                                        <Image src="/Jessica2.jpg" alt="Jessica2 Profile Picture" className="h-full w-full rounded-2xl" width={670} height={797} />
                                                    </div>
                                                </Pop>
                                                <div className="my-4 sm:my-3 items-center justify-center w-2/3 h-2/3 mx-auto sm:h-full sm:w-full bg-transparent flex flex-row">
                                                    <Pop>
                                                        <div className="inline-block transition-transform duration-300 ease-in-out w-auto mx-2 ml-2 items-center h-1/10 justify-center hover:shadow-xl hover:rounded-full hover:scale-105">
                                                        <a href="https://www.facebook.com/profile.php?id=100084389784003&sk=about"><Image src="/images/Contacts/facebook.png" alt="Facebook" className="min-h-8 min-w-8 inline-block" width={40} height={40}></Image></a>
                                                        </div>
                                                    </Pop>
                                                    <Pop>
                                                        <div className="inline-block transition-transform duration-300 ease-in-out w-auto mx-2 ml-2 items-center h-1/10 justify-center hover:shadow-xl hover:rounded-full hover:scale-105">
                                                        <a href="https://www.instagram.com/jesschan2929?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D"><Image src="/images/Contacts/instagram.png" alt="Instagram" className="h-full min-h-8 min-w-8 inline-block" width={40} height={40}></Image></a>
                                                        </div>
                                                    </Pop>
                                                    <Pop>
                                                        <div className="inline-block transition-transform duration-300 ease-in-out w-auto mx-2 ml-2 items-center h-1/10 justify-center hover:shadow-xl hover:rounded-full hover:scale-105">
                                                        <a href="https://www.linkedin.com/in/jessica-jessica-b2910224b/"><Image src="/images/Contacts/linkedin.png" alt="LinkedIn" className="min-h-8 min-w-8 inline-block" width={40} height={40}></Image></a>
                                                        </div>
                                                    </Pop>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <div className="group mt-3 mx-0 sm:mt-10">
                                                    <div className="mx-2 hover:text-custom-link">
                                                        <a href="mailto:jessicachan292003@gmail.com">
                                                            <Reveal2>
                                                                <div>
                                                                    <p className="text-2xl md:text-3xl text-custom-header font-pureMilk transition-transform duration-500 ease-in-out">Send Email&nbsp;&nbsp;</p>
                                                                    <ul className="list-disc list-inside text-xs sm:text-xs md:text-base pl-3">
                                                                        <li>jessicachan292003@gmail.com</li>
                                                                    </ul>
                                                                </div>
                                                            </Reveal2>
                                                        </a>
                                                    </div>
                                                    <div className="mx-2 mt-5 hover:text-custom-link">
                                                        <a href="tel:+60176944154">
                                                            <Reveal2>
                                                                <div>
                                                                    <p className="text-2xl md:text-3xl text-custom-header font-pureMilk transition-transform duration-500 ease-in-out">Phone Number&nbsp;&nbsp;</p>
                                                                    <ul className="list-disc list-inside text-xs sm:text-xs md:text-base pl-3">
                                                                        <li>+60176944154</li>
                                                                    </ul>
                                                                </div>
                                                            </Reveal2>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bg-custom-darkblue w-3/4 sm:w-2/3 h-full right-[38px] sm:right-[92px] md:right-[116px] lg:right-[152px] lg:bottom-[-17px] xl:right-[196px] bottom-[-13px] sm:bottom-[-15px] md:bottom-[-18px] rounded-3xl" style={{zIndex: 0}}></div>
                                </div>
                            </Pop>

                                <div className="flex-grow py-10 pt-3 sm:py-20 lg:py-30 w-full">
                                    <Pop>
                                        <div className="mt-10 group rounded-3xl bg-custom-blue mx-auto shadow-lg p-7 sm:p-12 w-3/4 h-3/4 sm:w-2/3 sm:h-2/3 transition-transform duration-500 ease-in-out">
                                            <Reveal2>
                                                <p className="text-2xl md:text-3xl text-custom-header font-pureMilk transition-transform duration-500 ease-in-out">Contact Us Form&nbsp;&nbsp;</p>
                                            </Reveal2>
                                            <form method="POST" name="ContactUs" onSubmit={handleFormSubmit} className="pl-0 sm:pl-4 pt-3">
                                                <Reveal>
                                                    <div>
                                                        <label htmlFor="fullName">Full Name</label>
                                                        <input type="text" id="fullName" name="fullName" placeholder="Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                                    </div>
                                                </Reveal>
                                                <Reveal>
                                                    <div>
                                                        <label htmlFor="user_message">Your Queries</label>
                                                        <textarea id="user_message" name="user_message" placeholder="Please Write Your Queries Here..." style={{ height: '200px' }} value={userMessage} onChange={(e) => setUserMessage(e.target.value)}></textarea>
                                                    </div>
                                                </Reveal>
                                                <br></br>
                                                <Reveal>
                                                    <div className="flex items-center justify-center">
                                                        <input type="submit" value="Submit" name="ContactUs" />
                                                    </div>
                                                </Reveal>
                                            </form>
                                        </div>
                                    </Pop>
                                </div>
                        </div>
                    </div>
                </div>
            </>
            </main>

            <footer className="mt-0 pt-4 border-t border-white">
                <Link href="/">
                    <Image
                    src="/bg/name logo no bg2.png"
                    alt="Logo"
                    width={213}
                    height={123}
                    className="relative mx-auto w-[30%] sm:w-[10%] h-auto mt-3 mb-5"
                    />
                </Link>
            </footer>
        </div>
        )
    }


export default ContactUs;

