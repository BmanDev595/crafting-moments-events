'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: "Elegant Wedding Setup",
      category: "weddings",
      description: "Romantic floral arrangements and elegant table settings",
      image: "/images/gallery/wedding-1.jpg",
      tags: ["Floral", "Lighting", "Table Settings"],
    },
    {
      id: 2,
      title: "Corporate Gala Decor",
      category: "corporate",
      description: "Professional and sophisticated corporate event setup",
      image: "/images/gallery/corporate-1.jpg",
      tags: ["Corporate", "Stage Design", "Branding"],
    },
    {
      id: 3,
      title: "Luxury Furniture Setup",
      category: "furniture",
      description: "Premium furniture arrangement for high-end events",
      image: "/images/gallery/furniture-1.jpg",
      tags: ["Chiavari Chairs", "Lounge", "Tables"],
    },
    {
      id: 4,
      title: "Birthday Celebration",
      category: "parties",
      description: "Vibrant and fun decor for birthday celebrations",
      image: "/images/gallery/birthday-1.jpg",
      tags: ["Themed", "Colorful", "Entertainment"],
    },
    {
      id: 5,
      title: "Garden Wedding Magic",
      category: "weddings",
      description: "Charming outdoor wedding with natural elements",
      image: "/images/gallery/wedding-2.jpg",
      tags: ["Garden", "Outdoor", "Fairy Lights"],
    },
    {
      id: 6,
      title: "Product Launch Event",
      category: "corporate",
      description: "Modern setup for product launch events",
      image: "/images/gallery/corporate-2.jpg",
      tags: ["Modern", "Tech", "Display"],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate Events' },
    { id: 'parties', name: 'Parties' },
    { id: 'furniture', name: 'Furniture' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Visual journey through our most stunning events.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button 
              key={category.id} 
              onClick={() => setActiveFilter(category.id)} 
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image Container - FIXED: Removed black overlay that was covering images */}
              <div className="relative overflow-hidden h-80">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Only show overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Hover content - only visible on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center bg-black bg-opacity-50 rounded-lg p-4">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <p className="text-sm">View Details</p>
                  </div>
                </div>
                
                {/* Category badge - always visible */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {item.category}
                </div>
              </div>

              {/* Content below image */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Inspired by Our Gallery?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's create something equally stunning for your next event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Project
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}