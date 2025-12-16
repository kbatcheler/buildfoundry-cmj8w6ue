import './globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export const metadata = {
  title: 'Render E2E Test - 1765908270957',
  description: 'End-to-end test of Render.com deployment with Chatbot Integration template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="container mx-auto p-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}