import React from 'react';
import { Code, Award, Users, Trophy } from 'lucide-react';
import { portfolioData } from '../data/mock';

const About = () => {
  const { about, stats } = portfolioData;

  const statItems = [
    { 
      icon: Code, 
      value: stats.experience, 
      label: "Years Experience",
      color: "text-blue-600 dark:text-blue-400"
    },
    { 
      icon: Trophy, 
      value: stats.projects, 
      label: "Projects Completed",
      color: "text-green-600 dark:text-green-400"
    },
    { 
      icon: Award, 
      value: stats.certifications, 
      label: "Certifications",
      color: "text-purple-600 dark:text-purple-400"
    },
    { 
      icon: Users, 
      value: stats.clients, 
      label: "Happy Clients",
      color: "text-orange-600 dark:text-orange-400"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {about.title}
              </h3>
              <div className="prose prose-lg text-gray-600 dark:text-gray-300 space-y-4">
                {about.story.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              {about.highlights.map((highlight, index) => {
                const IconComponent = highlight.icon === 'Code' ? Code : Award;
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {statItems.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-100 dark:border-gray-600"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
            <span className="font-medium">Ready to work together?</span>
            <span className="ml-2">Let's connect!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;