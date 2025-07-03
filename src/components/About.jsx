import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 text-gray-800">
      <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left"
        data-aos="fade-up"
      >
        {/* 👤 Profile Image (left side on large screens) */}
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-600 shadow-md shrink-0">
          <img
            src="https://avatars.githubusercontent.com/chaudharisunny" // Replace with your photo
            alt="Sunny"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 💬 About Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">👋 About Me</h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hi, I’m <span className="font-semibold text-blue-700">Sunny</span> — a
            <span className="font-semibold text-blue-700"> Node.js backend developer</span> with experience building
            full-stack apps, REST APIs, and real-world backend systems.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I specialize in scalable backend solutions using
            <strong> React, Express, MongoDB, Tailwind CSS, and Vite</strong>. I've built job boards, APIs, and landing pages
            with clean code and solid logic.
          </p>

          {/* 📄 Resume Button */}
          <a
            href="https://beautysalon-appointement.my.canva.site/purple-and-white-clean-and-professional-resume" // Put your resume file in the /public folder
            download
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            📄 Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
