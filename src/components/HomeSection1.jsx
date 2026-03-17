import React from 'react';
import heroImg from '../assets/hero.png';
import girlImg from '../assets/image.avif';
import hijabImg from '../assets/image1.webp';

const HomeSection1 = () => {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-stretch justify-between px-4 md:px-16 py-10 md:py-20 bg-white">
      {/* Left: Text */}
      <div className="flex-1 text-left mb-8 md:mb-0 flex flex-col justify-center md:pr-10">
        <h1 className="text-4xl md:text-7xl font-semibold leading-tight mb-4 md:mb-8">
          Learn Faster<br />
          Practice <span className="text-blue-600">Smarter</span><br />
         Grow with Code<span className="text-blue-600">WithMe</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12 max-w-md">
Learn from industry experts through hands-on labs and real-world challenges.
Build practical skills, solve real problems, and grow at your own pace with CodeWithMe.        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-start">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition">Explore Courses</button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition">Contact Us</button>
        </div>
      </div>
      {/* Right: Images - Desktop: grid, Mobile: column */}
      <div className="flex-1 w-full md:w-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start justify-center md:justify-end">
        {/* Image grid for desktop, stacked for mobile */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-8 overflow-hidden">
          {/* Large main image */}
          <img src={girlImg} alt="Student" className="rounded-2xl shadow-lg w-full md:w-[360px] md:h-[400px] object-cover md:row-span-2 md:col-start-1 transform hover:scale-110 transition-transform duration-300 transform-origin-center" />
          {/* Top right image */}
          {/* <img src={heroImg} alt="Study" className="rounded-2xl shadow-md w-full md:w-[170px] md:h-[200px] object-cover md:col-start-2 md:row-start-1 transform hover:scale-110 transition-transform duration-300 transform-origin-center" /> */}
          {/* Bottom right image */}
          <img src={hijabImg} alt="Professional" className="rounded-2xl shadow-md w-full md:w-[200px] md:h-[250px] object-cover md:col-start-2 md:row-start-2 transform hover:scale-110 transition-transform duration-300 transform-origin-center" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;
