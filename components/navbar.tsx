import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <a className="text-xl font-bold">Render E2E Test</a>
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="p-2 text-sm bg-gray-200 dark:bg-gray-700 rounded">
          Toggle Theme
        </button>
      </nav>
    </header>
  );
}