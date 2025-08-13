import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart City Surveillance Network",
      location: "Dubai, UAE",
      date: "2024",
      description: "Deployed 500+ autonomous drones for comprehensive city-wide monitoring and traffic management.",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      tags: ["Security", "AI", "Urban Planning"]
    },
    {
      title: "Agricultural Precision Farming",
      location: "California, USA",
      date: "2024",
      description: "Revolutionized crop monitoring across 10,000 acres with AI-powered agricultural drones.",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      tags: ["Agriculture", "IoT", "Sustainability"]
    },
    {
      title: "Disaster Response Initiative",
      location: "Tokyo, Japan",
      date: "2023",
      description: "Emergency response fleet providing real-time disaster assessment and rescue coordination.",
      image: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      tags: ["Emergency", "Rescue", "Government"]
    },
    {
      title: "Offshore Wind Farm Inspection",
      location: "North Sea, Europe",
      date: "2023",
      description: "Automated inspection system for 200+ wind turbines using advanced sensor technology.",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      tags: ["Energy", "Inspection", "Renewable"]
    },
    {
      title: "Arctic Research Expedition",
      location: "Greenland",
      date: "2023",
      description: "Climate monitoring drones collecting critical data on ice sheet changes and wildlife patterns.",
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      tags: ["Research", "Climate", "Arctic"]
    },
    {
      title: "Forest Fire Prevention",
      location: "Australia",
      date: "2024",
      description: "AI-powered early detection system preventing catastrophic wildfires across national parks.",
      image: "https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      tags: ["Prevention", "AI", "Environment"]
    }
  ];

  return (
    <section className="py-24 bg-white" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our cutting-edge drone technology is transforming industries 
            and solving complex challenges around the world.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[800px]">
          {/* Large card - Top Left */}
          <article className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-3xl group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-gray-900" aria-labelledby="project-0">
            <div className="absolute inset-0">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>

            <div className="absolute top-6 right-6 z-10">
              <div className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 group-hover:scale-110" aria-label="View project details">
                <ExternalLink className="h-5 w-5" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 id="project-0" className="text-3xl font-bold text-white mb-4 leading-tight">
                {projects[0].title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {/* {projects[0].description} */}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {projects[0].tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300" />
          </article>

          {/* Medium card - Top Right */}
          <article className="lg:col-span-2 lg:row-span-1 relative overflow-hidden rounded-3xl group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-gray-900" aria-labelledby="project-1">
            <div className="absolute inset-0">
              <img
                src={projects[1].image}
                alt={projects[1].title}
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>

            <div className="absolute top-6 right-6 z-10">
              <div className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 group-hover:scale-110" aria-label="View project details">
                <ExternalLink className="h-5 w-5" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 id="project-1" className="text-xl font-bold text-white mb-3 leading-tight">
                {projects[1].title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {projects[1].tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300" />
          </article>

          {/* Small card - Middle Right */}
          <article className="lg:col-span-1 lg:row-span-1 relative overflow-hidden rounded-3xl group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-gray-900" aria-labelledby="project-2">
            <div className="absolute inset-0">
              <img
                src={projects[2].image}
                alt={projects[2].title}
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>

            <div className="absolute top-4 right-4 z-10">
              <div className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 group-hover:scale-110" aria-label="View project details">
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 id="project-2" className="text-lg font-bold text-white mb-2 leading-tight">
                {projects[2].title}
              </h3>
              
              <div className="flex flex-wrap gap-1">
                {projects[2].tags.slice(0, 2).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300" />
          </article>

          {/* Medium card - Bottom Right */}
          <article className="lg:col-span-1 lg:row-span-1 relative overflow-hidden rounded-3xl group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-gray-900" aria-labelledby="project-3">
            <div className="absolute inset-0">
              <img
                src={projects[3].image}
                alt={projects[3].title}
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>

            <div className="absolute top-4 right-4 z-10">
              <div className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 group-hover:scale-110" aria-label="View project details">
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 id="project-3" className="text-lg font-bold text-white mb-2 leading-tight">
                {projects[3].title}
              </h3>
              
              <div className="flex flex-wrap gap-1">
                {projects[3].tags.slice(0, 2).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300" />
          </article>

          {/* Bottom row - Two medium cards */}
          <article className="lg:col-span-2 lg:row-span-1 relative overflow-hidden rounded-3xl group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-gray-900" aria-labelledby="project-4">
            <div className="absolute inset-0">
              <img
                src={projects[4].image}
                alt={projects[4].title}
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>

            <div className="absolute top-6 right-6 z-10">
              <div className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 group-hover:scale-110" aria-label="View project details">
                <ExternalLink className="h-5 w-5" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 id="project-4" className="text-xl font-bold text-white mb-3 leading-tight">
                {projects[4].title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {projects[4].tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300" />
          </article>

          <article className="lg:col-span-2 lg:row-span-1 relative overflow-hidden rounded-3xl group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-gray-900" aria-labelledby="project-5">
            <div className="absolute inset-0">
              <img
                src={projects[5].image}
                alt={projects[5].title}
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>

            <div className="absolute top-6 right-6 z-10">
              <div className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 group-hover:scale-110" aria-label="View project details">
                <ExternalLink className="h-5 w-5" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 id="project-5" className="text-xl font-bold text-white mb-3 leading-tight">
                {projects[5].title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {projects[5].tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300" />
          </article>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;