'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PortfolioPage() {
  // State to track active filter category
  const [activeFilter, setActiveFilter] = useState('all');

  // Extended portfolio data for the dedicated page with filtering
  const portfolioItems = [
    {
      id: 1,
      title: "Elegant Wedding Decor",
      category: "weddings",
      description: "Romantic floral arrangements and elegant table settings for a dream wedding.",
      tags: ["Floral", "Lighting", "Table Settings"],
      image: "/images/portfolio/wedding-1.jpg"
    },
    {
      id: 2,
      title: "Corporate Gala Setup",
      category: "corporate",
      description: "Professional and sophisticated decor for corporate events and galas.",
      tags: ["Corporate", "Stage Design", "Branding"]
    },
    {
      id: 3,
      title: "Premium Furniture Setup",
      category: "furniture",
      description: "Luxury furniture arrangement for high-end events and celebrations.",
      tags: ["Chiavari Chairs", "Lounge", "Tables"]
    },
    {
      id: 4,
      title: "Birthday Celebration",
      category: "parties",
      description: "Vibrant and fun decor for memorable birthday celebrations.",
      tags: ["Themed", "Colorful", "Entertainment"]
    },
    {
      id: 5,
      title: "Intimate Garden Wedding",
      category: "weddings",
      description: "Charming outdoor wedding with natural elements and fairy lights.",
      tags: ["Garden", "Outdoor", "Fairy Lights"]
    },
    {
      id: 6,
      title: "Product Launch Event",
      category: "corporate",
      description: "Modern and innovative setup for product launch events.",
      tags: ["Modern", "Tech", "Display"]
    },
    {
      id: 7,
      title: "Anniversary Dinner",
      category: "parties",
      description: "Intimate and romantic setup for special anniversary celebrations.",
      tags: ["Romantic", "Candlelight", "Fine Dining"]
    },
    {
      id: 8,
      title: "Conference Setup",
      category: "corporate",
      description: "Professional setup for business conferences and meetings.",
      tags: ["Conference", "Business", "AV Setup"]
    },
    {
      id: 9,
      title: "Themed Party Decor",
      category: "parties",
      description: "Creative themed decoration for special occasion parties.",
      tags: ["Themed", "Creative", "Custom"]
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'corporate', name: 'Corporate Events' },
    { id: 'parties', name: 'Parties' },
    { id: 'furniture', name: 'Furniture Setup' }
  ];

  // Filter portfolio items based on active category
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Portfolio Header */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore our complete collection of events with filtering options. 
            From intimate gatherings to grand celebrations, find inspiration for your next event.
          </p>
        </div>
      </div>

      {/* Filter Buttons - MOVED TO PORTFOLIO PAGE */}
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

        {/* Portfolio Grid with Filtering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-2 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Project Image</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Create Your Dream Event?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Inspired by our work? Let's discuss how we can bring the same excellence to your next event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Project
              </Link>
              <Link 
                href="/" 
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}