/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Room, Review } from './types';

// Import custom-generated authentic brand images
import executiveBedroom from './assets/images/TPA1.jpg';
import royalBedroom from './assets/images/TPA2.jpg';
import studioKitchenette from './assets/images/TPA8.webp';
import premiumSuite from './assets/images/TPA8.webp';

export const HOTEL_INFO = {
  name: "ThaPunchLine Apartments and Hotels",
  tagline: "Comfort That Hits Different.",
  address: "14 Independence St, Ikeja, 100001, Lagos",
  phone: "07040152691",
  displayPhone: "0704 015 2691",
  intlPhone: "+2347040152691",
  email: "bookings@thapunchline.com",
  whatsappUrl: "https://wa.me/2347040152691",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.390886299105!2d3.3444983!3d6.5982542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93df2df26c59%3A0xe67db5098ffdb93!2s14%20Independence%20St%2C%20Anifowose%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng",
  mapsLink: "https://maps.app.goo.gl/eY53zbVCMsBbHuCy7"
};

export const AMENITIES = [
  { name: "Air Conditioning", icon: "Wind" },
  { name: "Smart Flat-Screen TV", icon: "Tv" },
  { name: "En-suite Bathrooms", icon: "Bath" },
  { name: "High-Speed WiFi", icon: "Wifi" },
  { name: "On-site Restaurant & Bar", icon: "Utensils" },
  { name: "24/7 Power & Security", icon: "ShieldAlert" },
  { name: "Free Secure Parking", icon: "Car" },
  { name: "Complimentary Breakfast", icon: "Coffee" },
  { name: "Kitchenettes (Apartments)", icon: "ChefHat" },
  { name: "24-Hour Front Desk", icon: "ConciergeBell" }
];

export const ROOMS_DATA: Room[] = [
  {
    id: "executive-room",
    name: "Executive Double Room",
    category: "hotel",
    tagline: "Sleek comfort with custom false-ceiling ambient lighting.",
    description: "Indulge in a premium, beautifully lit room featuring en-suite bathroom, modern flat-screen TV, high-speed WiFi, silent AC, and private desk.",
    size: "26 sqm",
    capacity: "2 Guests",
    bedType: "Queen-size Bed",
    price: "₦40,000",
    images: [
      executiveBedroom,
      royalBedroom
    ],
    amenities: ["Air Conditioning", "En-suite Bathroom", "Smart Flat-Screen TV", "High-Speed WiFi", "Work Desk & Chair", "24h Power"],
    longDescription: "The Executive Double Room is engineered for travelers who appreciate precision comfort. Highlighted by our signature golden false-ceiling LED light troughs, the room features a soft queen bed, private ensuite bathroom with strong water pressure, and a quiet split-unit AC alongside a black wall-mounted fan. Perfect for relaxing or working after a busy day in Ikeja.",
    featured: true
  },
  {
    id: "deluxe-royal-room",
    name: "Royal Deluxe Room",
    category: "hotel",
    tagline: "Elegant style featuring custom tufted leather headboard.",
    description: "An elegant, highly private room with fine tufted headboard, spacious wardrobe, 40-inch Smart TV, and silent air conditioning.",
    size: "30 sqm",
    capacity: "2 Guests",
    bedType: "King-size Bed",
    price: "₦45,000",
    images: [
      royalBedroom,
      executiveBedroom
    ],
    amenities: ["Air Conditioning", "En-suite Bathroom", "Smart Flat-Screen TV", "High-Speed WiFi", "Plush Wardrobe", "Breakfast Included"],
    longDescription: "Step into refinement. The Royal Deluxe Room boasts a stunning, tufted velvet headboard framing a double orthopedic mattress. Framed art graces the walls, while a large wardrobe provides plenty of storage space. Outfitted with high-speed internet, air conditioning, and a crisp flatscreen TV, it provides an exquisite retreat in Lagos' commercial hub.",
    featured: true
  },
  {
    id: "serviced-studio-apartment",
    name: "Serviced Studio Apartment",
    category: "apartment",
    tagline: "Fully furnished studio featuring private kitchenette.",
    description: "Your home away from home in Ikeja. Complete with induction stove, refrigerator, microwave, flat-screen TV, and sitting area.",
    size: "38 sqm",
    capacity: "2 Guests",
    bedType: "King-size Bed",
    price: "₦55,000",
    images: [
      studioKitchenette,
      executiveBedroom
    ],
    amenities: ["Private Kitchenette", "Sitting Area", "Air Conditioning", "Refrigerator", "Microwave", "En-suite Bathroom", "High-Speed WiFi"],
    longDescription: "Ideal for business executives and guests seeking absolute flexibility. This fully serviced studio apartment integrates a neat, private kitchenette equipped with an induction cooktop, microwave, refrigerator, and premium dinnerware. A cosy sitting area, separate workspace, and super-fast WiFi ensure you can settle in comfortably for a night or several weeks.",
    featured: true
  },
  {
    id: "one-bedroom-apartment",
    name: "One-Bedroom Premium Apartment",
    category: "apartment",
    tagline: "Expansive layout with separate living room & kitchen.",
    description: "The ultimate long-stay suite featuring a separate, elegant living room, high-end kitchenette, smart TV, and luxurious master bedroom.",
    size: "52 sqm",
    capacity: "3 Guests",
    bedType: "King-size Bed + Sofa",
    price: "₦70,000",
    images: [
      premiumSuite,
      royalBedroom
    ],
    amenities: ["Separate Living Room", "Fully Equipped Kitchenette", "Two Smart TVs", "Air Conditioning", "En-suite Bathroom", "Private Balcony", "Premium Toiletries"],
    longDescription: "Our signature residence offers a full one-bedroom layout with separate lounge and kitchen spaces. Cook your own meals in the fully loaded kitchenette, unwind in the generous living room with comfortable sofas, or retire to the master bedroom's plush king-size bed. Designed to give corporate travelers, couples, and long-stay guests the ultimate premium experience.",
    featured: false
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "r1",
    name: "Olumide Alabi",
    role: "Business Consultant",
    rating: 5,
    comment: "ThaPunchLine hits different! The internet was incredibly fast, making my remote business meetings flawless. The location in Ikeja is super accessible, yet once inside, it's remarkably quiet and safe.",
    date: "July 2026"
  },
  {
    id: "r2",
    name: "Sarah Jenkins",
    role: "International Traveler",
    rating: 5,
    comment: "I stayed in the Serviced Studio for 2 weeks. Having a kitchen with a fridge and microwave was fantastic. The staff is extremely polite, 24-hour power was guaranteed, and the on-site bar has a great vibe!",
    date: "June 2026"
  },
  {
    id: "r3",
    name: "Emeka Okafor",
    role: "Short-stay Guest",
    rating: 5,
    comment: "The Executive room is stunning. The custom ceiling lights are very elegant. Everything works perfectly - AC, hot water, and the bed is so comfortable. Will definitely be coming back.",
    date: "May 2026"
  }
];

export const LANDMARKS = [
  { name: "Murtala Muhammed Intl Airport", dist: "15 Mins Drive", desc: "Fast and direct highway access, avoiding heavy traffic hotspots." },
  { name: "Computer Village", dist: "5 Mins Drive", desc: "Lagos' premier technology and electronics business hub." },
  { name: "Ikeja City Mall", dist: "10 Mins Drive", desc: "World-class shopping, dining, and premium cinema entertainment." },
  { name: "Allen Avenue & Joel Ogunnaike", dist: "8 Mins Drive", desc: "Exclusive commercial lanes, vibrant restaurants, and prime nightlife." }
];
