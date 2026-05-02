"use client";

import { useRef, useState } from "react";

const CareTip = ({ tip, index }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isOpen = activeIndex === index;
  const contentRef = useRef(null);

  return (
    <div
      className={`[box-shadow:0_2px_10px_-5px_rgba(14,14,14,0.4)] bg-white rounded-md border-l-8 
                    ${isOpen ? "border-amber-700 dark:border-amber-600" : "border-slate-400 dark:border-neutral-700"} dark:bg-neutral-800`}
    >
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`tip-content-${tip.id}`}
          id={`tip-btn-${tip.id}`}
          onClick={() => setActiveIndex(isOpen ? null : index)}
          className={`text-base text-left font-medium flex items-center gap-4 p-4 cursor-pointer w-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 hover:text-amber-700 
                              ${
                                isOpen
                                  ? "text-amber-700 dark:text-amber-600 "
                                  : "text-slate-900 dark:text-slate-50 dark:hover:text-amber-600"
                              }`}
        >
          {tip.icon}
          <span>
            {tip.question}
            <span className="text-xs text-slate-600 mt-0.5 block font-normal dark:text-slate-500">
              {tip.subtext}
            </span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`ml-auto size-4 fill-current shrink-0 transition-all duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.016 18a1.5 1.5 0 0 1-1.065-.434l-9-9a1.506 1.506 0 0 1 2.13-2.13l7.935 7.95L19.95 6.45a1.5 1.5 0 0 1 2.115 2.115l-9 9a1.5 1.5 0 0 1-1.05.435" />
          </svg>
        </button>
      </h3>
      <div
        id={`tip-content-${tip.id}`}
        role="region"
        aria-labelledby={`tip-btn-${tip.id}`}
        aria-hidden={!isOpen}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className="accordion-content overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="p-4 pt-2">
          <p className="text-base text-slate-600 leading-relaxed dark:text-slate-400">
            {tip.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareTip;
