import React, { useRef, useEffect, useState } from "react";

const AccordionItem = ({ index, question, isOpen, onToggle }) => {

    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className="border-b dark:border-gray-700 overflow-hidden transition-all duration-300">
            <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => onToggle(index)}
            >
                <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200">
                    Q{index + 1}. {question}
                </span>
                <span className="relative w-5 h-5">
                    <span
                        className={`absolute top-1/2 left-0 w-full h-0.5 bg-purple-600 dark:bg-purple-400 transform -translate-y-1/2 transition-transform duration-300 ease-in-out`}
                    />
                    <span
                        className={`absolute top-0 left-1/2 h-full w-0.5 bg-purple-600 dark:bg-purple-400 transform -translate-x-1/2 transition-transform duration-300 ease-in-out ${isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"}`}
                    />
                </span>
            </button>

            <div
                ref={contentRef}
                style={{ maxHeight: `${height}px` }}
                className="transition-all duration-300 ease-in-out"
            >
                <div className="pb-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Answer: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, amet.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, amet.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, amet.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, amet.
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;