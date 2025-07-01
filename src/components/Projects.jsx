import React from 'react';

const projects = [
  {
    title: 'QuickHire Job Portal',
    desc: 'Full-stack MERN job board with applicant tracking and recruiter dashboards.',
    link: 'https://jobportal-frontend-mauve.vercel.app/',
  },
  {
    title: 'Fire & Safety Landing Page',
    desc: 'Responsive business landing page built with React + Tailwind.',
    link: 'https://fire-andsafety.vercel.app/',
  },
  {
    title: 'API for Hospital Food Delivery',
    desc: 'Node.js + MongoDB backend for managing hospital food orders.',
    link: 'https://github.com/chaudharisunny/hospitalfooddeliverymanagment',
  },
];

const Projects = () => {
  return (
    <section id='projects' className="py-20 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">💻 My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-left"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.desc}</p>
              <p className="mt-4 text-sm text-blue-500 underline">View Project</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
