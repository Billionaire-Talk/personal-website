export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Am I</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I'm Asif, an AI/ML enthusiast and engineer dedicated to building and learning at the intersection of
            machine learning, deep learning, and practical AI applications. I believe the best way to learn is by
            building things and documenting the journey.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This website is my public learning journal where I document my daily progress, challenges, breakthroughs,
            and insights as I dive deep into modern AI and machine learning.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Mission</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-4">
            <p className="text-gray-700 font-semibold">
              To master machine learning from first principles by building transformers, LLMs, reasoning models, and
              other AI systems end-to-end, while maintaining daily consistency and documenting everything publicly.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What I'm Building</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">🏗️</span>
              <span>
                <strong>Transformer Implementation</strong> - Building attention mechanisms, positional encodings, and
                full transformer architectures from scratch
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">🤖</span>
              <span>
                <strong>LLM & GPT Models</strong> - Implementing language models, understanding scaling laws, and
                fine-tuning techniques
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">🧠</span>
              <span>
                <strong>Reasoning Models</strong> - Exploring advanced reasoning, chain-of-thought prompting, and
                multi-step problem solving
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">🎵</span>
              <span>
                <strong>Audio ML</strong> - Speech recognition, music generation, and audio signal processing
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">🎯</span>
              <span>
                <strong>Reinforcement Learning</strong> - Policy gradient methods, Q-learning, and reward design
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">📚</span>
              <span>
                <strong>RAG & MCP</strong> - Retrieval Augmented Generation and Model Context Protocol for practical AI
                applications
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-6 my-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Learning by Building</h3>
              <p className="text-gray-600 text-sm">
                I learn best by implementing. That's why I build things instead of just reading about them.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Public Accountability</h3>
              <p className="text-gray-600 text-sm">
                Documenting my journey publicly keeps me accountable and helps others learn from my path.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Daily Consistency</h3>
              <p className="text-gray-600 text-sm">
                Small consistent efforts compound into extraordinary results. 1% improvement daily matters.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">From First Principles</h3>
              <p className="text-gray-600 text-sm">
                Understanding fundamentals deeply enables innovation and true mastery.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Daily Routine</h2>
          <p className="text-gray-600 mb-4">
            Structure enables productivity. Here's how I organize my time:
          </p>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 font-semibold text-gray-900 bg-gray-50">4:00 AM - 9:00 AM</td>
                  <td className="px-4 py-3 text-gray-600">Deep work session - Core ML/DL work</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-semibold text-gray-900 bg-gray-50">9:00 AM - 10:00 AM</td>
                  <td className="px-4 py-3 text-gray-600">Rest & recovery</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-semibold text-gray-900 bg-gray-50">10:00 AM - 1:00 PM</td>
                  <td className="px-4 py-3 text-gray-600">Deep work session - Coding and building</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-semibold text-gray-900 bg-gray-50">1:00 PM - 3:00 PM</td>
                  <td className="px-4 py-3 text-gray-600">Rest & exam preparation</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-semibold text-gray-900 bg-gray-50">3:00 PM - 6:00 PM</td>
                  <td className="px-4 py-3 text-gray-600">Deep work session - Project development</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-semibold text-gray-900 bg-gray-50">6:00 PM - 7:00 PM</td>
                  <td className="px-4 py-3 text-gray-600">Rest & reflection</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-gray-900 bg-gray-50">7:00 PM - 9:00 PM</td>
                  <td className="px-4 py-3 text-gray-600">Deep work session - Writing & documentation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            I'm always interested in discussing ML, AI, research papers, and interesting projects. Feel free to reach
            out!
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com"
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
