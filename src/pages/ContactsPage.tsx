import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Languages } from 'lucide-react';

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  const team = [
    {
      name: "Carson",
      role: "CEO & Founder",      
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

  const offices = [
    {
      name: "Carson",
      position: "Cofounder, Director of Trade",
      languages: "English, Chinese",
      phone: "+85261545880",
      email: "chenrucheng@qifeizn.com",
      whatsapp: " wa.link/9sgo22",
    },
    {
      name: "Tim",
      position: "Head Sales in Europe, South America, Middle East",
      languages: "English, Russian",
      phone: "+77479888860",
      email: "timagr@skyelectronicshk.com",
      whatsapp: "https://wa.link/z4a4wh",
    },
    {
      name: "Ali",
      position: "Sales in Middle East",
      languages: "English, Russian, Persian(Farsi), Arabic",
      phone: "+852 62320524",
      email: null,
      whatsapp: "https://wa.link/057ddc"
    },
    {
      name: "Jack",
      languages: "English, Chinese",
      position: "International Sales",
      phone: "+852 6235 2890",
      email: "smith@skyelectronicshk.com",
      whatsapp: "https://wa.link/htnjz9"
    },
    {
      name: "Diamond",
      languages: "English, Chinese",
      position: "International Sales",
      phone: "+85261574997",
      email: "diamond@skyelectronicshk.com",
      whatsapp: null
    },
    {
      name: "Ray",
      languages: "English, Chinese",
      position: "International Sales",
      phone: null,
      email: "ray@skyelectronicshk.com",
      whatsapp: null
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your operations with cutting-edge drone technology? 
              Our experts are here to help you find the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="media">Media & Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}            
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to serve you with local expertise and global reach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.name}</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-id-card-lanyard-icon lucide-id-card-lanyard h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0"><path d="M13.5 8h-3"/><path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3"/><path d="M16.899 22A5 5 0 0 0 7.1 22"/><path d="m9 2 3 6"/><circle cx="12" cy="15" r="3"/></svg>
                    {/* <MapPin className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" /> */}
                    <span>{office.position}</span>
                  </div>
                  {
                    office.languages !== null
                    &&
                    <div className="flex items-start">
                      <Languages className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{office.languages}</span>
                    </div>
                  }
                  {
                    office.phone !== null
                    &&
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                  }
                  {
                    office.email !== null
                    &&
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>{office.email}</span>
                    </div>
                  }
                  {
                    office.whatsapp !== null
                    &&
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <a className='underline' href={office.whatsapp}>Chat</a>
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      
    </div>
  );
};

export default ContactsPage;