import React from 'react';

const Home = () => {
  return (
    <section  id='Home' className="min-h-screen bg-gradient-to-br from-blue-700 to-indigo-800 text-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow">
          Build Stunning Web Experiences
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          I create modern web apps using React, Tailwind, Node.js, and MongoDB.
          Clean UI. Fast performance. Real-world features.
        </p>
        <button className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300">
          🚀 Get Started
        </button>
      </div>
    </section>
  );
};

export default Home;
