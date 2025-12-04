import Link from 'next/link';

const dailyRoutine = [
  { time: '4:00 AM - 9:00 AM', activity: 'Deep Work Session', description: 'Core ML/DL work, research, implementation' },
  { time: '9:00 AM - 10:00 AM', activity: 'Rest & Recovery', description: 'Breakfast, walk, reset' },
  { time: '10:00 AM - 1:00 PM', activity: 'Deep Work Session', description: 'Coding, building, experimenting' },
  { time: '1:00 PM - 3:00 PM', activity: 'Rest & Study', description: 'Lunch, rest, exam preparation' },
  { time: '3:00 PM - 6:00 PM', activity: 'Deep Work Session', description: 'Project development, learning' },
  { time: '6:00 PM - 7:00 PM', activity: 'Rest & Reflection', description: 'Evening break' },
  { time: '7:00 PM - 9:00 PM', activity: 'Deep Work Session', description: 'Writing, documentation, journaling' },
];

const learningAreas = [
  { title: 'Transformers', icon: '⚙️', description: 'Building from scratch and understanding architecture' },
  { title: 'LLMs & GPTs', icon: '🤖', description: 'Large Language Models, fine-tuning, prompt engineering' },
  { title: 'Reasoning Models', icon: '🧠', description: 'Advanced reasoning and multi-step problem solving' },
  { title: 'Audio ML', icon: '🎵', description: 'Audio processing, speech recognition, music generation' },
  { title: 'Reinforcement Learning', icon: '🎯', description: 'RL agents, policy optimization, reward design' },
  { title: 'RAG & MCP', icon: '📚', description: 'Retrieval Augmented Generation, Model Context Protocol' },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Building AI the Right Way
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Daily journey through Machine Learning, Transformers, LLMs, and AI Engineering.
          <br />
          <span className="text-blue-600 font-semibold">Documenting. Learning. Building.</span>
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Read My Journey
          </Link>
          <Link
            href="/about"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-semibold"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Daily Routine */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">My Daily Routine</h2>
        <p className="text-gray-600 mb-6">
          Consistency is key. Here's how I structure my days to maximize learning and productivity:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {dailyRoutine.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-600">
              <div className="text-sm text-blue-600 font-semibold">{item.time}</div>
              <h3 className="text-lg font-bold text-gray-900 mt-2">{item.activity}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Areas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What I'm Learning</h2>
        <p className="text-gray-600 mb-6">
          My focus areas for building real AI applications and understanding from first principles:
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

      {/* Commitment */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-4">My Commitment</h2>
        <ul className="space-y-2 text-sm md:text-base">
          <li>✅ Daily journaling of progress and learnings</li>
          <li>✅ Building projects end-to-end from ideation to production</li>
          <li>✅ Re-implementing ML papers to truly understand them</li>
          <li>✅ Testing patience, consistency, and time management</li>
          <li>✅ Learning and teaching publicly</li>
          <li>✅ Improving 1% every single day</li>
        </ul>
      </section>

      {/* Latest Posts Preview */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Journal Entries</h2>
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-600 mb-4">No posts yet. Starting my journey...</p>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Explore all posts →
          </Link>
        </div>
      </section>
    </div>
  );
}
