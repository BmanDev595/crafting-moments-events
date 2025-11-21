import Link from 'next/link';

export default function ServicesPage() {
  // Detailed services data
  const detailedServices = [
    {
      id: 1,
      title: "Event Decor",
      description: "Transform any venue into a magical space with our creative decor solutions. We specialize in creating unforgettable atmospheres that wow your guests.",
      fullDescription: "Our event decor service is all about bringing your vision to life. Whether you're planning an intimate gathering or a grand celebration, our team of creative designers will work with you to create a stunning environment that reflects your style and personality. We handle everything from concept development to installation, ensuring every detail is perfect.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      features: [
        "Wedding Decor & Styling",
        "Corporate Event Theming",
        "Birthday Party Decorations",
        "Floral Arrangements & Centerpieces",
        "Lighting Design & Installation",
        "Backdrop & Stage Design",
        "Table Settings & Linens",
        "Venue Transformation"
      ],
      process: [
        "Initial Consultation & Concept Development",
        "Mood Board Creation",
        "Detailed Proposal & Quotation",
        "Material Sourcing & Preparation",
        "On-site Installation",
        "Event Day Coordination",
        "Post-event Cleanup"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Furniture Hire",
      description: "Premium furniture selection for any occasion. From elegant chairs to stylish tables, we have everything to complement your event.",
      fullDescription: "Our furniture hire service offers a wide range of high-quality furniture pieces to suit any event style. From classic Chiavari chairs to modern lounge furniture, we provide comfortable and stylish seating solutions that enhance your venue. All furniture is meticulously maintained and delivered ready for your event.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
        </svg>
      ),
      features: [
        "Chiavari Chairs & Cushions",
        "Banquet Tables & Rounds",
        "Lounge Furniture Sets",
        "Bar Stools & Counters",
        "Dining Sets",
        "Ottomans & Side Tables",
        "Dance Floor Rental",
        "Delivery & Setup Service"
      ],
      process: [
        "Furniture Selection Consultation",
        "Venue Measurement & Planning",
        "Delivery Coordination",
        "Professional Setup",
        "Quality Check on Site",
        "Post-event Collection",
        "Cleaning & Maintenance"
      ],
      color: "from-blue-500 to-teal-500"
    },
    {
      id: 3,
      title: "Full Event Planning",
      description: "End-to-end event management. We handle every detail so you can enjoy your special day stress-free.",
      fullDescription: "Our full event planning service takes the stress out of organizing your special occasion. We become your dedicated event partners, managing every aspect from initial concept to final execution. With our extensive network of vendors and attention to detail, we ensure your event runs smoothly and exceeds expectations.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      features: [
        "Complete Event Coordination",
        "Vendor Management & Negotiation",
        "Budget Planning & Management",
        "Timeline Development",
        "Guest List Management",
        "Catering Coordination",
        "Entertainment Booking",
        "Day-of Event Management"
      ],
      process: [
        "Initial Vision & Goal Setting",
        "Budget Development & Approval",
        "Vendor Selection & Contracting",
        "Detailed Timeline Creation",
        "Regular Progress Meetings",
        "Final Walkthrough & Rehearsal",
        "Full Day Event Management",
        "Post-event Follow-up"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Services Header */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive event solutions tailored to make your occasion unforgettable. 
            Discover how we can bring your vision to life with our expert services.
          </p>
        </div>
      </div>

      {/* Detailed Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {detailedServices.map((service, index) => (
          <div key={service.id} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:flex items-start gap-12">
              {/* Service Icon & Header */}
              <div className="lg:w-1/3 mb-8 lg:mb-0">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                  {service.icon}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Our Process</h4>
                  <ul className="space-y-2">
                    {service.process.map((step, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service Details */}
              <div className="lg:w-2/3">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Overview</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">What We Offer</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Perfect For</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Weddings & Receptions</li>
                        <li>• Corporate Events</li>
                        <li>• Birthday Celebrations</li>
                        <li>• Anniversary Parties</li>
                        <li>• Product Launches</li>
                        <li>• Galas & Fundraisers</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Get Quote for {service.title}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Package?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
              Every event is unique. Let us create a custom package that perfectly matches your vision, budget, and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Custom Quote
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
