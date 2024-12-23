import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  // This would typically be fetched from your authentication state
  const user = { name: 'Guest' };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Welcome, {user.name}!
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Get Started With Our Features:</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-blue-600 hover:underline">Explore our features</Link>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Set up your study profile</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Connect with a mentor</a>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Your Stats:</h2>
            <p>Study streak: 5 days</p>
            <p>Tasks completed this week: 12</p>
            <p>Next study session: Today at 3 PM</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Go to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
};

export default WelcomePage;

