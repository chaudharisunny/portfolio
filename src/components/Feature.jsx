import React from 'react';

const Feature = () => {
  const items = [
    {
      title: 'Landing Pages',
      desc: 'High-converting, mobile-optimized designs to attract users and drive conversions.',
    },
    {
      title: 'RESTful APIs',
      desc: 'Secure, scalable APIs built using Node.js, Express, and MongoDB.',
    },
    {
      title: 'Full-Stack Apps',
      desc: 'Modern applications with user auth, dashboard, and real-world functionality.',
    },
  ];

  return (
    <section id="features" className="py-20 px-6 bg-white text-gray-800">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700"
        data-aos="fade-up"
      >
        🚀 What I Offer
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
