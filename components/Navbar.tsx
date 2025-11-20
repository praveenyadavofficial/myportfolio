
import React from 'react';
import MagneticButton from './MagneticButton';
import { Page } from '../types';
import { PERSONAL_INFO } from '../constants';

interface NavbarProps {
  setCursorType: (type: any) => void;
  setPage: (page: Page) => void;
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ setCursorType, setPage, currentPage }) => {
  return (
    <nav className="fixed top-0 left-0 w-full px-4 md:px-8 py-6 flex justify-between items-center z-40 mix-blend-difference text-white">
      <div 
        className="text-xl font-display font-bold tracking-tighter cursor-pointer"
        onMouseEnter={() => setCursorType('TEXT')}
        onMouseLeave={() => setCursorType('DEFAULT')}
        onClick={() => setPage('HOME')}
      >
        PRAVEEN.YADAV
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-mono text-sm">
        <button 
          onClick={() => setPage('HOME')}
          className={`relative group overflow-hidden ${currentPage === 'HOME' ? 'text-acid-lime' : ''}`}
          onMouseEnter={() => setCursorType('MAGNETIC')}
          onMouseLeave={() => setCursorType('DEFAULT')}
        >
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">Home</span>
          <span className="block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-acid-lime">Home</span>
        </button>

        <button 
          onClick={() => setPage('WORK')}
          className={`relative group overflow-hidden ${currentPage === 'WORK' ? 'text-acid-lime' : ''}`}
          onMouseEnter={() => setCursorType('MAGNETIC')}
          onMouseLeave={() => setCursorType('DEFAULT')}
        >
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">Work</span>
          <span className="block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-acid-lime">Work</span>
        </button>

        <a 
          href="#about"
          onClick={(e) => {
            if(currentPage !== 'HOME') {
              e.preventDefault();
              setPage('HOME');
              setTimeout(() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }
          }}
          className="relative group overflow-hidden"
          onMouseEnter={() => setCursorType('MAGNETIC')}
          onMouseLeave={() => setCursorType('DEFAULT')}
        >
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">About</span>
          <span className="block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-acid-lime">About</span>
        </a>
      </div>

      <MagneticButton 
        className="hidden md:block px-5 py-2 border border-white rounded-full font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors duration-300"
        onMouseEnter={() => setCursorType('MAGNETIC')}
        onMouseLeave={() => setCursorType('DEFAULT')}
        onClick={() => window.location.href = `mailto:${PERSONAL_INFO.email}`}
      >
        Let's Talk
      </MagneticButton>

      <button className="md:hidden text-sm font-mono uppercase text-white">Menu</button>
    </nav>
  );
};

export default Navbar;
