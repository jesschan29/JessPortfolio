import React, {useState} from "react";
import {FiMenu} from "react-icons/fi";
import Logo from './logo';
import Button from './button';


const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>
        <div className="w-full h-19 sticky top-0 z-[999] bg-custom-skyblue border-b-2 border-white p-2">
            <div className="container mx-auto w-full">
                <div className="flex justify-between items-center w-full">
                    <Logo className="text-white"/>
                    <div className="lg:hidden relative">
                        <FiMenu className="text-white text-3xl cursor-pointer"
                        onClick={handleDropdownToggle}
                        />
                        {showDropdown && (
                            <div className="absolute mt-4 right-0 z-50">
                                <div className="lg:hidden w-60 bg-custom-skyblue border-2 border-white">
                                    <Button className="text-white block py-2" />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="hidden lg:flex">
                        <Button className="text-white"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;
