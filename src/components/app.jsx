import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import StudentsPage from '../pages/StudentsPage';
import FeaturesPage from '../pages/FeaturesPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import WelcomePage from '../pages/WelcomePage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-custom-green">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; 2024 StudiWell. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
