export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-900 flex flex-col items-center justify-center px-6">
      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center py-6">
        <h1 className="text-3xl font-bold text-blue-600">VedAI</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-500">
                Features
              </a>
            </li>
            <li>
              <a href="#members" className="hover:text-blue-500">
                Members
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-16">
        <h2 className="text-4xl font-bold">The Future of Math Assistance</h2>
        <p className="text-gray-600 mt-4 max-w-2xl">
          VedAI is an advanced AI model designed to assist with complex
          mathematical problems, from algebra to advanced calculus.
        </p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold text-white">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-20 max-w-4xl text-center">
        <h3 className="text-2xl font-semibold text-blue-600">Key Features</h3>
        <ul className="mt-6 space-y-4">
          <li className="bg-gray-200 p-4 rounded-lg shadow">
            Step-by-step problem solving
          </li>
          <li className="bg-gray-200 p-4 rounded-lg shadow">
            Instant explanations
          </li>
          <li className="bg-gray-200 p-4 rounded-lg shadow">
            Supports a wide range of math topics
          </li>
        </ul>
      </section>

      {/* Members Section */}
      <section id="members" className="mt-20 max-w-4xl text-center">
        <h3 className="text-2xl font-semibold text-blue-600">Our Members</h3>
        <p className="text-gray-600 mt-4">
          Join our growing community of math enthusiasts and AI experts.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-6 text-center text-gray-500">
        &copy; 2025 VedAI. All rights reserved.
      </footer>
    </div>
  );
}
