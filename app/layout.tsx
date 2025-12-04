import type { Metadata } from 'next';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Asif - ML Engineer & Researcher',
  description:
    'Daily journey through Machine Learning, LLMs, Transformers, and AI Engineering. Building and learning in public.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
