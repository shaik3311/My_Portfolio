import React from 'react';

const About = () => {
  return (
    <div id='about' className="w-full lg:h-[70vh] h-[60vh] flex flex-col justify-center gap-5 py-10 px-5 lg:px-20 backdrop-blur-[2px] border-white-1">
        <h1 className='not-lg:text-center text-white text-4xl font-bold px-10'>About Me</h1>
        <div className=' mt-10 flex not-lg:flex-col justify-start items-center lg:gap-50 py-5'>
            <img src="/NewHero.png" alt=""  className='w-48 lg:w-72 bg-white rounded-full flex justify-center items-center' />
            <div className="text-white space-y-4 max-w-lg">
                <h3 className="text-lg lg:text-xl">
                    Final-year Computer Science student passionate about coding and technology.
                </h3>
                <h3 className="text-lg lg:text-xl">
                    Experienced in <span className="text-yellow-300">frontend development with React</span> and exploring <span className="text-yellow-300">backend development</span>.
                </h3>
                <h3 className="text-lg lg:text-xl">
                    <span className="text-pink-300 font-semibold">UI/UX enthusiast</span>
                </h3>
            </div>
        </div>
    </div>
  );
};

export default About;
