import { useState } from "react";
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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition duration-300 px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto py-16 sm:py-20">
          <Header />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center py-5 text-purple-600 dark:text-purple-400">
            Frequently asked questions
          </h1>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
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
    </div>
  );
}

export default App;
