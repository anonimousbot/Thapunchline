/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA } from '../data';
import { ContactForm } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: 'Booking Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: Partial<Record<keyof ContactForm, string>> = {};
    if (!formData.name.trim()) tempErrors.name = 'Please provide your name';
    if (!formData.phone.trim()) tempErrors.phone = 'Please provide your phone or WhatsApp number';
    if (!formData.email.trim()) {
      tempErrors.email = 'Please provide your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email structure';
    }
    if (!formData.message.trim()) tempErrors.message = 'Please enter a message';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate submission to server/email
    setIsSuccess(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: ''
    });
    setIsSuccess(false);
  };

  // Pre-filled quick WhatsApp query
  const quickWhatsAppMessage = "Hi ThaPunchLine, I'm checking availability for a room. Could you provide your rates?";
  const whatsappUrl = `https://wa.me/2347040152691?text=${encodeURIComponent(quickWhatsAppMessage)}`;

  return (
    <div id="contact-page-root" className="min-h-screen bg-soft-cream pt-24 pb-16">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-brand-green text-xs font-semibold uppercase tracking-[0.2em] block">
            GET IN TOUCH WITH US
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-warm-charcoal">
            Contact & Location
          </h1>
          <p className="text-sm sm:text-base text-gray-500 font-light">
            We are always here to assist. Visit us at our property in Ikeja or drop us an instant message.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Coordinates & Map */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Card: Contact Coordinates */}
          <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="font-serif text-2xl font-bold text-warm-charcoal">
              Property Desk
            </h2>

            <div className="space-y-5">
              {/* Address Detail */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-sm">
                  <p className="font-bold text-gray-400 uppercase tracking-wider text-[10px]">Physical Address</p>
                  <p className="font-medium text-warm-charcoal leading-relaxed">
                    14 Independence St, Ikeja, 100001, Lagos, Nigeria
                  </p>
                  <a
                    href={HOTEL_INFO.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-amber-yellow font-semibold hover:underline mt-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Phone Detail */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-sm">
                  <p className="font-bold text-gray-400 uppercase tracking-wider text-[10px]">Direct Call Desk</p>
                  <p className="font-medium text-warm-charcoal leading-relaxed">
                    <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-brand-green transition-colors font-mono">
                      {HOTEL_INFO.displayPhone}
                    </a>
                  </p>
                  <p className="text-xs text-gray-400">Click to call directly on mobile devices</p>
                </div>
              </div>

              {/* Email Detail */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-sm">
                  <p className="font-bold text-gray-400 uppercase tracking-wider text-[10px]">Email Support</p>
                  <p className="font-medium text-warm-charcoal leading-relaxed">
                    <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-brand-green transition-colors">
                      {HOTEL_INFO.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours Detail */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-sm">
                  <p className="font-bold text-gray-400 uppercase tracking-wider text-[10px]">Lobby Desk hours</p>
                  <p className="font-medium text-warm-charcoal leading-relaxed">
                    Reception open 24 Hours / 7 Days
                  </p>
                  <p className="text-xs text-gray-400">Security personnel always on standby</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Block */}
            <div className="pt-6 border-t border-gray-100 space-y-3.5">
              <p className="text-xs text-gray-500 font-light">
                Prefer instant messaging? Reach our front desk directly on WhatsApp for immediate availability checks.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25d366] hover:bg-[#20ba5a] text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-sm hover:shadow-md transition-all text-center flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#25d366]" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Card: Map Embed */}
          <div className="bg-white rounded-3xl border border-gray-200/80 overflow-hidden shadow-sm h-[320px] relative">
            <iframe
              src={HOTEL_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ThaPunchLine Google Map Location"
              className="absolute inset-0 w-full h-full"
            />
          </div>

        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-sm h-full flex flex-col justify-between">
            
            {!isSuccess ? (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-warm-charcoal">
                    Send a Message
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Have questions about stay packages, events, or long-term lease discounts?
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g., Adaobi Uzor"
                        className={`w-full bg-soft-cream/40 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-green transition-all`}
                      />
                      {errors.name && <p className="text-[11px] text-red-500">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g., 07040152691"
                        className={`w-full bg-soft-cream/40 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-green transition-all`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-500">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g., guest@email.com"
                        className={`w-full bg-soft-cream/40 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-green transition-all`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-soft-cream/40 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-green transition-all cursor-pointer"
                      >
                        <option value="Booking Enquiry">Booking Enquiry</option>
                        <option value="Long Stay Lease">Long-term Stay Lease</option>
                        <option value="On-site Restaurant & Bar">Restaurant & Bar Enquiry</option>
                        <option value="General Questions">General Questions</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-700">Detailed Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Write your details or special requirements here..."
                      className={`w-full bg-soft-cream/40 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-green transition-all`}
                    />
                    {errors.message && <p className="text-[11px] text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-brand-green/15 hover:scale-[1.01] text-center flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              /* Success visual states */
              <div className="text-center py-12 px-4 space-y-6 flex-grow flex flex-col justify-center items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-warm-charcoal">Message Sent Successfully!</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                    Thank you, <strong className="font-semibold text-warm-charcoal">{formData.name}</strong>. Your enquiry regarding "<span className="italic">{formData.subject}</span>" has been registered with our operations desk.
                  </p>
                </div>

                <div className="bg-soft-cream p-4 rounded-xl text-left text-xs max-w-md w-full space-y-1 border border-gray-150">
                  <p><span className="font-bold text-gray-400">Email:</span> {formData.email}</p>
                  <p><span className="font-bold text-gray-400">Phone:</span> {formData.phone}</p>
                  <p className="pt-2 border-t border-gray-200 mt-2 text-gray-600 italic">"{formData.message}"</p>
                </div>

                <div className="space-y-3 w-full max-w-sm">
                  <a
                    href={`https://wa.me/2347040152691?text=${encodeURIComponent(`Hi ThaPunchLine, I just submitted an email inquiry. My name is ${formData.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-sm text-center flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white text-[#25d366]" />
                    <span>Follow up on WhatsApp</span>
                  </a>
                  <button
                    onClick={handleResetForm}
                    className="text-xs text-gray-400 hover:text-gray-600 underline font-semibold block mx-auto cursor-pointer"
                  >
                    Submit another message
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
