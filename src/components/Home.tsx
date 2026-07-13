/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Wifi,
  Wind,
  Bath,
  Tv,
  Utensils,
  ShieldAlert,
  Car,
  Coffee,
  ChevronRight,
  ArrowRight,
  Star,
  Compass,
  MapPin
} from 'lucide-react';
import { Page } from '../types';
import { HOTEL_INFO, LANDMARKS, REVIEWS_DATA } from '../data';

// Import custom generated brand images
import hotelExterior from '../assets/images/TPA4.jpg';
import receptionLobby from '../assets/images/TPA3.jpg';
import loungeBar from '../assets/images/TPA5.jpg';
import royalBedroom from '../assets/images/TPA2.jpg';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  // Simple scroll listener to calculate parallax values
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="homepage-root" className="overflow-hidden bg-soft-cream">
      {/* 1. Cinematic Hero Section */}
      <section 
        id="hero-section" 
        className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-warm-charcoal"
      >
        {/* Full-bleed Ken Burns background image */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[15000ms] ease-out scale-105 animate-[kenburns_20s_infinite_alternate]"
            style={{
              backgroundImage: `url(${hotelExterior})`,
              transform: `translateY(${scrollY * 0.15}px) scale(${1.05 + scrollY * 0.0001})`,
            }}
          />
          {/* Subtle gradient overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal via-warm-charcoal/40 to-black/65" />
          <div className="absolute inset-0 bg-radial-gradient-vignette opacity-40 pointer-events-none" />
        </div>

        {/* Content container with staged cinematic intro */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
          {/* Hotel Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none drop-shadow-md"
          >
            ThaPunchLine
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-xl sm:text-2xl md:text-3xl text-gray-200 mt-4 max-w-3xl font-light italic leading-relaxed"
          >
            "Comfort That Hits Different."
          </motion.p>

          {/* Mini Highlight Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="hidden sm:flex items-center space-x-8 text-white/70 text-xs tracking-wider uppercase font-sans mt-8 mb-10"
          >
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-green" />
              <span>Ikeja, Lagos</span>
            </div>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>24/7 Power & Security</span>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <span>WiFi & Kitchenettes</span>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 sm:mt-0 w-full sm:w-auto"
          >
            <button
              onClick={() => {
                setCurrentPage('rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-brand-green hover:bg-brand-green/90 text-white font-sans text-sm font-semibold py-4 px-8 rounded-full shadow-lg shadow-brand-green/35 transition-all duration-300 hover:scale-[1.03] cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Explore Rooms & Suites</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-sans text-sm font-semibold py-4 px-8 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              Contact Reception
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Section: Ikeja Positioning */}
      <section id="intro-section" className="py-24 bg-soft-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side text intro */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-brand-green text-xs font-semibold tracking-[0.2em] uppercase block">
                  A TRUE REFUGE IN LAGOS
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-warm-charcoal leading-tight">
                  Your Home Away from Home in the Heart of Ikeja
                </h2>
              </div>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Positioned strategically at <strong className="font-semibold text-warm-charcoal">14 Independence Street, Ikeja</strong>, ThaPunchLine Apartments and Hotels offers a premium sanctuary that perfectly bridges energetic Lagos business life with serene residential comfort. 
              </p>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We are situated just minutes from the primary commercial sectors including the famous Computer Village, Allen Avenue, and Ikeja City Mall, and under 15 minutes from the Lagos International Airport (MMIA). Yet, our quiet enclave ensures that when you close your door, the vibrant rush of Lagos falls silent, replaced by absolute, air-conditioned peace.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-brand-green pl-4">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-warm-charcoal">100%</span>
                  <span className="text-xs text-gray-500 block uppercase tracking-wider mt-1">Power Guarantee (24/7)</span>
                </div>
                <div className="border-l-2 border-amber-yellow pl-4">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-warm-charcoal">15 Mins</span>
                  <span className="text-xs text-gray-500 block uppercase tracking-wider mt-1">From Airport</span>
                </div>
              </div>
            </div>

            {/* Right side cinematic imagery (Staggered parallax feel) */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden cinematic-shadow border border-warm-charcoal/5">
                <img 
                  src={receptionLobby} 
                  alt="ThaPunchLine Reception" 
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Secondary stacked accent photo */}
              <div className="absolute -bottom-10 -left-10 w-48 sm:w-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-soft-cream z-20 hidden sm:block">
                <img 
                  src={royalBedroom} 
                  alt="Deluxe Bedroom Bed Setup" 
                  className="w-full h-40 sm:h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Geometric pattern background accent */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-yellow/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three-Pillar Highlight Section */}
      <section id="pillars-section" className="py-24 bg-warm-charcoal text-white relative">
        <div className="absolute inset-0 bg-radial-gradient-vignette opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-green text-xs font-semibold tracking-[0.2em] uppercase block">
              DESIGNED FOR THE DISCERNING GUEST
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              A Stay Crafted Around Your Needs
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-light">
              Whether visiting Lagos for a brief business meeting, a transient weekend getaway, or seeking a fully-managed residence for months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Pillar 1: Comfort */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:border-brand-green/30 transition-all duration-300 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <Wind className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold tracking-wide text-white">Comfort</h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  Relax in modern, air-conditioned rooms designed to soothe. Enjoy luxury double or queen beds, custom drop-ceiling illumination, pristine en-suite bathrooms with hot power-showers, and flat-screen smart TVs in every unit.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                <span className="text-[10px] bg-white/5 px-2.5 py-1 rounded-full text-gray-300">Air Conditioning</span>
                <span className="text-[10px] bg-white/5 px-2.5 py-1 rounded-full text-gray-300">En-suite Baths</span>
                <span className="text-[10px] bg-white/5 px-2.5 py-1 rounded-full text-gray-300">Flat Screen TV</span>
              </div>
            </motion.div>

            {/* Pillar 2: Flexibility */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:border-amber-yellow/30 transition-all duration-300 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-yellow/10 flex items-center justify-center text-amber-yellow">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold tracking-wide text-white">Flexibility</h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  Choose the format that fits. Standard hotel rooms provide quick, premium short-term comfort. Our fully-managed apartments feature customized kitchenettes (cooktop, microwave, and fridge) allowing independent meal preparation for longer, flexible stays.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                <span className="text-[10px] bg-white/5 px-2.5 py-1 rounded-full text-gray-300">Hotel Rooms</span>
                <span className="text-[10px] bg-white/5 px-2.5 py-1 rounded-full text-gray-300">Kitchenettes</span>
                <span className="text-[10px] bg-white/5 px-2.5 py-1 rounded-full text-gray-300">Long/Short Stay</span>
              </div>
            </motion.div>

            {/* Pillar 3: Convenience */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:border-brand-green/30 transition-all duration-300 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold tracking-wide text-white">Convenience</h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  Enjoy absolute security with our 24-hour physical guards and front-desk assistance. Access complimentary high-speed WiFi, free secured parking, daily housekeeping, and our on-site restaurant & bar for dining and corporate unwinding.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                <span className="text-[10px] bg-white/5 px-2.5 py-1 rounded-full text-gray-300">24/7 Security</span>
                <span className="text-[10px] bg-white/5 px-2.5 py-1 rounded-full text-gray-300">Free High-Speed WiFi</span>
                <span className="text-[10px] bg-white/5 px-2.5 py-1 rounded-full text-gray-300">Secure Parking</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Restaurant/Bar Preview Section */}
      <section id="restaurant-preview-section" className="py-24 bg-soft-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Column with authentic styling */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden cinematic-shadow relative border border-warm-charcoal/5">
                <img 
                  src={loungeBar} 
                  alt="ThaPunchLine On-site Lounge & Bar" 
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-amber-yellow font-semibold">ON-SITE AMENITY</p>
                    <h4 className="font-serif text-xl font-bold">The PunchLine Lounge & Bar</h4>
                  </div>
                  <span className="text-xs bg-brand-green/95 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                    Open Daily
                  </span>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-brand-green/10 rounded-lg -z-10" />
            </div>

            {/* Description Text Column */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-brand-green text-xs font-semibold tracking-[0.2em] uppercase block">
                  REFINE YOUR PALATE
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-warm-charcoal leading-tight">
                  The Lounge & Bar: Unwind with Flare
                </h2>
              </div>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Our cozy, mood-lit lounge features deep black leather booth seating, ambient lighting, and high-definition screens broadcasting your favorite live sports events. 
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Start your day with our comforting hot complimentary breakfast. Return in the evening for delicious local and continental dishes, cold beers, and artisanal cocktails. It is the perfect spot to host informal meetings with business partners, catch the big game, or relax alone with an ice-cold drink.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                    <span className="text-[10px] font-bold">✓</span>
                  </div>
                  <span>Complimentary breakfast served daily for hotel room guests.</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                    <span className="text-[10px] font-bold">✓</span>
                  </div>
                  <span>Fully stocked bar with premium spirits, beers, and soft cocktails.</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                    <span className="text-[10px] font-bold">✓</span>
                  </div>
                  <span>Spacious leather seating, private corners, and large flatscreen TVs.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Landmarks / Proximity section */}
      <section id="landmarks-section" className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-green text-xs font-semibold tracking-[0.2em] uppercase block">
              IKEJA LANDMARKS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-warm-charcoal">
              A Strategic Node of Connection
            </h2>
            <p className="text-sm text-gray-500 font-light">
              We place you close to all central transit pathways, business hubs, and premium shopping areas in Lagos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LANDMARKS.map((landmark, index) => (
              <div 
                key={index}
                className="bg-soft-cream/60 p-6 rounded-2xl border border-gray-100 hover:border-brand-green/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="font-serif text-xl font-bold text-brand-green block">
                    {landmark.dist}
                  </span>
                  <h3 className="font-sans text-sm font-semibold text-warm-charcoal tracking-wide">
                    {landmark.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    {landmark.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center text-[10px] uppercase font-bold tracking-wider text-amber-yellow">
                  <span>Accessible route</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Guest Testimonial slider / showcase */}
      <section id="testimonials-section" className="py-24 bg-warm-charcoal text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-3 mb-16">
            <span className="text-brand-green text-xs font-semibold tracking-[0.2em] uppercase block">
              GUEST EXPERIENCES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What Our Guests Say
            </h2>
          </div>

          {/* Testimonial Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS_DATA.map((review) => (
              <div 
                key={review.id}
                className="bg-white/5 p-8 rounded-2xl border border-white/5 flex flex-col justify-between text-left relative"
              >
                {/* Visual Quote mark */}
                <div className="text-5xl font-serif text-brand-green/20 absolute top-4 left-4 select-none">“</div>
                
                <div className="space-y-4 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-yellow text-amber-yellow" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed font-light italic">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex flex-col">
                  <span className="font-sans text-sm font-semibold text-white">{review.name}</span>
                  <span className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">{review.role} — {review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Action CTA Banner Section */}
      <section id="cta-banner" className="py-20 bg-brand-green relative text-white overflow-hidden">
        {/* Background visual graphics */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            Ready to Experience Comfort That Hits Different?
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Reserve your hotel suite for a short stay or secure a fully serviced studio with kitchenette for longer corporate business stays.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setCurrentPage('rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-warm-charcoal text-white hover:bg-black font-sans text-sm font-semibold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>View Available Units</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href={HOTEL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-brand-green hover:bg-soft-cream font-sans text-sm font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Instant WhatsApp Enquiry</span>
            </a>
          </div>
          <p className="text-xs text-white/70">
            * Direct booking is launching soon. Get direct discount rates over WhatsApp or Phone!
          </p>
        </div>
      </section>
    </div>
  );
}
