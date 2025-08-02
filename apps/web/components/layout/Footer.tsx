"use client";

import Link from 'next/link';
import { Bot, Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full flex justify-center pb-8 pt-10 mt-auto relative">
      {/* Decorative SVG left */}
      <span className="absolute left-10 top-1/2 -translate-y-1/2 z-0 hidden sm:block">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none"><rect width="44" height="44" rx="11" fill="#F6F8F9" /><circle cx="22" cy="22" r="7" fill="#E7FAE8" /><path d="M15 22h14" stroke="#B4EAB9" strokeWidth="2" strokeLinecap="round" /></svg>
      </span>
      {/* Decorative SVG right */}
      <span className="absolute right-10 top-1/2 -translate-y-1/2 z-0 hidden sm:block">
        <svg width="48" height="30" viewBox="0 0 48 30" fill="none"><rect x="2" y="2" width="44" height="26" rx="8" fill="#FEF5F0" stroke="#FFD3C2" strokeWidth="2" /><circle cx="36" cy="15" r="4" fill="#FF8552" /></svg>
      </span>
      <div className="relative flex flex-col items-center gap-3 w-full max-w-2xl mx-auto px-4 py-5 rounded-2xl bg-white/75 shadow border border-neutral-200 z-10">
        <nav className="flex flex-wrap gap-4 justify-center text-sm text-neutral-700 font-medium">
          <a className="hover:underline" href="#">Privacy</a>
          <a className="hover:underline" href="#">Terms</a>
          <a className="hover:underline" href="#">Contact</a>
        </nav>
        <div className="text-neutral-400 text-xs font-semibold tracking-wide text-center">
          © {new Date().getFullYear()} rev io. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
