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
    <section id="home" className="relative w-full lg:h-[80vh] h-[70vh] flex items-center justify-center text-white overflow-hidden">
      
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">    
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

          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start">
            <a href="Shaik_Shashavali_Resume.pdf" 
              download="Shaik_Shashavali_Resume.pdf" 
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 w-fit rounded-lg 
             bg-blue-500 hover:bg-blue-600 transition-all duration-300 
             active:scale-95 hover:shadow-lg hover:shadow-blue-500/50">
              Download Resume 
              <ArrowBigDownDash className="animate-bounce" />
            </a>

          </div>
        </div>

        {/* Right Floating Image */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative animate-float">
            {/* Glowing background circles */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse-glow-delayed"></div>
            
            {/* Image container with effects */}
            <div className="relative z-10">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Rotating border gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-spin-slow p-1">
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>
                
                {/* Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/50">
                  <img 
                    src="/Skills.jpeg" 
                    alt="Shashavali"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating particles */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/60 rounded-full animate-bounce-slow blur-sm"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400/60 rounded-full animate-bounce-slower blur-sm"></div>
                <div className="absolute top-1/4 -right-6 w-4 h-4 bg-cyan-400/60 rounded-full animate-bounce blur-sm"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-glow-delayed {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1.05);
          }
          50% {
            opacity: 0.4;
            transform: scale(0.95);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes bounce-slower {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .animate-pulse-glow-delayed {
          animation: pulse-glow-delayed 4s ease-in-out infinite 2s;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slower {
          animation: bounce-slower 4s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;