import React from "react";
import { HiSun } from "react-icons/hi";
import { HiMiniMoon } from "react-icons/hi2";

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <nav className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-end">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="text-sm sm:text-base bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                px-4 py-1.5 rounded transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                >
                    {darkMode ? <HiSun /> : <HiMiniMoon />}
                </button>
            </div>
        </nav>
    );
};

export default Header;
