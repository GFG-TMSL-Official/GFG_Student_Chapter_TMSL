import React, { useState, useEffect } from 'react';
import { Code2, ArrowRight, Moon, Sun } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  const googleFormLink = "https://forms.gle/d1buHabjbjqwxdjC8";
  const learnMoreLink = "https://www.geeksforgeeks.org/geeksforgeeks-student-chapter/";
  
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-green-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      {/* Dark Mode Toggle Button */}
      <div className="absolute top-4 right-4">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        
        {/* Centered Code Symbol */}
        <div className="flex justify-center items-center mb-4">
          <Code2 className="h-20 w-20 text-green-600 dark:text-green-400 animate-pulse" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
          GeeksforGeeks Student Chapter
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
          Techno Main Salt Lake
        </h2>

        {/* Typewriter Effect */}
        <div className="h-8 mt-4">
          <TypewriterEffect 
            text="Where Passion Meets Programming" 
            className="text-lg sm:text-xl text-green-600 dark:text-green-400 font-medium"
          />
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mt-6">
          Join the largest technical community at TMSL and embark on a journey of learning, 
          innovation, and growth with like-minded tech enthusiasts.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={() => window.open(googleFormLink, "_blank")}
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Join Us Now
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => window.open(learnMoreLink, "_blank")}
            className="px-8 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-600 dark:text-green-400">25+</h3>
            <p className="text-gray-600 dark:text-gray-300">Active Members</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-600 dark:text-green-400">2+</h3>
            <p className="text-gray-600 dark:text-gray-300">Events Conducted</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-600 dark:text-green-400">5+</h3>
            <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-green-600 dark:text-green-400">100+</h3>
            <p className="text-gray-600 dark:text-gray-300">Problems Solved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
