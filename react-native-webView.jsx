import React, { useState } from 'react';

// --- Configuration ---
// Replace with your actual data
const GITHUB_URL = 'https://github.com/your-username';
const LINKEDIN_URL = 'https://linkedin.com/in/your-profile';
const EMAIL = 'your.email@example.com';
const PROFILE_IMAGE_URL = 'https://placehold.co/150x150/a7a7a7/ffffff?text=Sua+Foto'; // Replace with your photo URL
const USER_NAME = 'Seu Nome';

// --- Helper Components ---

// Star rating component using Tailwind CSS
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className="text-yellow-400 text-3xl mx-0.5">
        {i <= rating ? '★' : '☆'}
      </span>
    );
  }
  return <div className="flex">{stars}</div>;
};

// Skill item component
const Skill = ({ name, rating }) => (
  <div className="flex items-center justify-between w-full max-w-xs md:max-w-sm mb-4">
    <p className="text-xl font-medium text-gray-700">{name}:</p>
    <StarRating rating={rating} />
  </div>
);

// --- Screen Components ---

// Main Screen Component
const MainScreen = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-5">
      <img
        src={PROFILE_IMAGE_URL}
        alt="Profile"
        className="w-36 h-36 rounded-full border-4 border-gray-700 mb-5"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-8">{USER_NAME}</h1>

      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="w-full max-w-xs md:max-w-sm bg-gray-800 text-white font-bold py-3 px-4 rounded-lg mb-4 text-center shadow-lg hover:bg-gray-700 transition-colors duration-300">
        LINKEDIN
      </a>

      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="w-full max-w-xs md:max-w-sm bg-gray-800 text-white font-bold py-3 px-4 rounded-lg mb-4 text-center shadow-lg hover:bg-gray-700 transition-colors duration-300">
        GITHUB
      </a>

      <a href={`mailto:${EMAIL}`} className="w-full max-w-xs md:max-w-sm bg-gray-800 text-white font-bold py-3 px-4 rounded-lg mb-4 text-center shadow-lg hover:bg-gray-700 transition-colors duration-300">
        E-MAIL
      </a>
      
      <button
        onClick={onNavigate}
        className="w-full max-w-xs md:max-w-sm bg-blue-600 text-white font-bold py-3 px-4 rounded-lg mt-5 shadow-lg hover:bg-blue-500 transition-colors duration-300">
        MINHAS HABILIDADES
      </button>
    </div>
  );
};


// Skills Screen Component
const SkillsScreen = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-5">
      <img
        src={PROFILE_IMAGE_URL}
        alt="Profile"
        className="w-36 h-36 rounded-full border-4 border-gray-700 mb-5"
      />
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Minhas Habilidades</h2>

      <Skill name="CSS" rating={4} />
      <Skill name="HTML" rating={5} />
      <Skill name="React" rating={4} />
      <Skill name="React Native" rating={3} />
      <Skill name="JavaScript" rating={4} />

      <button
        onClick={onNavigate}
        className="w-full max-w-xs md:max-w-sm bg-green-600 text-white font-bold py-3 px-4 rounded-lg mt-8 shadow-lg hover:bg-green-500 transition-colors duration-300">
        VOLTAR
      </button>
    </div>
  );
};


// Main App Component
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('main'); // 'main' or 'skills'

  const navigateToSkills = () => setCurrentScreen('skills');
  const navigateToMain = () => setCurrentScreen('main');

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center font-sans">
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8">
            {currentScreen === 'main' ? (
                <MainScreen onNavigate={navigateToSkills} />
            ) : (
                <SkillsScreen onNavigate={navigateToMain} />
            )}
        </div>
    </main>
  );
};
