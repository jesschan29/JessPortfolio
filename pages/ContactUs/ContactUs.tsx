import React, {useState} from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../../Components/Navigation/Navbar';
import Image from "next/image";
import Link from "next/link";

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
        <div className="flex flex-col min-h-screen bg-custom-skyblue">
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

            <div className="flex w-full mx-auto justify-center align-center border-b-3 border-custom-skyblue">
                <Image src="/bg/contactus.jpg" alt="bgtop" width={1640} height={924} style={{ width: '100%' }}/>
            </div>

            <main className="flex-grow pb-16 justify-center items-center">
            <>
                <div className="w-full">
                    <div>
                        <div className="mb-10 mt-0 pt-16 sm:mb-20 lg:my-30 min-h-screen bg-white w-100% h-auto">
                            <div className="group rounded-3xl justify-center items-center bg-custom-blue mx-auto shadow-md p-12 w-2/3 h-2/3 transition-transform duration-500 ease-in-out hover:shadow-xl">
                                <div className="w-1/2 h-200px mx-auto transition-transform duration-400 ease-in-out animate-zoom-in looped-zoom">
                                    <Image src="/bg/contactus.png" alt="contactUs Title" className="h-auto w-100% mx-auto" width={4434} height={615}/>
                                </div>
                                <br></br>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <div className="mt-0 sm:mt-10 items-left grid grid-rows-1 mx-2">
                                        <div className="w-full flex flex-col justify-center items-center shadow-md mx-auto sm:w-5/6 md:w-5/6 lg:w-[50%]">
                                            <Image src="/Jessica2.jpg" alt="Jessica2 Profile Picture" className="h-full w-full" width={670} height={797} />
                                        </div>
                                        <div className="my-3 items-center justify-center h-full w-full bg-transparent flex flex-row">
                                            <div className="inline-block transition-transform duration-300 ease-in-out w-auto mx-2 ml-2 items-center h-1/10 justify-center hover:shadow-xl hover:rounded-full">
                                            <a href="https://www.instagram.com/jesschan2929?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D"><Image src="/images/Contacts/instagram1.png" alt="Instagram" className="h-full min-h-8 min-w-8 inline-block" width={40} height={40}></Image></a>
                                            </div>
                                            <div className="inline-block transition-transform duration-300 ease-in-out w-auto mx-2 ml-2 items-center h-1/10 justify-center hover:shadow-xl hover:rounded-full">
                                            <a href="https://www.facebook.com/profile.php?id=100084389784003&sk=about"><Image src="/images/Contacts/facebook1.png" alt="Facebook" className="min-h-8 min-w-8 inline-block" width={40} height={40}></Image></a>
                                            </div>
                                            <div className="inline-block transition-transform duration-300 ease-in-out w-auto mx-2 ml-2 items-center h-1/10 justify-center hover:shadow-xl hover:rounded-full">
                                            <a href="https://www.linkedin.com/in/jessica-jessica-b2910224b/"><Image src="/images/Contacts/linkedin1.png" alt="LinkedIn" className="min-h-8 min-w-8 inline-block" width={40} height={40}></Image></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <div className="group mt-3 mx-2 sm:mt-10">
                                            <div className="mx-2">
                                                <a href="mailto:jessicachan292003@gmail.com">
                                                    <p className="text-2xl text-custom-header font-bubble transition-transform duration-500 ease-in-out group-hover:underline group-hover:scale-105">Send Email&nbsp;&nbsp;</p>
                                                    <ul className="list-disc list-inside text-xs sm:text-xs md:text-base">
                                                        <li>jessicachan292003@gmail.com</li>
                                                    </ul>
                                                </a>
                                            </div>
                                            <div className="mx-2 mt-5">
                                                <a href="tel:+60176944154">
                                                    <p className="text-2xl text-custom-header font-bubble transition-transform duration-500 ease-in-out group-hover:underline group-hover:scale-105">Phone Number&nbsp;&nbsp;</p>
                                                    <ul className="list-disc list-inside text-xs sm:text-xs md:text-base ">
                                                        <li>+60176944154</li>
                                                    </ul>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>







                            <div className="flex-grow py-10 sm:py-20 lg:py-30 w-full">
                                    <div className="mt-10 group rounded-3xl bg-custom-blue mx-auto shadow-md p-12 w-2/3 h-2/3 transition-transform duration-500 ease-in-out hover:shadow-xl">
                                        <p className="text-2xl text-custom-header font-bubble transition-transform duration-500 ease-in-out group-hover:underline group-hover:scale-105">Contact Us Form&nbsp;&nbsp;</p>
                                        <form method="POST" name="ContactUs" onSubmit={handleFormSubmit}>
                                            <label htmlFor="fullName">Full Name</label>
                                            <input type="text" id="fullName" name="fullName" placeholder="Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                            <label htmlFor="user_message">Your Queries</label>
                                            <textarea id="user_message" name="user_message" placeholder="Please Write Your Queries Here..." style={{ height: '200px' }} value={userMessage} onChange={(e) => setUserMessage(e.target.value)}></textarea>
                                            <br></br>
                                            <div className="flex items-center justify-center">
                                                <input type="submit" value="Submit" name="ContactUs" />
                                            </div>
                                        </form>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </>
            </main>

            <footer className="mt-[-104px] sm:mt-[-144px] py-4 border-t border-white">
                <Link href="/">
                    <Image
                    src="/bg/name logo no bg2.png"
                    alt="Logo"
                    width={213}
                    height={123}
                    className="relative mx-auto w-1/6 h-auto"
                    />
                </Link>
            </footer>
        </div>
        )
    }


export default ContactUs;

