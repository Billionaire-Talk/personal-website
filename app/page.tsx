import Link from 'next/link';

const learningAreas = [
  { title: 'Transformers', icon: '⚙️', description: 'Building and understanding architecture' },
  { title: 'LLMs & GPTs', icon: '🤖', description: 'Large Language Models and applications' },
  { title: 'Reasoning Models', icon: '🧠', description: 'Advanced reasoning systems' },
  { title: 'Audio ML', icon: '🎵', description: 'Audio processing and generation' },
  { title: 'Reinforcement Learning', icon: '🎯', description: 'RL agents and optimization' },
  { title: 'RAG & MCP', icon: '📚', description: 'Retrieval systems and protocols' },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          My ML Journey
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Daily documentation of learning and building in AI/ML
          <br />
          <span className="text-blue-600 font-semibold">One day at a time.</span>
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Read My Journal
          </Link>
          <Link
            href="/about"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Learning Focus Areas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">My Focus Areas</h2>
        <p className="text-gray-600 mb-6">
          Topics I explore and document through daily work:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {learningAreas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-3xl mb-3">{area.icon}</div>
              <h3 className="text-lg font-bold text-gray-900">{area.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Entries</h2>
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-600 mb-4">No entries yet. Starting my journey...</p>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            View all entries →
          </Link>
        </div>
      </section>
    </div>
  );
}
