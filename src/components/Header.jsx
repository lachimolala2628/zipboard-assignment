import React from "react";
import { HiSun } from "react-icons/hi";
import { HiMiniMoon } from "react-icons/hi2";

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <nav className="bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-end">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="text-sm sm:text-base bg-white dark:bg-black text-black dark:text-white 
                px-4 py-1.5 rounded transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                >
                    {darkMode ? <HiSun size={20} /> : <HiMiniMoon size={20} />}
                </button>
            </div>
        </nav>
    );
};

export default Header;
