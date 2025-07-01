import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="bg-blue-700 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm">
          © {new Date().getFullYear()} Sunny Dev • Built with React & Tailwind CSS
        </p>
        <div className="flex gap-4 text-sm">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:underline"
          >
            Email
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
