import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">StudyLinkEU</h3>
            <p className="text-sm">Your gateway to European education for African and Asian students.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Study Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/study-in-germany">Study in Germany</Link></li>
              <li><Link href="/study-in-poland">Study in Poland</Link></li>
              <li><Link href="/study-in-netherlands">Study in Netherlands</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary"><Facebook size={20} /></a>
              <a href="#" className="text-foreground hover:text-primary"><Twitter size={20} /></a>
              <a href="#" className="text-foreground hover:text-primary"><Instagram size={20} /></a>
              <a href="#" className="text-foreground hover:text-primary"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          &copy; {new Date().getFullYear()} StudyLinkEU. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;