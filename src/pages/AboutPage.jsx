import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About StudiWell</h1>
        <img src="/images/profilepic.png" alt="Founder" className="w-48 h-48 rounded-full mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Hung Gia Hoang</h2>
        <p className="text-gray-600 mb-1">University of Houston, 27'</p>
        <p className="text-gray-600 mb-4">Major: Computer Science</p>
        <p className="text-gray-700 mb-4">
          StudiWell was founded with the mission to empower students with AI-driven study tools and mental health support. 
          We believe in creating a holistic learning environment that nurtures both academic excellence and personal well-being.
        </p>
        <a
          href="https://github.com/HungH206"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          HungH206
        </a>
      </div>
    </div>
  );
};

export default AboutPage;

