import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WorkPage from './components/WorkPage';
import { CursorType, Page } from './types';

const App: React.FC = () => {
  const [cursorType, setCursorType] = useState<CursorType>(CursorType.DEFAULT);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('HOME');

  // Preloader Simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (page: Page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  if (!isLoaded) {
    return (
      <div className="h-screen w-full bg-deep-black flex items-center justify-center text-off-white">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-sm md:text-base text-center"
        >
          <motion.div
            animate={{ opacity: [0.2, 1, 0.2] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mb-4 text-acid-lime"
          >
            PRAVEEN.SYSTEM
          </motion.div>
          <div className="w-48 h-1 bg-zinc-800 mt-2 overflow-hidden rounded-full mx-auto">
            <motion.div 
              className="h-full bg-acid-lime"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "circOut" }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-deep-black text-off-white min-h-screen font-sans selection:bg-acid-lime selection:text-black relative">
      <div className="fixed inset-0 bg-noise opacity-20 pointer-events-none z-50 h-full w-full mix-blend-overlay"></div>
      
      <CustomCursor cursorType={cursorType} />
      <Navbar setCursorType={setCursorType} setPage={handlePageChange} currentPage={currentPage} />

      <main className="relative z-10 bg-deep-black">
        <AnimatePresence mode="wait">
          {currentPage === 'HOME' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Home setCursorType={setCursorType} setPage={handlePageChange} />
            </motion.div>
          ) : (
            <motion.div
              key="work"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WorkPage setCursorType={setCursorType} setPage={handlePageChange} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;