import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import BentoGrid from './BentoGrid';
import MagneticButton from './MagneticButton';
import { PROJECTS, SOCIALS, PERSONAL_INFO } from '../constants';
import { CursorType, Page } from '../types';

interface HomeProps {
  setCursorType: (type: CursorType) => void;
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setCursorType, setPage }) => {
  const { scrollYProgress } = useScroll();
  
  // Parallax Transforms
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 300]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <>
      {/* Hero Section */}
      <header className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden px-4">
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="text-center z-10"
        >
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 flex items-center justify-center gap-2"
          >
            <span className="inline-block w-2 h-2 bg-acid-lime rounded-full animate-pulse"></span>
            <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-zinc-400">Student & Creative Dev</span>
          </motion.div>

          <motion.h1 
            style={{ scale: scaleText }}
            className="text-[12vw] md:text-[10vw] leading-[0.85] font-display font-bold tracking-tighter text-off-white mix-blend-exclusion"
            onMouseEnter={() => setCursorType(CursorType.TEXT)}
            onMouseLeave={() => setCursorType(CursorType.DEFAULT)}
          >
            PRAVEEN <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #f4f4f5" }}>YADAV</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 max-w-md mx-auto text-zinc-400 font-mono text-sm md:text-base leading-relaxed"
          >
            Crafting immersive digital experiences from Lucknow, India.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="text-[10px] font-mono uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>

        {/* Background Abstract Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-acid-lime blur-[120px] rounded-full opacity-10 pointer-events-none" />
      </header>

      {/* Work Section */}
      <BentoGrid projects={PROJECTS} setCursorType={setCursorType} setPage={setPage} />

      {/* Philosophy / About Section */}
      <section id="about" className="py-32 px-4 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-display font-bold text-acid-lime mb-6">ABOUT ME</h2>
            <p className="font-mono text-sm text-zinc-500">THE INTERSECTION OF<br/>ACADEMICS AND ART</p>
          </div>
          <div className="md:w-2/3">
            <p className="text-2xl md:text-4xl font-sans font-light leading-tight text-zinc-300">
              I am <strong className="text-off-white font-medium">{PERSONAL_INFO.name}</strong>, currently a student in 11th Class at <em className="font-serif text-acid-lime">{PERSONAL_INFO.school}</em>.
              <br /><br />
              Beyond the classroom, I am a creative developer obsessed with the web. I build applications that respect the user's time but demand their attention through micro-interactions and fluid motion.
            </p>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { title: "Next.js", desc: "App Router Architecture" },
                { title: "WebGL", desc: "R3F & Shaders" },
                { title: "Motion", desc: "GSAP & Framer" },
                { title: "Student", desc: "Class 11, LPS" },
                { title: "Design", desc: "Figma & Spline" },
                { title: "Creative", desc: "Problem Solving" }
              ].map((skill) => (
                  <div key={skill.title} className="border-l border-zinc-800 pl-4">
                    <div className="font-display text-xl mb-1">{skill.title}</div>
                    <div className="font-mono text-xs text-zinc-500">{skill.desc}</div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="min-h-[80vh] flex flex-col justify-between px-4 md:px-12 py-12 bg-zinc-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-acid-lime to-transparent opacity-50"></div>
          
          <div className="flex justify-between items-start font-mono text-xs text-zinc-500">
            <span>BASED IN {PERSONAL_INFO.location.toUpperCase()}</span>
            <span>STUDENT @ LPS</span>
          </div>

          <div className="relative z-10">
            <h2 className="text-[10vw] leading-[0.9] font-display font-bold text-off-white mb-8">
              LET'S BUILD <br/>
              <span className="text-acid-lime hover:text-white transition-colors cursor-none" onMouseEnter={() => setCursorType(CursorType.HOVER)} onMouseLeave={() => setCursorType(CursorType.DEFAULT)}>
                THE FUTURE
              </span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 md:items-center">
              <MagneticButton 
                className="bg-off-white text-deep-black px-8 py-4 rounded-full font-bold font-mono uppercase tracking-wide hover:bg-acid-lime transition-colors"
                onMouseEnter={() => setCursorType(CursorType.MAGNETIC)} 
                onMouseLeave={() => setCursorType(CursorType.DEFAULT)}
                onClick={() => window.location.href = `mailto:${PERSONAL_INFO.email}`}
              >
                Start a Project
              </MagneticButton>
              
              <div className="flex gap-8 text-zinc-400 font-mono text-sm">
                <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-acid-lime transition-colors">INSTAGRAM</a>
                <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-acid-lime transition-colors">LINKEDIN</a>
                <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="hover:text-acid-lime transition-colors">GITHUB</a>
              </div>
            </div>
          </div>

          <div className="text-zinc-800 text-[12vw] font-display font-black absolute -bottom-12 left-0 w-full text-center opacity-10 pointer-events-none select-none">
            PRAVEEN
          </div>
      </footer>
    </>
  );
};

export default Home;