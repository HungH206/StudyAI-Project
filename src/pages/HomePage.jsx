import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to StudiWell</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">AI-Powered Study Assistance</h2>
          <p className="mb-4">Get personalized study recommendations and instant answers to your questions with our advanced AI technology.</p>
          <Link to="/features" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Learn More</Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Mental Health Support</h2>
          <p className="mb-4">Access resources and tools to maintain your mental well-being while managing your academic life.</p>
          <Link to="/features" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

