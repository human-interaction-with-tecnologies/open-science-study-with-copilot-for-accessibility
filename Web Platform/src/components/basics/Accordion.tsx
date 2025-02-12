import React, { useState } from "react";
import parse from 'html-react-parser';

const Accordion = ({ title, answer }: { title: string, answer: string }) => {
  const [accordionOpen, setAccordionOpen] = useState(true);

  return (
    <div className="py-2">
      <div
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="inline-flex justify-between hover:bg-sky-700 gap-x-0.5"
        role="button"
      >
        <u>{title}</u>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        { accordionOpen ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 15l6-6l6 6"/></svg>
         : 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/></svg>
        }
        
      </div>
      <div
        className={`grid overflow-hidden transition-all mt-1.5 duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden cursor-pointer" onClick={() => setAccordionOpen(false)}>{ parse(answer) }</div>
      </div>
    </div>
  );
};

export default Accordion;