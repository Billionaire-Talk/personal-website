export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who I Am</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I'm Asif, an AI/ML engineer dedicated to learning by building. This is my journal where I document the work I do daily—the progress, challenges, and breakthroughs as I dive deep into machine learning and AI.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Focus Areas</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">🏗️</span>
              <span>
                <strong>Transformers</strong> - Building attention mechanisms and architectures from scratch
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">🤖</span>
              <span>
                <strong>LLMs & GPTs</strong> - Implementing language models and understanding their mechanics
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">🧠</span>
              <span>
                <strong>Reasoning Models</strong> - Exploring advanced reasoning and problem-solving
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">🎵</span>
              <span>
                <strong>Audio ML</strong> - Speech recognition and audio signal processing
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">🎯</span>
              <span>
                <strong>Reinforcement Learning</strong> - Policy methods and reward design
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">📚</span>
              <span>
                <strong>RAG & MCP</strong> - Retrieval systems and model protocols for production
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Philosophy</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-4">
            <p className="text-gray-700 font-semibold">
              I learn best by building things and documenting the journey. This journal is where I share that work—not plans, but actual progress.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 my-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Learning by Doing</h3>
              <p className="text-gray-600 text-sm">
                Real understanding comes from implementation, not just reading.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Public Documentation</h3>
              <p className="text-gray-600 text-sm">
                Sharing my work publicly keeps me accountable and helps others.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Daily Consistency</h3>
              <p className="text-gray-600 text-sm">
                Small efforts compound into extraordinary results over time.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">From First Principles</h3>
              <p className="text-gray-600 text-sm">
                Understanding fundamentals enables true mastery.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Interested in discussing ML, AI, or interesting projects? Reach out!
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Billionaire-Talk"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Twitter
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
