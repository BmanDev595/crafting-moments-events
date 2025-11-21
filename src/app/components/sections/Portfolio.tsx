import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  const featuredPortfolioItems = [
    {
      id: 1,
      title: "Elegant Wedding Decor",
      category: "weddings",
      description: "Romantic floral arrangements and elegant table settings for a dream wedding.",
      image: "/images/portfolio/wedding-1.jpg",
      tags: ["Floral", "Lighting", "Table Settings"],
    },
    {
      id: 2,
      title: "Corporate Gala Setup",
      category: "corporate",
      description: "Professional and sophisticated decor for corporate events and galas.",
      image: "/images/portfolio/corporate-1.jpg",
      tags: ["Corporate", "Stage Design", "Branding"],
    },
    {
      id: 3,
      title: "Premium Furniture Setup",
      category: "furniture",
      description: "Luxury furniture arrangement for high-end events and celebrations.",
      image: "/images/portfolio/furniture-1.jpg",
      tags: ["Chiavari Chairs", "Lounge", "Tables"],
    },
    {
      id: 4,
      title: "Birthday Celebration",
      category: "parties",
      description: "Vibrant and fun decor for memorable birthday celebrations.",
      image: "/images/portfolio/birthday-1.jpg",
      tags: ["Themed", "Colorful", "Entertainment"],
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Latest Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into our recent events. Each project showcases our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredPortfolioItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm opacity-90">Featured Project</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to See More of Our Work?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore our complete portfolio featuring dozens of successful events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/portfolio" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">View Full Portfolio</Link>
              <Link href="/gallery" className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">Browse Gallery</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}