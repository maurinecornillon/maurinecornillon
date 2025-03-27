import React, { useState, useRef } from "react";
import ZoomText from "./ZoomText";

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
      <div className="w-[100%] space-y-8 flex flex-col mx-auto">
        {faqs.map((faq, index) => (
          <ZoomText>
            <div
              key={index}
              className={`pb-4 border-b transition-colors duration-300 cursor-pointer ${
                faq.open ? "border-red" : "border-secondary hover:border-red"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div
                className={`relative font-NHAASDS text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] leading-tight tracking-tight flex items-center justify-between uppercase transition-colors duration-300 ${
                  faq.open ? "text-red" : "text-black hover:text-red"
                }`}
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300  font-ITC ${
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
                  maxHeight: faq.open
                    ? `${faq.ref?.scrollHeight || 0}px`
                    : "0px",
                  opacity: faq.open ? 1 : 0,
                }}
                ref={(el) => (faq.ref = el)} // Attach ref dynamically
              >
                <p
                  className={`font-NHAASDS text-[8px] sm:text-[8px] md:text-[16px] lg:text-[16px] tracking-wide leading-none font-normal mt-2 transition-colors duration-300 ${
                    faq.open ? "text-red" : "text-black"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </ZoomText>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
