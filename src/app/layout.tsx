// app/layout.tsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Sansation } from 'next/font/google';
import Chatbot from './components/Chatbot';
import PageTransition from './components/PageTransition';

const sansation = Sansation({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'oLabs',
  description: 'Product showcase site for oLabs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${sansation.className} bg-zinc-950 text-white`}>
        <Header />

        {children}

        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
