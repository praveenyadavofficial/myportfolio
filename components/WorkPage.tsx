import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { PROJECTS, SOCIALS, PERSONAL_INFO } from '../constants';
import { CursorType, Page, Project } from '../types';

interface WorkPageProps {
  setCursorType: (type: CursorType) => void;
  setPage: (page: Page) => void;
}

const WorkPage: React.FC<WorkPageProps> = ({ setCursorType, setPage }) => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-deep-black pt-32 pb-12 px-4 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <button 
            onClick={() => setPage('HOME')}
            className="flex items-center gap-2 text-zinc-500 hover:text-acid-lime font-mono text-sm mb-8 transition-colors"
            onMouseEnter={() => setCursorType(CursorType.MAGNETIC)}
            onMouseLeave={() => setCursorType(CursorType.DEFAULT)}
          >
            <ArrowLeft size={16} />
            BACK TO HOME
          </button>
          <h1 className="text-6xl md:text-8xl font-display font-bold text-off-white mb-4">
            ARCHIVE <span className="text-acid-lime">.</span>
          </h1>
          <p className="font-mono text-zinc-400 max-w-xl">
             A selected collection of experiments, products, and interfaces crafted with code and passion.
          </p>
        </div>

        <div className="w-full border-t border-zinc-800">
           <div className="hidden md:grid grid-cols-12 py-4 text-xs font-mono text-zinc-500 uppercase tracking-wider border-b border-zinc-800">
             <div className="col-span-1">Year</div>
             <div className="col-span-5">Project</div>
             <div className="col-span-4">Category</div>
             <div className="col-span-2 text-right">Link</div>
           </div>

           {PROJECTS.map((project) => (
             <motion.div 
               key={project.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="group relative border-b border-zinc-800 transition-colors hover:bg-zinc-900"
               onMouseEnter={() => {
                 setHoveredProject(project);
                 setCursorType(CursorType.HOVER);
               }}
               onMouseLeave={() => {
                 setHoveredProject(null);
                 setCursorType(CursorType.DEFAULT);
               }}
             >
                <div className="grid grid-cols-1 md:grid-cols-12 py-8 items-center relative z-10">
                  <div className="col-span-1 font-mono text-sm text-zinc-500 mb-2 md:mb-0">{project.year}</div>
                  <div className="col-span-5 font-display text-3xl md:text-4xl text-off-white group-hover:text-acid-lime transition-colors">
                    {project.title}
                  </div>
                  <div className="col-span-4 font-mono text-sm text-zinc-400 mt-2 md:mt-0">{project.category}</div>
                  <div className="col-span-2 flex justify-end mt-4 md:mt-0">
                    <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-acid-lime group-hover:text-black group-hover:border-acid-lime transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Floating Image Preview */}
        {hoveredProject && (
           <motion.div 
             className="fixed pointer-events-none z-20 hidden md:block w-[400px] h-[250px] rounded-lg overflow-hidden border border-zinc-700"
             style={{
               top: "50%",
               left: "50%",
               x: "-50%",
               y: "-50%",
             }}
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1, rotate: Math.random() * 10 - 5 }}
             exit={{ opacity: 0, scale: 0.8 }}
           >
             <img src={hoveredProject.image} className="w-full h-full object-cover" alt="Preview" />
             <div className="absolute bottom-0 left-0 w-full p-4 bg-black/80 backdrop-blur-md">
               <div className="flex gap-2">
                 {hoveredProject.stats.map((s, i) => (
                   <span key={i} className="text-xs font-mono text-acid-lime bg-zinc-900 px-2 py-1 rounded border border-zinc-800">{s.label}: {s.value}</span>
                 ))}
               </div>
             </div>
           </motion.div>
        )}
        
        <div className="mt-32 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center font-mono text-sm text-zinc-500">
           <div>&copy; 2025 Praveen Yadav</div>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-acid-lime transition-colors">Email</a>
              <a href={SOCIALS.github} className="hover:text-acid-lime transition-colors">GitHub</a>
              <a href={SOCIALS.linkedin} className="hover:text-acid-lime transition-colors">LinkedIn</a>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;