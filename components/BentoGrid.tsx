
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Music, Github, Linkedin, ArrowRight } from 'lucide-react';
import { Project, Page, CursorType } from '../types';
import { SOCIALS } from '../constants';

interface BentoGridProps {
  projects: Project[];
  setCursorType: (type: CursorType) => void;
  setPage: (page: Page) => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ projects, setCursorType, setPage }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="px-4 md:px-12 py-24 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-800 pb-8">
        <h2 className="text-6xl md:text-8xl font-display font-bold text-off-white leading-[0.8]">
          SELECTED <br/> <span className="text-outline">WORKS</span>
        </h2>
        <div className="flex flex-col items-end mt-6 md:mt-0">
           <div className="font-mono text-acid-lime mb-4">(2023 — 2025)</div>
           <button 
             onClick={() => setPage('WORK')}
             className="flex items-center gap-2 text-sm font-mono uppercase hover:text-acid-lime transition-colors group"
             onMouseEnter={() => setCursorType(CursorType.MAGNETIC)}
             onMouseLeave={() => setCursorType(CursorType.DEFAULT)}
           >
             View All Projects
             <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-6 auto-rows-[minmax(180px,auto)]">
        
        {/* Project 1 - Large Span */}
        <motion.div 
          className="col-span-1 md:col-span-2 row-span-2 relative group rounded-3xl overflow-hidden bg-soft-gray border border-zinc-800"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onMouseEnter={() => setCursorType(CursorType.HOVER)}
          onMouseLeave={() => setCursorType(CursorType.DEFAULT)}
        >
          <img 
            src={projects[0].image} 
            alt="Project 1" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm opacity-80 group-hover:opacity-60"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-3xl font-display text-white mb-2">{projects[0].title}</h3>
                <p className="font-mono text-sm text-gray-300">{projects[0].category}</p>
              </div>
              <div className="bg-acid-lime text-black p-3 rounded-full">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Spotify/Music Card */}
        <motion.div 
          className="col-span-1 md:col-span-1 row-span-1 bg-[#1db954] text-black rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.1 }}
        >
          <div className="z-10 flex justify-between items-start">
            <Music size={24} className="animate-pulse" />
            <div className="bg-black/20 backdrop-blur-md px-2 py-1 rounded-full text-xs font-bold uppercase">
              On Repeat
            </div>
          </div>
          <div className="z-10">
            <div className="font-bold text-lg leading-tight">Digital Silence</div>
            <div className="opacity-70 text-sm">Peter McPoland</div>
          </div>
           {/* Soundwave visualizer simulation */}
          <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-between px-6 pb-6 gap-1 opacity-30">
             {[...Array(10)].map((_, i) => (
               <motion.div 
                 key={i}
                 className="w-full bg-black rounded-t-sm"
                 animate={{ height: [10, 40, 15, 50, 20] }}
                 transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1, ease: "easeInOut" }}
               />
             ))}
          </div>
        </motion.div>

        {/* Location Card */}
        <motion.div 
          className="col-span-1 md:col-span-1 row-span-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
        >
           {/* Abstract Map Decoration */}
           <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%">
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
           </div>
           <div className="z-10 flex justify-between">
              <span className="text-xs font-mono text-zinc-500">LOCAL TIME</span>
              <span className="text-xs font-mono text-acid-lime">10:42 PM</span>
           </div>
           <div className="z-10 flex items-center gap-2 text-off-white">
             <MapPin size={20} className="text-acid-lime" />
             <span className="font-display text-lg">Lucknow, India</span>
           </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div 
          className="col-span-1 md:col-span-1 row-span-1 bg-zinc-800 rounded-3xl overflow-hidden relative group"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
          onMouseEnter={() => setCursorType(CursorType.HOVER)}
          onMouseLeave={() => setCursorType(CursorType.DEFAULT)}
        >
          <img src={projects[1].image} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" alt="Project 2"/>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
             <span className="font-display text-2xl text-white text-center px-4">{projects[1].title}</span>
          </div>
        </motion.div>

        {/* Social Stack */}
        <motion.div 
          className="col-span-1 row-span-1 flex flex-col gap-4"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
        >
           <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-2xl flex items-center justify-center text-off-white transition-colors group">
             <Github className="group-hover:scale-110 transition-transform"/>
           </a>
           <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#0077b5] hover:bg-[#006097] rounded-2xl flex items-center justify-center text-white transition-colors group">
             <Linkedin className="group-hover:scale-110 transition-transform"/>
           </a>
        </motion.div>

         {/* Project 3 - Wide */}
         <motion.div 
          className="col-span-1 md:col-span-2 row-span-1 relative group rounded-3xl overflow-hidden bg-soft-gray border border-zinc-800"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          onMouseEnter={() => setCursorType(CursorType.HOVER)}
          onMouseLeave={() => setCursorType(CursorType.DEFAULT)}
        >
          <img 
            src={projects[2].image} 
            alt="Project 3" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
          />
          <div className="absolute bottom-6 left-6">
             <h3 className="text-2xl font-display text-white">{projects[2].title}</h3>
             <div className="flex gap-2 mt-2">
                {projects[2].stats.map((stat, i) => (
                   <span key={i} className="text-xs font-mono bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-zinc-300 border border-zinc-700">{stat.label}: {stat.value}</span>
                ))}
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BentoGrid;
