/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronRight, ExternalLink } from 'lucide-react';
import { Page } from '../types';
import { HOTEL_INFO, LANDMARKS } from '../data';
import { LogoIcon } from './Logo';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-warm-charcoal text-gray-400 font-sans border-t border-white/5">
      {/* Top detailed content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About the Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigate('home')}>
              <LogoIcon className="w-10 h-10 shrink-0" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white hover:text-brand-green transition-colors duration-300">
                  ThaPunchLine
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-amber-yellow/90 mt-0.5">
                  Apartments & Hotels
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              "Comfort That Hits Different." A sanctuary designed for both transient staying guests and long-stay business executives, situated safely in the central core of Ikeja, Lagos.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-green/20 border border-white/10 hover:border-brand-green flex items-center justify-center text-white transition-all duration-300 group"
                title="WhatsApp Reservation Chat"
              >
                <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform text-amber-yellow" />
              </a>
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-green/20 border border-white/10 hover:border-brand-green flex items-center justify-center text-white transition-all duration-300 group"
                title="Phone Enquiry Call"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform text-brand-green" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-medium text-white tracking-wide relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-brand-green">
              Quick Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Welcome Homepage', page: 'home' as Page },
                { label: 'Rooms & Serviced Suites', page: 'rooms' as Page },
                { label: 'Our Location & Contact', page: 'contact' as Page },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavigate(link.page)}
                    className="flex items-center space-x-1 hover:text-white transition-colors duration-200 text-sm group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-green group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Proximity Details */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-medium text-white tracking-wide relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-brand-green">
              Prime Proximity
            </h3>
            <div className="space-y-4">
              {LANDMARKS.slice(0, 3).map((landmark, idx) => (
                <div key={idx} className="flex flex-col text-xs space-y-0.5">
                  <span className="font-semibold text-gray-200">{landmark.name}</span>
                  <span className="text-amber-yellow font-medium">{landmark.dist}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Shortcuts */}
          <div className="space-y-6">
            <h3 className="font-serif text-lg font-medium text-white tracking-wide relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-brand-green">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <a 
                  href={HOTEL_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-xs leading-relaxed"
                >
                  {HOTEL_INFO.address}
                  <span className="inline-flex items-center ml-1 text-[10px] text-amber-yellow hover:underline">
                    (Map <ExternalLink className="w-2.5 h-2.5 ml-0.5" />)
                  </span>
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-green shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-white transition-colors text-xs font-mono">
                  {HOTEL_INFO.displayPhone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-white transition-colors text-xs">
                  {HOTEL_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-gray-200">24/7 Front Desk</p>
                  <p className="text-[10px] text-gray-500">Always available for enquiries</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Note on Reservations */}
        <div className="mt-12 p-5 bg-white/5 rounded-xl border border-white/5 flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0">
          <div className="text-center md:text-left space-y-1 max-w-2xl">
            <p className="font-semibold text-gray-200 uppercase tracking-wider">RESERVATION NOTICE</p>
            <p className="text-gray-400">Direct booking coming soon — for now, reserve via WhatsApp or phone for the fastest response and best available rates.</p>
          </div>
          <a
            href={HOTEL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green text-white text-xs font-semibold py-2.5 px-5 rounded-full hover:bg-brand-green/90 transition-all duration-300 shrink-0 inline-flex items-center space-x-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat With Reception</span>
          </a>
        </div>
      </div>

      {/* Deep Footer bottom copyright bar */}
      <div className="bg-black/40 py-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-3 sm:space-y-0">
          <p>© {currentYear} {HOTEL_INFO.name}. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Booking Terms</span>
            <span className="text-amber-yellow/80">Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
