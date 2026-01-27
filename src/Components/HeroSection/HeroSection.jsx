import React, { useEffect, useState } from "react";
import { ArrowBigDownDash } from "lucide-react";


const HeroSection = () => {
  const fullText = "Hi, I'm Shashavali👋";
  const typingSpeed = 120;
  const restartDelay = 5000;

  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    let restartTimeout;

    if (index < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      restartTimeout = setTimeout(() => {
        setTypedText("");
        setIndex(0);
      }, restartDelay);
    }

    return () => {
      clearTimeout(timeout);
      clearTimeout(restartTimeout);
    };
  }, [index]);

  return (
    <section id="home" className="w-full lg:h-[80vh] h-[70vh] flex items-center justify-center text-white">
      <div className="w-full max-w-xl flex flex-col gap-6 text-center px-4">    
        <h1 className="text-5xl font-bold leading-tight">
          <span className="text-blue-400">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        <h3 className="text-xl text-gray-300">
          I design and build interactive interfaces
        </h3>

        <p className="text-gray-400">
          with a strong focus on usability, performance, and clean UI design.
        </p>

        <div className="flex flex-col justify-center items-center">
            <a href="Shaik_Shashavali_Resume.pdf" download="My_Resume.pdf" className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 mx-auto w-fit rounded-lg bg-blue-500 hover:bg-blue-600 transition active:scale-95">
                Download Resume <ArrowBigDownDash />
            </a>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
