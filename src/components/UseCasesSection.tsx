import React from 'react';
import { Camera, Shield, Truck, Zap, MapPin, Wrench } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Camera,
      title: "Aerial Photography & Cinematography",
      description: "Professional-grade imaging solutions for film, real estate, and marketing with 4K+ resolution capabilities.",
      features: ["4K/8K Video Recording", "Gimbal Stabilization", "RAW Photo Capture"],
      size: "large", // Takes 2 columns
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
    },
    {
      icon: Shield,
      title: "Security & Surveillance",
      description: "Advanced monitoring systems for perimeter security, crowd control, and emergency response operations.",
      features: ["Night Vision", "Real-time Streaming", "AI Object Detection"],
      size: "medium",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      icon: Truck,
      title: "Delivery & Logistics",
      description: "Autonomous delivery solutions for last-mile logistics, medical supplies, and emergency cargo transport.",
      features: ["Payload up to 10kg", "GPS Navigation", "Weather Resistant"],
      size: "medium",
      image: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      icon: Zap,
      title: "Infrastructure Inspection",
      description: "Detailed inspection of power lines, bridges, and industrial facilities with precision sensors.",
      features: ["Thermal Imaging", "LiDAR Mapping", "Defect Detection"],
      size: "large",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
    },
    {
      icon: MapPin,
      title: "Mapping & Surveying",
      description: "High-precision topographical mapping and land surveying for construction and agriculture.",
      features: ["Centimeter Accuracy", "3D Modeling", "GIS Integration"],
      size: "medium",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    },
    {
      icon: Wrench,
      title: "Search & Rescue",
      description: "Life-saving operations in challenging terrains with thermal sensors and communication systems.",
      features: ["Emergency Beacon", "Extended Flight Time", "All-Weather Operation"],
      size: "medium",
      image: "https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
    }
  ];

  return (
    <section className="py-24 bg-gray-50" aria-labelledby="use-cases-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="use-cases-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Versatile Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our drone solutions are engineered to excel across diverse industries, 
            delivering precision, reliability, and innovation where it matters most.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                useCase.size === 'large' 
                  ? 'lg:col-span-2 lg:row-span-2' 
                  : useCase.size === 'medium' 
                  ? 'lg:col-span-1 lg:row-span-1' 
                  : 'lg:col-span-1 lg:row-span-1'
              } ${useCase.size === 'large' ? 'min-h-[400px]' : 'min-h-[300px]'}`}
              role="article"
              aria-labelledby={`use-case-${index}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  loading="lazy"
                  decoding="async"
                  width={useCase.size === 'large' ? "600" : "400"}
                  height={useCase.size === 'large' ? "400" : "300"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <div className="bg-white/10 backdrop-blur-sm w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <useCase.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 id={`use-case-${index}`} className={`font-bold text-white mb-3 ${
                  useCase.size === 'large' ? 'text-2xl md:text-3xl' : 'text-xl'
                }`}>
                  {useCase.title}
                </h3>
                
                <p className="text-gray-200 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {useCase.description}
                </p>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;