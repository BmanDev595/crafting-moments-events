'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Testimonials() {
  // State to track current testimonial for carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data - replace with your actual client testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Johnson",
      event: "Wedding Celebration",
      text: "Maru Events transformed our wedding vision into a reality beyond our dreams! The attention to detail and creative decor made our special day absolutely magical. Our guests are still talking about the stunning setup!",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      id: 2,
      name: "Tech Innovations Inc.",
      event: "Corporate Product Launch",
      text: "Professional, efficient, and incredibly creative! The furniture setup and decor for our product launch exceeded all expectations. Maru Events handled everything seamlessly while we focused on our guests.",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      id: 3,
      name: "Jessica Martinez",
      event: "Birthday Gala",
      text: "From the initial consultation to the final cleanup, the team was exceptional. The furniture hire was top-quality and the decor transformed our venue completely. Worth every penny!",
      rating: 5,
      image: "/api/placeholder/100/100"
    },
    {
      id: 4,
      name: "Robert & Emily Chen",
      event: "Anniversary Party",
      text: "Your Wish Is Our Command - and they delivered! The team listened to our ideas and brought them to life with incredible creativity. The floral arrangements and lighting were breathtaking.",
      rating: 5,
      image: "/api/placeholder/100/100"
    }
  ];

  // Function to navigate to next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Function to navigate to previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Function to go to specific testimonial
  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our happy clients have to say about their experience with Maru Events.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 shadow-lg">
            {/* Stars Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <svg 
                  key={i}
                  className="w-6 h-6 text-yellow-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-2xl lg:text-3xl text-gray-800 text-center font-medium leading-relaxed mb-8">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Client Info */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                {/* Client Avatar */}
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <p className="text-xl font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-purple-600 font-medium">
                    {testimonials[currentTestimonial].event}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center space-x-4 mb-16">
          {/* Previous Button */}
          <button 
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 hover:text-purple-600"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-purple-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 hover:text-purple-600"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "100+", label: "Events Completed" },
            { number: "4.9/5", label: "Client Rating" },
            { number: "95%", label: "Repeat Clients" },
            { number: "24/7", label: "Support" }
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {metric.number}
              </div>
              <div className="text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* UPDATED CTA Section - Now links to Contact Page */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto text-lg">
              Join our family of satisfied clients. Let's discuss your vision and create something extraordinary together.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Project Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}