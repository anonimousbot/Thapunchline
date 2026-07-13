/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Contact from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Smooth scroll up on navigation
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  // Update HTML title dynamically based on navigation
  useEffect(() => {
    const titles: Record<Page, string> = {
      home: 'ThaPunchLine Apartments & Hotels | Comfort That Hits Different',
      rooms: 'Suites & Apartments | ThaPunchLine Apartments and Hotels',
      contact: 'Location & Contact Desk | ThaPunchLine Apartments and Hotels'
    };
    document.title = titles[currentPage] || 'ThaPunchLine Apartments and Hotels';
  }, [currentPage]);

  return (
    <div id="application-container" className="min-h-screen flex flex-col justify-between selection:bg-brand-green selection:text-white">
      {/* Subtle background grain overlay for warmth */}
      <div className="noise-overlay" />

      {/* Floating Header */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main layout with AnimatePresence transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: currentPage === 'home' ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: currentPage === 'home' ? 0 : -15 }}
            transition={{ 
              duration: currentPage === 'home' ? 0.75 : 0.4, 
              ease: [0.25, 1, 0.5, 1] 
            }}
            id="page-content-wrapper"
          >
            {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
            {currentPage === 'rooms' && <Rooms />}
            {currentPage === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Content rich Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
