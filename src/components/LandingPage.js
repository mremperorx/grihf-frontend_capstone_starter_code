// src/components/LandingPage.js
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to Paradise Nursery</h1>
        <p className="text-lg text-gray-700">
          Your one-stop solution for all your gardening needs.
        </p>
      </header>

      <main className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Gardening"
          className="rounded-lg shadow-lg mb-6"
        />
        <p className="text-center max-w-2xl mb-8">
          Discover a wide variety of plants, gardening tools, and expert advice to help you grow your garden. Join our community of gardening enthusiasts today!
        </p>
        <a
          href="/signup"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Get Started
        </a>
      </main>

      <footer className="mt-10 text-gray-500">
        <p>© 2024 Paradise Nursery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
