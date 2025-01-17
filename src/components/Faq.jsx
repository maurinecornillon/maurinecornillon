import React, { useState, useRef } from "react";

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
    <div className="flex w-full ">
      {/* FAQ content */}
      <div className="w-[100%] space-y-6 flex flex-col mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-secondary pb-4"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="relative text-[0.8rem] sm:text-[1rem] lg:text-[1.5rem] xl:text-[1.5rem] 2xl:text-[1rem] cursor-pointer flex items-center justify-between">
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
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: faq.open ? `${faq.ref?.scrollHeight || 0}px` : "0px",
                opacity: faq.open ? 1 : 0,
              }}
              ref={(el) => (faq.ref = el)} // Attach ref dynamically
            >
              <p className="text-[0.5rem] sm:text-[0.5rem] lg:text-[0.8rem] xl:text-[0.8rem] 2xl:text-[0.5rem] mt-2">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
