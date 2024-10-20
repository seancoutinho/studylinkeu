"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          StudyLinkEU
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/about" className="text-foreground hover:text-primary">About</Link>
          <Link href="/services" className="text-foreground hover:text-primary">Services</Link>
          <Link href="/courses" className="text-foreground hover:text-primary">Courses</Link>
          <Link href="/blog" className="text-foreground hover:text-primary">Blog</Link>
          <Link href="/contact" className="text-foreground hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="outline" className="hidden md:inline-flex">
            Apply Now
          </Button>
          <Button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background py-2">
          <nav className="flex flex-col space-y-2 px-4">
            <Link href="/about" className="text-foreground hover:text-primary">About</Link>
            <Link href="/services" className="text-foreground hover:text-primary">Services</Link>
            <Link href="/courses" className="text-foreground hover:text-primary">Courses</Link>
            <Link href="/blog" className="text-foreground hover:text-primary">Blog</Link>
            <Link href="/contact" className="text-foreground hover:text-primary">Contact</Link>
            <Button variant="outline" className="w-full">Apply Now</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;