import React from 'react';
import { Users, Factory, Award, Globe, Forklift, Shield, Lightbulb, Heart } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing the boundaries of drone technology with cutting-edge research and development."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Building robust, dependable systems that perform flawlessly in critical missions."
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Committed to environmentally responsible practices and sustainable technology solutions."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating positive change worldwide through accessible and transformative drone technology."
    }
  ];


  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About SkyElectronics
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              We are a general trade company that sells Autel, DJI and has exclusive rights for AGR drones distribution. 
              We provide manufacturer price and innovative solutions for UAV exploitation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Factory className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Fulfilment and Production Capabilities</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                We can deliver up to 10.000 DJI and Autel drones a month. Same for FPV, and small drones from AGR. Also production for VTOLs IS  about 100 UAVs a month  
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Forklift className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Logistics Capability and Delivery Time</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Any order can be shipped within 45 days. 45 days include Manufacture, licence approval and logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Skyelectronics LTD was founded in 2025 with a clear mission — to connect businesses and professionals with cutting-edge UAV technology at unmatched value. 
                  Within a short time, we have built strong partnerships with some of the largest and most respected drone manufacturers in China. 
                  This allows us to offer our clients direct manufacturer-level pricing, ensuring maximum cost efficiency without compromising on quality.
                </p>
                <p>
                  With our streamlined logistics network, we guarantee fast and reliable delivery to virtually any region worldwide. 
                  Every product is backed by strict quality assurance standards, giving our customers full confidence in the durability, performance, and innovation of the UAVs we supply.
                </p>
                <p>
                  At Skyelectronics LTD, we are more than a supplier — we are a trusted partner in helping industries, businesses, and innovators leverage the power of aerial technology.
                </p>                
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="SkyElectronics facility and drone technology development"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50,000+</div>
              <div className="text-blue-200">Drones Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">85+</div>
              <div className="text-blue-200">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">200</div>
              <div className="text-blue-200">Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.8%</div>
              <div className="text-blue-200">Reliability Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;