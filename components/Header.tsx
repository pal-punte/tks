import React, { useState, useEffect } from 'react';
import { NAV_LINKS, FIRM_NAME } from '../constants';
import { BuildingOffice2Icon } from '@heroicons/react/24/solid';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center space-x-2">
            <BuildingOffice2Icon className="h-8 w-8 text-sky-700" />
            <span className="text-xl font-bold text-slate-800">{FIRM_NAME}</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-sky-700 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-block bg-orange-500 text-white px-6 py-2.5 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-sm font-semibold"
          >
            無料相談はこちら
          </a>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="メニューを開く">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
           <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
               {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-600 hover:text-sky-700 transition-colors duration-200 font-medium px-2 py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center bg-orange-500 text-white px-6 py-2.5 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-sm font-semibold"
              >
                無料相談はこちら
              </a>
            </nav>
           </div>
        )}
      </div>
    </header>
  );
};

export default Header;