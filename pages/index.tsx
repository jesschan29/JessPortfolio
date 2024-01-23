import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../Components/Navigation/Navbar';
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home: NextPage = () => {
    const [isScrolled, setIsScrolled] =useState(false);

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

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
          animation: zoom-in 10s infinite;
        }

        .looped-zoom {
          animation-delay: 8s;
        }

        @keyframes upDownAnimation {
          0%, 100% {
            transform: translateY(0%);
          }
          50% {
            transform: translateY(5%);
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
            <title>Jessica Portfolio</title>
            <meta name="description" content="Welcome to My Portfolio" />
            <link rel="icon" href="/bg/logo icon.png" />
            <link href="https://db.onlinewebfonts.com/c/ad118fd848f5254b108b7e7bfab6b7b7?family=Just+Bubble" rel="stylesheet" type="text/css"/>
          </Head>
      </div>

      <div className="flex w-full mx-auto justify-center align-center">
        <Image src="/bg/My Portfolio.jpg" alt="bgtop" width={1640} height={924} style={{ width: '100%' }}/>
      </div>

      <main className="flex-grow pb-16 justify-center items-center">
        <>
          <div className="w-full">
            <div>
              <div className="mb-10 mt-0 pt-16 sm:mb-20 lg:mb-30 min-h-screen bg-white w-100% h-auto">

              <div className="group rounded-3xl justify-center items-center bg-custom-blue mx-auto shadow-md p-12 w-2/3 h-2/3 transition-transform duration-500 ease-in-out hover:shadow-xl">
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
                            <p className="text-2xl sm:text-3xl lg:text-3xl text-custom-header font-bubble underline">
                              About Me&nbsp;&nbsp;
                            </p>
                            <p className="my-3 text-justify text-xs md:text-base">
                                Hey there! I&apos;m Jessica, born in Indonesia and now in my final year of studying BSc (Hons) Information Technology
                                specifically in Computer Networking and Security at Sunway University.
                            </p>
                          </div>
                      </div>
                  </div>
                </div>
              </div>

                <div>
                  <div className="flex-grow py-10 sm:py-10 w-full">
                    <div className="mt-5 flex justify-center items-center mx-auto w-2/3 h-full transition-transform duration-500 ease-in-out">
                      <Image src="/images/EDUCATION AND ACHIEVEMENTS.png" alt="Education and Achievement RoadMap" width={800} height={2000}></Image>
                    </div>

                    <div className="group rounded-3xl justify-center align-center bg-custom-blue mx-auto shadow-md p-12 w-2/3 h-2/3 transition-transform duration-500 ease-in-out hover:shadow-xl">
                    <p className="text-3xl sm:text-3xl lg:text-3xl text-custom-header font-bubble transition-transform duration-500 ease-in-out">Skills</p>
                      <Slider {...sliderSettings}>
                        <div className="px-2 justify-center align-center">{
                          <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full h-full transition-transform duration-500 ease-in-out hover:shadow-xl">
                            <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-bubble underline text-center mb-4">&nbsp;Network and Security Skills&nbsp;</p>
                            <div className={`grid ${'grid-cols-1 sm:grid-cols-2'} gap-4`}>
                              <div>
                                <p className="group text-justify text-xs sm:text-xs md:text-base">Wireshark</p>
                                <div className="w-100% bg-gray-200 overflow-hidden">
                                  <div className={`align-right px-10 text-black w-5/6 bg-custom-skills`}>
                                    <p>90%</p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <p className="group text-justify text-xs sm:text-xs md:text-base">Cisco Packet Tracer</p>
                                <div className="w-100% bg-gray-200 overflow-hidden">
                                  <div className={`align-right px-10 text-black w-5/6 bg-custom-skills`}>
                                    <p>90%</p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <p className="group text-justify text-xs sm:text-xs md:text-base">Configure Router, Switch, PC, and many more</p>
                                <div className="w-100% bg-gray-200 overflow-hidden">
                                  <div className={`align-right px-10 text-black w-5/6 bg-custom-skills`}>
                                    <p>90%</p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <p className="group text-justify text-xs sm:text-xs md:text-base">Network and Computer Security</p>
                                <div className="w-100% bg-gray-200 overflow-hidden">
                                  <div className={`align-right px-10 text-black w-5/6 bg-custom-skills`}>
                                    <p>90%</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        }</div>
                        <div className="px-2 justify-center align-center">{
                          <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full h-full transition-transform duration-500 ease-in-out hover:shadow-xl">
                            <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-bubble underline text-center mb-4">&nbsp;Programming Languages&nbsp;</p>
                            <div className={`grid ${'grid-cols-1 sm:grid-cols-2'} gap-4`}>
                              <div>
                                <p className="group text-justify text-xs sm:text-xs md:text-base">HTML, CSS</p>
                                <div className="w-100% bg-gray-200 overflow-hidden">
                                  <div className={`align-right px-10 text-black w-5/6 bg-custom-skills`}>
                                    <p>90%</p>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <p className="group text-justify text-xs sm:text-xs md:text-base">Javascript, PHP, SQL</p>
                                <div className="w-100% bg-gray-200 overflow-hidden">
                                  <div className={`align-right px-10 text-black w-1/2 bg-custom-skills`}>
                                    <p>50%</p>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <p className="group text-justify text-xs sm:text-xs md:text-base">Java, and Python</p>
                                <div className="w-100% bg-gray-200 overflow-hidden">
                                  <div className={`align-right px-10 text-black w-4/5 bg-custom-skills`}>
                                    <p>80%</p>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <p className="group text-justify text-xs sm:text-xs md:text-base">Next.js, TailwindCSS</p>
                                <div className="w-100% bg-gray-200 overflow-hidden">
                                  <div className={`align-right px-10 text-black w-3/4 bg-custom-skills`}>
                                    <p>70%</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        }</div>
                        <div className="px-2 justify-center align-center">{
                          <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full h-full transition-transform duration-500 ease-in-out hover:shadow-xl">
                            <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-bubble underline text-center mb-4">&nbsp;Operating System Skills&nbsp;</p>
                            <div className={`grid ${'grid-cols-1 sm:grid-cols-2'} gap-4`}>
                              <div>
                                <p className="group text-justify text-xs sm:text-xs md:text-base">Windows</p>
                                <div className="w-100% bg-gray-200 overflow-hidden">
                                  <div className={`align-right px-10 text-black w-full bg-custom-skills`}>
                                    <p>100%</p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <p className="group text-justify text-xs sm:text-xs md:text-base">Linux OS (Kali, Ubuntu, OpenSUSE, Parrot, etc)</p>
                                <div className="w-100% bg-gray-200 overflow-hidden">
                                  <div className={`align-right px-10 text-black w-4/5 bg-custom-skills`}>
                                    <p>80%</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        }</div>
                        <div className="px-2 justify-center align-center">{
                          <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full h-full transition-transform duration-500 ease-in-out hover:shadow-xl">
                            <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-bubble underline text-center mb-4">&nbsp;Others&nbsp;</p>
                            <div className={`grid ${'grid-cols-1 sm:grid-cols-2'} gap-4`}>
                              <div>
                                <p className="group text-justify text-xs sm:text-xs md:text-base">Microsoft Word, Excel, Powerpoint</p>
                                <div className="w-100% bg-gray-200 overflow-hidden">
                                  <div className={`align-right px-10 text-black w-full bg-custom-skills`}>
                                    <p>100%</p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <p className="group text-justify text-xs sm:text-xs md:text-base">Google Docs, Sheets, Slides</p>
                                <div className="w-100% bg-gray-200 overflow-hidden">
                                  <div className={`align-right px-10 text-black w-full bg-custom-skills`}>
                                    <p>100%</p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <p className="group text-justify text-xs sm:text-xs md:text-base">Adobe Photoshop, Canva, Davinci Resolve</p>
                                <div className="w-100% bg-gray-200 overflow-hidden">
                                  <div className={`align-right px-10 text-black w-4/5 bg-custom-skills`}>
                                    <p>80%</p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <p className="group text-justify text-xs sm:text-xs md:text-base">Adobe Illustrator, Inkscape, Gravit designer, and Pixlr</p>
                                <div className="w-100% bg-gray-200 overflow-hidden">
                                  <div className={`align-right px-10 text-black w-2/3 bg-custom-skills`}>
                                    <p>60%</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        }</div>
                      </Slider>
                    </div>
                    <br></br>


                    <div className="mt-10 mx-auto w-2/3 h-full shadow-md rounded-3xl transition-transform duration-500 ease-in-out hover:shadow-lg">
                      <Image src="/images/Extracurricular Activities.jpg" className="rounded-3xl" alt="Extracurricular Activities" width={2000} height={800}></Image>
                    </div>

                    <div className="group rounded-3xl bg-custom-blue mt-10 mx-auto shadow-md p-12 px-3 md:px-12 w-2/3 h-2/3 transition-transform duration-500 ease-in-out hover:shadow-xl">
                      <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-bubble transition-transform duration-500 ease-in-out underline">Language&nbsp;&nbsp;</p>
                      <div className={`grid ${'grid-cols-1 sm:grid-cols-2'} gap-4`}>
                        <div>
                          <p className="group text-justify text-xs sm:text-xs md:text-base">English</p>
                          <div className="w-100% bg-gray-200 overflow-hidden">
                            <div className={`align-right px-10 text-black w-4/5 bg-custom-skills`}>
                              <p>80%</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="group text-justify text-xs sm:text-xs md:text-base">Bahasa Malay</p>
                          <div className="w-100% bg-gray-200 overflow-hidden">
                            <div className={`align-right px-10 text-black w-3/4 bg-custom-skills`}>
                              <p>70%</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="group text-justify text-xs sm:text-xs md:text-base">Mandarin</p>
                          <div className="w-100% bg-gray-200 overflow-hidden">
                            <div className={`align-right px-10 text-black w-3/4 bg-custom-skills`}>
                              <p>70%</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="group text-justify text-xs sm:text-xs md:text-base">Chinese (Hokkien, Fujian)</p>
                          <div className="w-100% bg-gray-200 overflow-hidden">
                            <div className={`align-right px-10 text-black w-3/4 bg-custom-skills`}>
                              <p>70%</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="group text-justify text-xs sm:text-xs md:text-base">Bahasa Indonesia</p>
                          <div className="w-100% bg-gray-200 overflow-hidden">
                            <div className={`align-right px-10 text-black w-full bg-custom-skills`}>
                              <p>100%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

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

export default Home
