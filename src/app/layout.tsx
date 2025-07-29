// app/layout.tsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { ViewModeProvider } from './context/ViewModeContext';
import Head from 'next/head';

export const metadata = {
  title: 'oLabs',
  description: 'Product showcase site for oLabs',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sansation&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={` bg-zinc-950 text-white overflow-x-hidden`}>
        <ViewModeProvider>
          <Header />
          {children}
          <Chatbot />
          <Footer />
        </ViewModeProvider>
      </body>
    </html>
  );
}
