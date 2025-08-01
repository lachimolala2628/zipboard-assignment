import { useState, useEffect } from "react";
import AccordionItem from "./components/AccordionItem";
import Header from "./components/Header";

const faqs = [
  "Lorem ipsum dolor sit amet consectetur?",
  "Lorem ipsum dolor sit amet consectetur?",
  "Lorem ipsum dolor sit amet consectetur?",
  "Lorem ipsum dolor sit amet consectetur?",
  "Lorem ipsum dolor sit amet consectetur?",
];

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Add/remove "dark" class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black transition duration-300 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto py-16 sm:py-20">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center py-5 mb-10 text-[#8800C8] dark:text-[#2FC1FF]">
          Frequently asked questions
        </h1>

        <div className="divide-y divide-[#CDCDCD] dark:divide-[#CDCDCD] border-y border-[#CDCDCD] dark:border-[#CDCDCD]">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              index={index}
              question={faq}
              isOpen={openIndex === index}
              onToggle={toggleAccordion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
