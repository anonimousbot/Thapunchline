/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'home' | 'rooms' | 'contact';

export interface Room {
  id: string;
  name: string;
  category: 'hotel' | 'apartment';
  tagline: string;
  description: string;
  size: string;
  capacity: string;
  bedType: string;
  price: string; // e.g. "₦35,000 / night" or similar
  images: string[];
  amenities: string[];
  longDescription: string;
  featured: boolean;
}

export interface EnquiryForm {
  fullName: string;
  email: string;
  phone: string;
  roomType: string; // Room ID or Category name
  checkIn: string;
  checkOut: string;
  guests: number;
  message: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
}
