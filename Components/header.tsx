import React from "react";
import Head from 'next/head';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuToggle, NavbarMenuItem} from "@nextui-org/react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "Projects",
        "Contact Us",
    ];

    return (
        <div className="w-full h-19 sticky top-0 z-[999] bg-custom-skyblue border-b-2 border-white p-2">
            <style jsx>
            {`
                .button {
                    font-size: 32px;
                    background-color: transparent;
                    font-weight: normal;
                    padding-left: 1.25rem;
                    padding-right: 1.25rem;
                    text-align: left;
                    font-family: "Just Bubble";
                    transition: transform 1s ease-in-out;

                }
                .button:hover {
                    transform: scale(1.08);
                }
            `}</style>
            <div className="flex grow px-8">
                <Head>
                    <link href="https://db.onlinewebfonts.com/c/ad118fd848f5254b108b7e7bfab6b7b7?family=Just+Bubble" rel="stylesheet" type="text/css"/>
                </Head>
            </div>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden" />
                    <NavbarBrand>
                        <Link href="/">
                            <button className="button text-white">Jessica</button>
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link href="/">
                            <button className="button text-white">Home</button>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/projects">
                            <button className="button text-white">Projects</button>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/contactUs">
                            <button className="button text-white">Contact Us</button>
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                            className="w-full"
                            href="#"
                            size="lg"
                            > {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
}