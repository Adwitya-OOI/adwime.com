// Navbar placeholder 
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  return (
    <nav className="bg-background text-text py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">Adwime</a>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <a className="hover:text-secondary">Login</a>
          </Link>
          <Link href="/signup">
            <a className="hover:text-secondary">Sign Up</a>
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}