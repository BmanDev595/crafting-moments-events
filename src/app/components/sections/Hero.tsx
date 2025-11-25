'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-pink-50 py-20 lg:py-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Vision Into Reality</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Stunning event decor, premium furniture hire, and flawless execution. 
              Your dream event, delivered beyond expectations.
            </p>
            
            <div className="mb-8">
              <p className="text-lg font-semibold text-purple-700 italic">"Your Wish Is Our Command"</p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/gallery" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center">View Our Work</Link>
              <Link href="/contact" className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 text-center">Get Free Quote</Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 bg-purple-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-pink-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white"></div>
                </div>
                <span>100+ Events Completed</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span>3.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
              <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden">
                <Image
                  src="/images/hero/hero-main.jpg" // Your hero image
                  alt="Maru Events - Beautiful Event Setup"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-100 rounded-full opacity-80"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-100 rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}