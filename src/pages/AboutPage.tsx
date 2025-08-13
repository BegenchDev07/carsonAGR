import React from 'react';
import { Users, Target, Award, Globe, Zap, Shield, Lightbulb, Heart } from 'lucide-react';

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

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      bio: "Former aerospace engineer with 15+ years in autonomous systems development."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      bio: "AI and robotics expert, leading our technical innovation and product development."
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of R&D",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      bio: "PhD in Aeronautical Engineering, pioneering next-generation flight control systems."
    },
    {
      name: "James Park",
      role: "VP of Operations",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      bio: "Operations specialist ensuring global manufacturing excellence and quality control."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About SkyElectronica
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              We're pioneering the future of autonomous flight technology, creating innovative 
              electronics and drone solutions that transform industries and improve lives worldwide.
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
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To democratize access to advanced drone technology, empowering businesses and 
                organizations worldwide to achieve their goals through innovative, reliable, 
                and sustainable autonomous flight solutions.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Zap className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the global leader in autonomous drone technology, creating a world where 
                intelligent flight systems seamlessly integrate into daily operations, making 
                industries safer, more efficient, and environmentally sustainable.
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
                  Founded in 2018 by a team of aerospace engineers and electronics specialists, 
                  SkyElectronica emerged from a shared vision to revolutionize how we think about 
                  autonomous flight and electronics technology.
                </p>
                <p>
                  Starting in a small garage in Silicon Valley, our founders recognized the 
                  untapped potential of combining advanced electronics with precision engineering to 
                  create drone systems that could truly transform industries.
                </p>
                <p>
                  Today, we're proud to serve over 85 countries worldwide, with our drones 
                  being used in everything from disaster response and agricultural monitoring 
                  to infrastructure inspection and environmental research.
                </p>
                <p>
                  Our commitment to innovation, quality, and sustainability continues to drive 
                  us forward as we shape the future of autonomous flight technology.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="SkyElectronica facility and drone technology development"
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

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionaries and experts driving AeroDyne's mission forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  width="96"
                  height="96"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
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
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1,200+</div>
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