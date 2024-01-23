import React, {useRef, useState, useEffect} from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../../Components/Navigation/Navbar';
import Image from "next/image";
import Link from "next/link";
import YouTubeVideo from '../../Youtube/YouTubeVideo';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Projects: NextPage = () => {
    const youtubeVideoId = "Dt9vMojk-Cg";
    const [currentSlide, setCurrentSlide] = useState<number>(1);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev % 7) + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-custom-skyblue">
        <style jsx>{`
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
        `}</style>
        <Navbar>
        </Navbar>
        <div className="flex grow px-8">
            <Head>
                <title>Projects</title>
                <meta name="description" content="Projects Page" />
                <link rel="icon" href="/bg/logo icon.png" />
                <link href="https://db.onlinewebfonts.com/c/ad118fd848f5254b108b7e7bfab6b7b7?family=Just+Bubble" rel="stylesheet" type="text/css"/>
            </Head>
        </div>

        <main className="flex-grow py-16 justify-center items-center">
            <>
            <div className="w-full">
                <div className="w-1/2 h-200px mx-auto transition-transform duration-400 ease-in-out animate-zoom-in looped-zoom">
                    <Image src="/bg/projects.png" alt="Projects Title" className="h-auto w-100% mx-auto" width={2434} height={415}/>
                </div>
                <br /><br />
                <div className="w-3/4 sm:w-2/3 lg:w-1/2 justify-center items-center mx-auto bg-white rounded-lg p-6">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Image src="/projects/carousel/1.jpg" alt="slide1" width={1280} height={960}/></SwiperSlide>
                        <SwiperSlide><Image src="/projects/carousel/2.jpg" alt="slide2" width={1280} height={960}/></SwiperSlide>
                        <SwiperSlide><Image src="/projects/carousel/3.jpg" alt="slide3" width={1280} height={960}/></SwiperSlide>
                        <SwiperSlide><Image src="/projects/carousel/4.jpg" alt="slide4" width={1280} height={960}/></SwiperSlide>
                        <SwiperSlide><Image src="/projects/carousel/5.jpg" alt="slide5" width={1280} height={960}/></SwiperSlide>
                        <SwiperSlide><Image src="/projects/carousel/6.jpg" alt="slide6" width={1280} height={960}/></SwiperSlide>
                        <SwiperSlide><Image src="/projects/carousel/7.jpg" alt="slide7" width={1280} height={960}/></SwiperSlide>
                    </Swiper>
                </div>



                <div className="my-10 sm:my-20 lg:my-30 min-h-screen bg-white w-100% h-auto">
                    <div className="flex-grow py-10 sm:py-20 lg:py-30 w-full">

                        <div className="group rounded-3xl justify-center align-center bg-custom-blue mx-auto shadow-md p-8 sm:p-10 w-2/3 h-2/3 transition-transform duration-500 ease-in-out hover:shadow-xl">
                            <p className="text-2xl sm:text-3xl lg:text-3xl text-custom-header font-bubble transition-transform duration-500 ease-in-out">Projects&nbsp;&nbsp;</p>


                            <Slider {...sliderSettings}>
                                <div className="px-2 justify-center align-center">{
                                    <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full h-full transition-transform duration-500 ease-in-out hover:shadow-xl">
                                        <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-bubble underline text-center mb-4">&nbsp;Jan 2023 – Present )Ends in February 2024(&nbsp;</p>
                                        <div className="text-justify text-xs sm:text-xs md:text-base">
                                            <p><strong>ICT Pilot Projects for Rural Areas (Sunway Cat II Japan APT)</strong></p>
                                            <li>Sunway HUMAC RC, Level 3, Sunway University, Bandar Sunway</li>
                                            <li>A student leader that manages the team, team schedule and activities.</li>
                                            <li>Conducts, participates, and manages workshops, meetings, and trips</li>
                                            <li>Research on Kuching’s Mangrove trees (Kuching Wetland National Park) using various types of drones, hyperspectral along with data processing such as stitching, annotation and image processing.</li>
                                        </div>
                                        <br />
                                    </div>
                                }</div>
                                <div className="px-2 justify-center align-center">{
                                    <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full h-full transition-transform duration-500 ease-in-out hover:shadow-xl">
                                    <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-bubble underline text-center mb-4">&nbsp;May 2023 - July 2023&nbsp;</p>
                                    <div className="text-justify text-xs sm:text-xs md:text-base">
                                        <p><strong>Network and System Administrator project</strong></p>
                                        <li>Configured a Linux based local network that consist of Web Server, DNS Server, and DHCP Server</li>
                                    </div>
                                    <br />
                                    </div>
                                }</div>
                                <div className="px-2 justify-center align-center">{
                                    <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full h-full transition-transform duration-500 ease-in-out hover:shadow-xl">
                                    <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-bubble underline text-center mb-4">&nbsp;Apr 2022 – Jun 2022&nbsp;</p>
                                    <div className="text-justify text-xs sm:text-xs md:text-base">
                                        <p><strong>Web Development</strong></p>
                                        <li>Published, implemented, and designed a website using web development skills such as HTML, CSS, JavaScript, PHP, and SQL (3-tier development).</li>
                                    </div>
                                    <br />
                                    </div>
                                }</div>
                                <div className="px-2 justify-center align-center">{
                                    <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full h-full transition-transform duration-500 ease-in-out hover:shadow-xl">
                                    <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-bubble underline text-center mb-4">&nbsp;Aug 2021 – Dec 2021&nbsp;</p>
                                    <div className="text-justify text-xs sm:text-xs md:text-base">
                                        <div className="grid grid-cols-2 gap-4 items-center justify-center">
                                            <div className="w-2/3 h-auto flex items-center justify-center">
                                                <Image src="/projects/projects/Mastermind.jpg" alt="Mastermind game" width={400} height={300}/>
                                            </div>
                                            <div className="flex items-center justify-center">
                                                <div>
                                                    <p><strong>Python-based project</strong></p>
                                                    <li>Mastermind Game</li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    </div>
                                }</div>
                                <div className="px-2 justify-center align-center">{
                                    <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full h-full transition-transform duration-500 ease-in-out hover:shadow-xl">
                                        <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-bubble underline text-center mb-4">&nbsp;Sep 2020 – June 2021&nbsp;</p>
                                        <p className="text-justify text-xs sm:text-xs md:text-base"><strong>Java Text-based projects</strong></p>
                                        <div className="text-justify text-xs sm:text-xs md:text-base">
                                            <li>Connect Four Game</li>
                                            <li>Cashier System</li>
                                            <li>Go Fish Game</li>
                                            <li>Student Management System</li>
                                            <li>Library System</li>
                                        </div>
                                        <br />
                                    </div>
                                }</div>
                                <div className="px-2 justify-center align-center">{
                                    <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full h-full transition-transform duration-500 ease-in-out hover:shadow-xl">
                                    <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-bubble underline text-center mb-4">&nbsp;Sep 2020 – Oct 2020&nbsp;</p>
                                    <div className="text-justify text-xs sm:text-xs md:text-base">
                                        <p><strong>Voluntary Work (Maha Vihara Duta Maitreya Monastry, Batam)</strong></p>
                                        <li>Assisted the vihara personnel with their work, cleaned the temple, and participated in the temple events.</li>
                                    </div>
                                    </div>
                                }</div>
                            </Slider>

                        </div>

                        <div className="mt-10 group bg-custom-blue mx-auto rounded-3xl shadow-md p-10 w-2/3 h-2/3 transition-transform duration-500 ease-in-out hover:shadow-lg">
                            <p className="text-2xl text-custom-header font-bubble transition-transform duration-500 ease-in-out group-hover:underline group-hover:scale-105">Sunway Cat 2 Japan APT Video&nbsp;&nbsp;</p>
                            <br />
                            <div className="w-full h-full">
                                <YouTubeVideo videoId={youtubeVideoId} />
                            </div>
                            <br/>
                        </div>
                        <div className="mt-10 group mx-auto p-3 w-full h-70 border-t-2 border-white transition-transform duration-500 ease-in-out">
                            <p className="text-2xl mx-10 mt-5 text-center text-custom-header font-bubble transition-transform duration-500 ease-in-out group-hover:underline group-hover:scale-105">News Article Link about Sunway Cat 2 Japan APT&nbsp;&nbsp;</p>
                            <br />
                            <table className="w-2/3 mx-auto" style={{borderCollapse: 'collapse'}}>
                                <tbody>
                                    <tr className="flex justify-center">
                                        <td style={{padding: '2%'}} className="sm:h-full shadow-md bg-custom-blue m-2 sm:m-3 md:m-4 lg:m-5 w-auto transition-transform duration-500 ease-in-out transform hover:shadow-xl hover:scale-1015 flex flex-col flex-grow">
                                            <a href="https://www.newsarawaktribune.com.my/drones-protect-forests-from-threats/" target="_blank" rel="noopener noreferrer"
                                            className="block text-black no-underline transition duration-300 ease-in-out text-center h-full mx-auto justify-center hover:text-custom-newslink hover:underline flex-grow">
                                                <Image src="/projects/news/image/newsarawaktribune.png" className="my-6 px-2 " alt="NewsSarawakTribune" width={600} height={400} />
                                                New Sarawak Tribune
                                            </a>
                                        </td>
                                        <td style={{padding: '2%'}} className="sm:h-full shadow-md bg-custom-blue m-2 sm:m-3 md:m-4 lg:m-5 w-auto transition-transform duration-500 ease-in-out transform hover:shadow-xl hover:scale-1015 flex flex-col flex-grow">
                                            <a href="https://dayakdaily.com/swak-forestry-corporation-sunway-university-ink-mou-on-mangrove-forest-management-using-drones/" target="_blank" rel="noopener noreferrer"
                                            className="block text-black no-underline transition duration-300 ease-in-out text-center h-full mx-auto justify-center hover:text-custom-newslink hover:underline flex-grow">
                                                <Image src="/projects/news/image/DayakDaily.png" className="my-6 px-2 " alt="DayakDaily" width={600} height={400}/>
                                                Dayak Daily
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="flex justify-center">
                                        <td style={{padding: '2%'}} className="sm:h-full shadow-md bg-custom-blue m-2 sm:m-3 md:m-4 lg:m-5 w-auto transition-transform duration-500 ease-in-out transform hover:shadow-xl hover:scale-1015 flex flex-col flex-grow">
                                            <a href="https://opengovasia.com/advancing-conservation-through-technology/" target="_blank" rel="noopener noreferrer"
                                            className="block text-black no-underline transition duration-300 ease-in-out text-center h-full mx-auto justify-center hover:text-custom-newslink hover:underline flex-grow">
                                                <Image src="/projects/news/image/opengovasia.jpg" className="my-6 px-2" alt="OpenGovAsia" width={600} height={400}/>
                                                Open Gov Asia
                                            </a>
                                        </td>
                                        <td style={{padding: '2%'}} className="sm:h-full shadow-md bg-custom-blue m-2 sm:m-3 md:m-4 lg:m-5 w-auto transition-transform duration-500 ease-in-out transform hover:shadow-xl hover:scale-1015 flex flex-col flex-grow">
                                            <a href="https://sunwayuniversity.edu.my/news/2023/sunway-university-partners-japanese-companies-and-sarawak-forestry-corporation-mangrove" target="_blank" rel="noopener noreferrer"
                                            className="block text-black no-underline transition duration-300 ease-in-out text-center h-full mx-auto justify-center hover:text-custom-newslink hover:underline flex-grow">
                                                <Image src="/projects/news/image/sunwayUniversity.jpg" className="my-6 px-2" alt="SunwayUniversity" width={600} height={400}/>
                                                Sunway University
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="flex justify-center">
                                        <td style={{padding: '2%'}} className="sm:h-full shadow-md bg-custom-blue m-2 sm:m-3 md:m-4 lg:m-5 w-auto transition-transform duration-500 ease-in-out transform hover:shadow-xl hover:scale-1015 flex flex-col flex-grow">
                                            <a href="https://www.disruptr.com.my/malaysia-japan-collaborate-in-sarawak-mangrove-forest-conservation-and-sustainable-management/" target="_blank" rel="noopener noreferrer"
                                            className="block text-black no-underline transition duration-300 ease-in-out text-center h-full mx-auto justify-center hover:text-custom-newslink hover:underline flex-grow">
                                                <Image src="/projects/news/image/disruptr.jpeg" className="my-6 px-2 " alt="Disruptr" width={600} height={400}/>
                                                Disruptr
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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

export default Projects;