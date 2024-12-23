import React, { useState } from "react";

const FAQ = ({ data }) => {
  const [faqs, setFaqs] = useState(
    data.map((faq) => ({ ...faq, open: false })) // Initialize with closed FAQs
  );

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false, // Toggle current, close others
      }))
    );
  };

  return (
    <div className="flex w-full min-h-screen  ">
      {/* FAQ content */}
      <div className="w-[100%] space-y-6 flex flex-col mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-b border-secondary pb-4 transition-all duration-300 ${
              faq.open ? "mb-6" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div
              className={`relative text-[20px] cursor-pointer flex items-center justify-between ${
                faq.open ? "mb-4" : ""
              }`}
            >
              {faq.question}
              <span
                className={`transform transition-transform duration-300 ${
                  faq.open ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                faq.open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm mt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
