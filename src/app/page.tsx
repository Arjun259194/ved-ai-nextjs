import React from "react";

interface Member {
  name: string;
  role: string;
  contact: string;
  email: string;
  github: string;
}

const members: Member[] = [
  {
    name: "Arjun Mistry",
    contact: "82002 71084",
    role: "Lead developer",
    email: "arjun259194@gmail.com",
    github: "github.com/Arjun259194",
  },
  {
    name: "Devesh Rawal",
    contact: "8980066913",
    role: "Developer",
    email: "rawal2003devesh@gmail.com",
    github: "https://github.com/rawaldevesh",
  },
  {
    name: "Jaydeep Parmar",
    contact: "9328503992",
    role: "Developer",
    email: "mrjdparmar01@gmail.com",
    github: "https://github.com/MRJD001",
  },
  {
    name: "Bopaliya Harshal Dineshbhai",
    contact: "8799192961",
    role: "Developer",
    email: "bopaliyaharshal498@gmail.com",
    github: "https://github.com/HarshalBopaliya",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-900">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto flex justify-between items-center py-6 px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-blue-600">VedAI</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                className="hover:text-blue-500 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-blue-500 transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#members"
                className="hover:text-blue-500 transition-colors"
              >
                Members
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-12 py-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-lg mx-6 lg:mx-8">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl font-bold leading-tight text-gray-900 sm:text-6xl">
            The Future of Math Assistance
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            VedAI is an advanced AI model designed to assist with complex
            mathematical problems, from algebra to advanced calculus. Get
            personalized help, step-by-step solutions, and deeper insights into
            mathematical concepts.
          </p>
          <div className="mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-white text-lg transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="mt-20 py-12 bg-gray-50 rounded-lg shadow-md mx-6 lg:mx-8"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-blue-600 text-center mb-8">
            Key Features
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-15v15m-15 0v15"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Step-by-step problem solving
              </h4>
              <p className="text-gray-600">
                Get detailed, easy-to-understand solutions for each step of your
                math problems.
              </p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6.357A8.001 8.001 0 0112 0c-4.634 0-8.584 3.51-8.584 8.001a8.002 8.002 0 011.546 5.379L12 21.333l6.534-7.954A8.002 8.002 0 0120.584 8.001C20.584 3.51 16.634 0 12 0c-1.912 0-3.752.604-5.243 1.671m10.086 1.686L18.75 9m-9.75 9l-4.224-4.224"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Instant explanations
              </h4>
              <p className="text-gray-600">
                Receive immediate explanations for the concepts and methods used
                in the solutions.
              </p>
            </li>
            <li className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Supports a wide range of math topics
              </h4>
              <p className="text-gray-600">
                Covers algebra, calculus, trigonometry, statistics, and more.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <MembersGrid />

      {/* Footer */}
      <footer className="mt-20 py-6 text-center text-gray-500">
        &copy; 2025 VedAI. All rights reserved.
      </footer>
    </div>
  );
}

const MembersGrid: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="p-6">
                <div className="text-center">
                  {/* Avatar with Gradient Background */}
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{member.role}</p>
                </div>

                {/* Contact Info (Hidden by Default, Revealed on Hover) */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                      <p className="text-sm text-gray-600">{member.contact}</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <p className="text-sm text-gray-600">{member.email}</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        ></path>
                      </svg>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
