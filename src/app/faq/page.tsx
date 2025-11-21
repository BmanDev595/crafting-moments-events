'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "How far in advance should I book my event?",
      answer: "We recommend booking at least 3-6 months in advance for weddings and large events, and 1-2 months for smaller gatherings. However, we understand that sometimes events come up quickly - feel free to contact us even for last-minute events and we'll do our best to accommodate you!"
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve the Brits, Johannesburg, Hartbeesport, and Pretoria. We're also available for events in surrounding areas - additional travel fees may apply for locations outside our primary service area. Contact us with your venue location and we'll confirm availability."
    },
    {
      question: "Do you offer custom packages?",
      answer: "Absolutely! 'Your Wish Is Our Command' means we tailor our services to your specific needs. We offer fully customizable packages for decor, furniture hire, and full event planning. During our free consultation, we'll discuss your vision, budget, and requirements to create a package that's perfect for your event."
    },
    {
      question: "What's included in your furniture hire service?",
      answer: "Our furniture hire includes premium Chiavari chairs, banquet tables, lounge furniture sets, bar setups, and specialty pieces. All furniture is delivered, set up, and collected by our team. We ensure everything is clean, well-maintained, and arranged according to your venue layout."
    },
    {
      question: "Can I see examples of your previous work?",
      answer: "Yes! Browse our Gallery section to see photos from our recent events including weddings, corporate functions, and parties. Each project showcases our attention to detail and creative approach to event design."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand that plans can change. For cancellations made more than 30 days before the event, we offer a full refund of your deposit. Between 15-30 days, 50% of the deposit is refundable. Within 14 days, the deposit is non-refundable but can be applied to a future event within 6 months."
    },
    {
      question: "Do you work with other vendors?",
      answer: "Yes, we have excellent relationships with local caterers, photographers, florists, and entertainment providers. As part of our full event planning service, we can coordinate all vendors for you. For decor-only services, we're happy to work alongside your chosen vendors."
    },
    {
      question: "What makes Maru Events different from other event planners?",
      answer: "Our philosophy 'Your Wish Is Our Command' means we're truly dedicated to bringing your vision to life. We combine creative design with meticulous execution, offer premium quality furniture and decor, and provide personalized service from initial consultation to event completion. Our attention to detail and commitment to excellence sets us apart."
    },
    {
      question: "Do you provide decorations and props?",
      answer: "Yes! We offer a wide range of decorations including centerpieces, backdrops, lighting, floral arrangements, and thematic props. Our design team will work with you to create the perfect ambiance for your event, whether you're going for elegant, modern, rustic, or themed."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is transparent and tailored to each event. We offer package pricing for common event types and custom quotes for unique requirements. The cost depends on factors like event size, duration, decor complexity, and furniture needs. Contact us for a free, no-obligation quote specific to your event."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* FAQ Header */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">FAQ</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Find answers to common questions about our event services. 
            Can't find what you're looking for? We're here to help!
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <svg 
                  className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Answer - Animated */}
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) 
                    ? 'max-h-96 pb-6 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don't hesitate to reach out! We're here to help you create the perfect event. 
              Contact us directly and we'll get back to you within 2 hours during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Us
              </Link>
              <a 
                href="tel:+2711710610" 
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Call Now: +27 (71) 171-0610
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}