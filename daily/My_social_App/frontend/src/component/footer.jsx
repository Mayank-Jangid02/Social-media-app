import React from 'react';
import { BookOpen, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 py-12 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 transition-colors hover:text-blue-600 dark:hover:text-blue-400">
              <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-500" />
              <span className="text-xl font-bold tracking-tight">Blog App</span>
            </Link>
            <p className="text-sm dark:text-zinc-400 text-zinc-600 max-w-sm">
              Sharing thoughts, stories, and ideas. Join our community of fun and fair exploring the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/feed" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Feed</Link>
              </li>
              <li>
                <Link to="/createpost" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Write</Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Profile</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Connect</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="Github">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="Linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Blog App. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
