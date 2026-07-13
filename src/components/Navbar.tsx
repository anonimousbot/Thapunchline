/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { Page } from '../types';
import { HOTEL_INFO } from '../data';
import { LogoIcon } from './Logo';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Rooms & Apartments', page: 'rooms' },
    { label: 'Location & Contact', page: 'contact' },
  ];

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHome = currentPage === 'home';

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-warm-charcoal/95 backdrop-blur-md border-b border-white/5 py-3 shadow-lg'
            : isHome
            ? 'bg-gradient-to-b from-black/60 to-transparent py-5'
            : 'bg-warm-charcoal py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <div 
              id="brand-logo"
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavigate('home')}
            >
              <LogoIcon className="w-10 h-10 sm:w-11 sm:h-11 shrink-0" />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-brand-green">
                  ThaPunchLine
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-amber-yellow/90">
                  Apartments & Hotels
                </span>
              </div>
            </div>

            {/* Desktop Navigation links */}
            <div id="desktop-nav-links" className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`font-sans text-sm font-medium tracking-wide transition-all duration-300 relative py-2 ${
                    currentPage === item.page
                      ? 'text-brand-green'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {currentPage === item.page && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-green rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div id="desktop-actions" className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center space-x-1.5 text-xs text-gray-300 hover:text-white transition-colors py-2 px-3 border border-white/10 hover:border-white/30 rounded-full"
              >
                <Phone className="w-3.5 h-3.5 text-brand-green" />
                <span>0704 015 2691</span>
              </a>
              <button
                onClick={() => handleNavigate('rooms')}
                className="bg-brand-green text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-brand-green/90 transition-all duration-300 shadow-md hover:shadow-brand-green/20 hover:scale-[1.02] cursor-pointer"
              >
                Book Your Stay
              </button>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden flex items-center space-x-3">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="p-2 border border-white/10 hover:border-white/30 rounded-full text-gray-300 hover:text-white transition-colors"
                aria-label="Call Reception"
              >
                <Phone className="w-4 h-4 text-brand-green" />
              </a>
              <button
                id="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        id="mobile-nav-overlay"
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-45 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-drawer-menu"
        className={`fixed right-0 top-0 h-full w-[280px] sm:w-[320px] bg-warm-charcoal border-l border-white/10 z-50 shadow-2xl transition-transform duration-500 ease-out md:hidden flex flex-col justify-between ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-6 pt-24 pb-6 flex-grow">
          {/* Menu Title */}
          <div className="mb-10 pb-4 border-b border-white/10 flex items-center space-x-3">
            <LogoIcon className="w-9 h-9 shrink-0" />
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-white block">
                ThaPunchLine
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-amber-yellow text-amber-yellow/90 block mt-0.5">
                Apartments & Hotels
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`font-sans text-lg font-medium tracking-wide text-left transition-all duration-300 flex items-center justify-between ${
                  currentPage === item.page ? 'text-brand-green pl-2 border-l-2 border-brand-green' : 'text-gray-300 hover:text-white'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer actions of drawer */}
        <div className="p-6 bg-black/20 border-t border-white/10 space-y-4">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">RECEPTION DESK</p>
            <a href={`tel:${HOTEL_INFO.phone}`} className="text-white hover:text-brand-green font-medium flex items-center space-x-2 transition-colors">
              <Phone className="w-4 h-4 text-brand-green" />
              <span>{HOTEL_INFO.displayPhone}</span>
            </a>
          </div>
          <button
            onClick={() => handleNavigate('rooms')}
            className="w-full bg-brand-green text-white text-sm font-semibold py-3 px-4 rounded-full hover:bg-brand-green/90 transition-all duration-300 shadow-lg text-center cursor-pointer block"
          >
            Explore & Book Stay
          </button>
          <a
            href={HOTEL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25d366] text-white text-sm font-semibold py-3 px-4 rounded-full hover:bg-[#20ba5a] transition-all duration-300 shadow-md text-center flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
