export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-400">
            Building transformers, LLMs, and reasoning models one day at a time.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            © {currentYear} Asif. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/asif-reh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
