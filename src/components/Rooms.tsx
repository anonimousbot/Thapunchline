/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Check, 
  Wifi, 
  Wind, 
  Tv, 
  Bath, 
  ChefHat, 
  Users, 
  Calendar, 
  Phone, 
  MessageSquare, 
  X, 
  CheckCircle2, 
  ArrowRight,
  Info
} from 'lucide-react';
import { ROOMS_DATA, HOTEL_INFO } from '../data';
import { Room, EnquiryForm } from '../types';

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'hotel' | 'apartment'>('all');
  
  // Form State
  const [formData, setFormData] = useState<EnquiryForm>({
    fullName: '',
    email: '',
    phone: '',
    roomType: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof EnquiryForm, string>>>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState<EnquiryForm | null>(null);

  const filteredRooms = ROOMS_DATA.filter(room => {
    if (activeTab === 'all') return true;
    return room.category === activeTab;
  });

  // Handle open quick reservation form with pre-selected room
  const handleOpenEnquiry = (room: Room) => {
    setSelectedRoom(room);
    setFormData(prev => ({
      ...prev,
      roomType: room.name
    }));
    // Scroll down to the form area smoothly
    const formSection = document.getElementById('enquiry-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name as keyof EnquiryForm]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof EnquiryForm, string>> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.roomType) errors.roomType = 'Please select a room/apartment category';
    if (!formData.checkIn) errors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) errors.checkOut = 'Check-out date is required';
    
    // Check-in check-out validation
    if (formData.checkIn && formData.checkOut) {
      const inDate = new Date(formData.checkIn);
      const outDate = new Date(formData.checkOut);
      if (outDate <= inDate) {
        errors.checkOut = 'Check-out must be after check-in';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate successful API submission
    setSubmittedData(formData);
    setShowSuccessModal(true);
  };

  // Compile a highly functional pre-filled WhatsApp message based on form inputs
  const getWhatsAppSubmitUrl = (data: EnquiryForm) => {
    const text = `Hi ThaPunchLine, I'd like to book a stay:\n\n*Name:* ${data.fullName}\n*Room Category:* ${data.roomType}\n*Dates:* ${data.checkIn} to ${data.checkOut}\n*Guests:* ${data.guests}\n*Phone:* ${data.phone}\n*Notes:* ${data.message || 'None'}\n\nPlease confirm availability. Thanks!`;
    return `https://wa.me/2347040152691?text=${encodeURIComponent(text)}`;
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      roomType: '',
      checkIn: '',
      checkOut: '',
      guests: 1,
      message: ''
    });
    setSelectedRoom(null);
  };

  return (
    <div id="rooms-page-root" className="min-h-screen bg-soft-cream pt-24 pb-16">
      
      {/* Page Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-10">
        <div className="bg-warm-charcoal text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden cinematic-shadow">
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-brand-green/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-amber-yellow text-xs font-semibold uppercase tracking-[0.2em] block">
              OUR RESERVATION PLATFORM
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Premium Rooms & Serviced Suites
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              Explore our selection of premium hotel rooms tailored for quick visits, alongside fully furnished serviced apartments equipped with convenient private kitchenettes, designed for business and extended stays in Lagos.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Switch Categories */}
        <div className="flex space-x-2 bg-gray-200/60 p-1.5 rounded-full self-start">
          {[
            { id: 'all', label: 'All Listings' },
            { id: 'hotel', label: 'Premium Hotel Rooms' },
            { id: 'apartment', label: 'Serviced Apartments' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-warm-charcoal text-white shadow-md'
                  : 'text-gray-600 hover:text-warm-charcoal'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Informative Note */}
        <div className="flex items-start space-x-2.5 bg-amber-yellow/15 text-amber-yellow-900 border border-amber-yellow/20 p-4 rounded-xl max-w-md text-xs leading-relaxed">
          <Info className="w-4.5 h-4.5 text-amber-yellow shrink-0 mt-0.5" />
          <p>
            <strong className="font-semibold">Direct booking launching soon.</strong> For now, reserve via WhatsApp or phone for the fastest priority rates. Each "Enquire" action redirects to our official front desk.
          </p>
        </div>
      </div>

      {/* Structured separated sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hotel Rooms Category Header (only if hotel or all) */}
        {(activeTab === 'all' || activeTab === 'hotel') && (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4 flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-warm-charcoal">
                  Premium Hotel Rooms
                </h2>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                  Air-conditioned units ideal for comfortable short stays
                </p>
              </div>
              <span className="text-xs font-semibold bg-brand-green/10 text-brand-green px-3 py-1.5 rounded-full">
                Complimentary Breakfast Included
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredRooms
                .filter(room => room.category === 'hotel')
                .map(room => (
                  <RoomCard key={room.id} room={room} onBook={handleOpenEnquiry} />
                ))}
            </div>
          </div>
        )}

        {/* Serviced Apartments Category Header (only if apartment or all) */}
        {(activeTab === 'all' || activeTab === 'apartment') && (
          <div className="space-y-6 pt-6">
            <div className="border-b border-gray-200 pb-4 flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-warm-charcoal">
                  Serviced Apartments
                </h2>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                  Fully furnished with sitting areas & kitchenettes — ideal for longer, self-catering stays
                </p>
              </div>
              <span className="text-xs font-semibold bg-amber-yellow/10 text-amber-yellow-900 px-3 py-1.5 rounded-full">
                Home Away From Home feel
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredRooms
                .filter(room => room.category === 'apartment')
                .map(room => (
                  <RoomCard key={room.id} room={room} onBook={handleOpenEnquiry} />
                ))}
            </div>
          </div>
        )}

      </div>

      {/* 2. Interactive Enquiry Form Section */}
      <section id="enquiry-form-section" className="mt-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 cinematic-shadow">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
            <span className="text-brand-green text-xs font-semibold tracking-wider uppercase block">
              RESERVE YOUR DATES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-warm-charcoal">
              Book Your Premium Stay Now
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-light">
              Submit your ideal travel dates and category details. Our reservations desk will immediately process your booking request and contact you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g., Tunde Cole"
                  className={`w-full bg-soft-cream/50 border ${formErrors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-green transition-all`}
                />
                {formErrors.fullName && <p className="text-[11px] text-red-500">{formErrors.fullName}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g., info@domain.com"
                  className={`w-full bg-soft-cream/50 border ${formErrors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-green transition-all`}
                />
                {formErrors.email && <p className="text-[11px] text-red-500">{formErrors.email}</p>}
              </div>
            </div>

            {/* Row 2: Phone & Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">WhatsApp / Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g., 07040152691"
                  className={`w-full bg-soft-cream/50 border ${formErrors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-green transition-all`}
                />
                {formErrors.phone && <p className="text-[11px] text-red-500">{formErrors.phone}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">Room or Apartment Type</label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  className={`w-full bg-soft-cream/50 border ${formErrors.roomType ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-green transition-all cursor-pointer`}
                >
                  <option value="">Select category...</option>
                  {ROOMS_DATA.map(room => (
                    <option key={room.id} value={room.name}>
                      {room.name} ({room.price})
                    </option>
                  ))}
                </select>
                {formErrors.roomType && <p className="text-[11px] text-red-500">{formErrors.roomType}</p>}
              </div>
            </div>

            {/* Row 3: Check-in, Check-out, Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-green" />
                  <span>Check-in Date</span>
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  className={`w-full bg-soft-cream/50 border ${formErrors.checkIn ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-green transition-all`}
                />
                {formErrors.checkIn && <p className="text-[11px] text-red-500">{formErrors.checkIn}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-green" />
                  <span>Check-out Date</span>
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  className={`w-full bg-soft-cream/50 border ${formErrors.checkOut ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-green transition-all`}
                />
                {formErrors.checkOut && <p className="text-[11px] text-red-500">{formErrors.checkOut}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-700 flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5 text-brand-green" />
                  <span>Total Guests</span>
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full bg-soft-cream/50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-green transition-all cursor-pointer"
                >
                  {[1, 2, 3, 4].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Custom Message */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">Special Notes or Requests (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="e.g., I'd love a room with false ceiling lighting, early check-in details, etc."
                className="w-full bg-soft-cream/50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-green transition-all"
              />
            </div>

            {/* Direct Booking Note */}
            <p className="text-xs text-gray-400">
              * By submitting this enquiry form, you agree to allow our front desk manager to call or message you on WhatsApp regarding current vacancy and deposit guidelines.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-brand-green/20 hover:scale-[1.01] cursor-pointer text-center flex items-center justify-center space-x-2"
            >
              <span>Submit Stay Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* 3. Dynamic Submission Success Modal */}
      {showSuccessModal && submittedData && (
        <div className="fixed inset-0 bg-black/75 z-55 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border border-gray-100 text-center space-y-6">
            <button
              onClick={handleCloseSuccess}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success icon */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-warm-charcoal">Enquiry Submitted!</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                Thank you, <strong className="font-semibold text-warm-charcoal">{submittedData.fullName}</strong>. Your stay request for the <strong className="font-semibold text-warm-charcoal">{submittedData.roomType}</strong> has been received successfully.
              </p>
            </div>

            {/* Action highlights */}
            <div className="bg-soft-cream p-4 rounded-2xl text-left text-xs space-y-2.5">
              <div className="flex justify-between border-b border-gray-200/50 pb-1.5">
                <span className="text-gray-400">Check-in:</span>
                <span className="font-semibold text-warm-charcoal">{submittedData.checkIn}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200/50 pb-1.5">
                <span className="text-gray-400">Check-out:</span>
                <span className="font-semibold text-warm-charcoal">{submittedData.checkOut}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Guests:</span>
                <span className="font-semibold text-warm-charcoal">{submittedData.guests}</span>
              </div>
            </div>

            {/* Direct Instant WhatsApp bridge link */}
            <div className="space-y-3">
              <p className="text-xs text-amber-yellow-900 font-medium">
                Want a faster response? Click below to send these details directly to our reception via WhatsApp!
              </p>
              <a
                href={getWhatsAppSubmitUrl(submittedData)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] text-white hover:bg-[#20ba5a] w-full py-3.5 px-4 rounded-xl font-semibold transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#25d366]" />
                <span>Submit and Open WhatsApp</span>
              </a>
              <button
                onClick={handleCloseSuccess}
                className="text-xs text-gray-400 hover:text-gray-600 underline font-medium block mx-auto cursor-pointer"
              >
                Close and return to listing
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

/* Internal RoomCard Component to optimize listing rendering */
interface RoomCardProps {
  key?: string | number;
  room: Room;
  onBook: (room: Room) => void;
}

function RoomCard({ room, onBook }: RoomCardProps) {
  // Simple photo index switcher
  const [photoIdx, setPhotoIdx] = useState(0);

  const getDirectWhatsAppUrl = (roomName: string) => {
    const text = `Hi, I'd like to enquire about a stay at ThaPunchLine. I am interested in the "${roomName}" room category. Is there vacancy?`;
    return `https://wa.me/2347040152691?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
      
      {/* Dynamic Image Wrapper */}
      <div className="relative overflow-hidden h-[260px] sm:h-[300px]">
        {/* Images array transition */}
        <img
          src={room.images[photoIdx]}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-warm-charcoal text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center space-x-1 border border-white/10">
          <span className="text-amber-yellow font-serif text-sm font-semibold">{room.price}</span>
          <span className="text-[10px] text-gray-300">/ night</span>
        </div>

        {/* Room tag badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-warm-charcoal text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
          {room.category === 'hotel' ? 'Premium Room' : 'Serviced Apartment'}
        </div>

        {/* Mini image indicators if multiple */}
        {room.images.length > 1 && (
          <div className="absolute bottom-4 left-4 flex space-x-1.5 z-10">
            {room.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPhotoIdx(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  photoIdx === idx ? 'bg-brand-green w-4' : 'bg-white/50 hover:bg-white'
                }`}
                aria-label={`Show photo ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Description Content */}
      <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-warm-charcoal">
              {room.name}
            </h3>
          </div>
          <p className="text-amber-yellow text-xs font-medium tracking-wide italic">
            "{room.tagline}"
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
            {room.description}
          </p>
        </div>

        {/* Specs breakdown */}
        <div className="grid grid-cols-3 gap-2 bg-soft-cream/60 p-3 rounded-xl border border-gray-100 text-[11px] text-gray-600">
          <div>
            <span className="text-gray-400 block uppercase font-semibold">Area:</span>
            <span className="font-semibold text-warm-charcoal">{room.size}</span>
          </div>
          <div className="border-x border-gray-200/50 px-2">
            <span className="text-gray-400 block uppercase font-semibold">Capacity:</span>
            <span className="font-semibold text-warm-charcoal">{room.capacity}</span>
          </div>
          <div className="pl-2">
            <span className="text-gray-400 block uppercase font-semibold">Bedding:</span>
            <span className="font-semibold text-warm-charcoal leading-tight block truncate" title={room.bedType}>
              {room.bedType}
            </span>
          </div>
        </div>

        {/* Amenities Icons Row */}
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Key In-unit Amenities:</p>
          <div className="flex flex-wrap gap-2.5">
            {room.amenities.map((amenity, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 text-xs py-1 px-2.5 rounded-full border border-gray-200/30"
              >
                {amenity.includes('WiFi') && <Wifi className="w-3 h-3 text-brand-green" />}
                {amenity.includes('Conditioning') && <Wind className="w-3 h-3 text-brand-green" />}
                {amenity.includes('Bathroom') && <Bath className="w-3 h-3 text-brand-green" />}
                {amenity.includes('TV') && <Tv className="w-3 h-3 text-brand-green" />}
                {amenity.includes('Kitchenette') && <ChefHat className="w-3 h-3 text-brand-green" />}
                <span>{amenity}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Form CTA Actions */}
        <div className="pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* WhatsApp Action button */}
          <a
            href={getDirectWhatsAppUrl(room.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all shadow-md text-center flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white text-[#25d366]" />
            <span>Enquire on WhatsApp</span>
          </a>

          {/* Form Action trigger */}
          <button
            onClick={() => onBook(room)}
            className="bg-brand-green hover:bg-brand-green/90 text-white text-xs font-semibold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-brand-green/10 cursor-pointer text-center flex items-center justify-center space-x-1"
          >
            <span>Request Reservation</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
}
