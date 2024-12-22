import React from 'react';

const FeaturesPage = () => {
  const features = [
    {
      title: "AI Study Helper + Chatbot",
      description: "An intelligent companion that helps you study more effectively. Get personalized recommendations and instant answers to your questions.",
      icon: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
    },
    {
      title: "Personalize Mental Health Guidance",
      description: "Empower students to maintain mental health, study more effectively. Regular health check-ins & provide feedbacks. Personalize habit system that fits your schedule!",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    },
    {
      title: "Support and Connections From Mentors",
      description: "Connect students with peer mentors for academic support. Facilitate group study sessions and discussions.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Main Features</h1>
      <div className="features space-y-12">
        {features.map((feature, index) => (
          <section key={index} className="feature bg-white rounded-lg shadow-md p-6 grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">{index + 1}/ {feature.title}</h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
            <div className="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
              </svg>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
