'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define types for better TypeScript support
interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
  tags: string[];
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [isMobile, setIsMobile] = useState(false);
  
  const touchRef = useRef<{ [key: number]: number | null }>({});

  // Check if mobile on component mount (client-side only)
  useEffect(() => {
    setIsMobile('ontouchstart' in window);
  }, []);

  // Enhanced gallery items with multiple images for each event
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Elegant Wedding Setup",
      category: "weddings",
      description: "Romantic floral arrangements and elegant table settings",
      images: [
        "/images/gallery/wedding-1.jpg",
        "/images/gallery/wedding-2.jpg",
        "/images/gallery/corporate-1.jpg"
      ],
      tags: ["Floral", "Lighting", "Table Settings"],
    },
    {
      id: 2,
      title: "Corporate Gala Decor",
      category: "corporate",
      description: "Professional and sophisticated corporate event setup",
      images: [
        "/images/gallery/corporate-1.jpg",
        "/images/gallery/corporate-2.jpg",
        "/images/gallery/wedding-1.jpg"
      ],
      tags: ["Corporate", "Stage Design", "Branding"],
    },
    {
      id: 3,
      title: "Luxury Furniture Setup",
      category: "furniture",
      description: "Premium furniture arrangement for high-end events",
      images: [
        "/images/gallery/furniture-1.jpg",
        "/images/gallery/corporate-2.jpg"
      ],
      tags: ["Chiavari Chairs", "Lounge", "Tables"],
    },
    {
      id: 4,
      title: "Birthday Celebration",
      category: "parties",
      description: "Vibrant and fun decor for birthday celebrations",
      images: [
        "/images/gallery/birthday-1.jpg",
        "/images/gallery/wedding-2.jpg"
      ],
      tags: ["Themed", "Colorful", "Entertainment"],
    },
    {
      id: 5,
      title: "Garden Wedding Magic",
      category: "weddings",
      description: "Charming outdoor wedding with natural elements",
      images: [
        "/images/gallery/wedding-2.jpg",
        "/images/gallery/wedding-1.jpg",
        "/images/gallery/birthday-1.jpg"
      ],
      tags: ["Garden", "Outdoor", "Fairy Lights"],
    },
    {
      id: 6,
      title: "Product Launch Event",
      category: "corporate",
      description: "Modern setup for product launch events",
      images: [
        "/images/gallery/corporate-2.jpg",
        "/images/gallery/corporate-1.jpg",
        "/images/gallery/furniture-1.jpg"
      ],
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

  // Navigation functions for mini slideshow
  const nextImage = (itemId: number, itemImages: string[], e?: React.MouseEvent) => {
    e?.stopPropagation();
    const currentIndex = currentImageIndex[itemId] || 0;
    const nextIndex = (currentIndex + 1) % itemImages.length;
    setCurrentImageIndex(prev => ({
      ...prev,
      [itemId]: nextIndex
    }));
  };

  const prevImage = (itemId: number, itemImages: string[], e?: React.MouseEvent) => {
    e?.stopPropagation();
    const currentIndex = currentImageIndex[itemId] || 0;
    const prevIndex = (currentIndex - 1 + itemImages.length) % itemImages.length;
    setCurrentImageIndex(prev => ({
      ...prev,
      [itemId]: prevIndex
    }));
  };

  const getCurrentImage = (itemId: number, itemImages: string[]): string => {
    const index = currentImageIndex[itemId] || 0;
    return itemImages[index];
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (itemId: number, e: React.TouchEvent) => {
    setHoveredItem(itemId);
    touchRef.current[itemId] = e.touches[0].clientX;
  };

  const handleTouchMove = (itemId: number, e: React.TouchEvent) => {
    if (!touchRef.current[itemId]) return;
    const touchEnd = e.touches[0].clientX;
    const distance = touchRef.current[itemId]! - touchEnd;
    
    // Swipe detection
    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextImage(itemId, galleryItems.find(item => item.id === itemId)?.images || []);
      } else {
        prevImage(itemId, galleryItems.find(item => item.id === itemId)?.images || []);
      }
      touchRef.current[itemId] = null;
    }
  };

  const handleTouchEnd = (itemId: number) => {
    touchRef.current[itemId] = null;
  };

  // Click handlers for mobile tap navigation
  const handleImageClick = (itemId: number, itemImages: string[], e: React.MouseEvent) => {
    // Only navigate on mobile (touch devices)
    if (isMobile) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      
      // If click on left third, go previous
      if (clickX < width / 3) {
        prevImage(itemId, itemImages);
      } 
      // If click on right third, go next
      else if (clickX > (width * 2) / 3) {
        nextImage(itemId, itemImages);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Visual journey through our most stunning events. {isMobile ? 'Swipe or tap sides to navigate' : 'Hover to see more photos!'}
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

        {/* Mobile Instructions - Only show after component mounts */}
        {isMobile && (
          <div className="text-center mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4 mx-auto max-w-md">
            <p className="text-blue-700 text-sm font-medium">
              💡 <strong>Mobile Tip:</strong> Swipe left/right or tap sides to navigate photos
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              onMouseEnter={() => {
                setHoveredItem(item.id);
                setCurrentImageIndex(prev => ({
                  ...prev,
                  [item.id]: 0 // Reset to first image when hovering
                }));
              }}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Container with Mini Slideshow */}
              <div 
                className="relative overflow-hidden h-80 cursor-pointer"
                onClick={(e) => handleImageClick(item.id, item.images, e)}
                onTouchStart={(e) => handleTouchStart(item.id, e)}
                onTouchMove={(e) => handleTouchMove(item.id, e)}
                onTouchEnd={() => handleTouchEnd(item.id)}
              >
                <Image
                  src={getCurrentImage(item.id, item.images)}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Desktop Hover Overlay with Navigation Arrows */}
                {hoveredItem === item.id && item.images.length > 1 && !isMobile && (
                  <>
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300"></div>
                    
                    {/* Left Arrow - Desktop only */}
                    <button
                      onClick={(e) => prevImage(item.id, item.images, e)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 hover:scale-110"
                    >
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Right Arrow - Desktop only */}
                    <button
                      onClick={(e) => nextImage(item.id, item.images, e)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 hover:scale-110"
                    >
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* View More Hint - Desktop only 
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                      Click arrows to view more
                    </div>
                    */}
                  </>
                )}

                {/* Mobile Navigation Overlay - Always show on mobile when multiple images */}
                {item.images.length > 1 && isMobile && (
                  <>
                    {/* Left tap zone for mobile */}
                    <div className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer z-10"></div>
                    
                    {/* Right tap zone for mobile */}
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer z-10"></div>
                    
                    {/* Mobile navigation hints */}
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                      ← Tap sides →
                    </div>
                  </>
                )}

                {/* Image Counter - Show on both desktop and mobile */}
                {item.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {((currentImageIndex[item.id] || 0) + 1)} / {item.images.length}
                  </div>
                )}

                {/* Single image indicator */}
                {hoveredItem === item.id && item.images.length === 1 && !isMobile && (
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                )}

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

        {/* CTA Section */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}