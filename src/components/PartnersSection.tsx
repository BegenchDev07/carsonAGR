import React, { useEffect, useState } from 'react';

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    { name: "DJI", logo: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1" },
    { name: "Autel", logo: "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1" },
    { name: "Parrot", logo: "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1" },
    { name: "Skydio", logo: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1" },
    { name: "Yuneec", logo: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1" },
    { name: "Flyability", logo: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1" },
    { name: "senseFly", logo: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1" },
    { name: "Wingtra", logo: "https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, partners.length - 3));
    }, 3000);
    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="partners-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="partners-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted Partners
          </h2>
        </div>

        {/* Partners Carousel */}
        <div className="relative overflow-hidden" role="region" aria-label="Partner companies carousel">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/4 px-4"
                role="group"
                aria-label={`Partner: ${partner.name}`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                      <span className="text-2xl font-bold text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {partner.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;