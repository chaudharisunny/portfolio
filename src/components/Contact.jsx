import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className="py-20 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">📩 Contact Me</h2>
        <p className="mb-8 text-gray-600">
          Interested in working together? Fill out the form below or message me directly.
        </p>

        <form className="bg-white p-8 rounded-xl shadow-md space-y-6 text-left">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="How can I help you?"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
