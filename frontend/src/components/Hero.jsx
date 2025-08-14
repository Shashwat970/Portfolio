import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { personal, stats } = portfolioData;

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                👋 Welcome to my portfolio
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              
              <div className="flex flex-wrap gap-2 text-lg text-gray-600 dark:text-gray-300">
                <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{personal.title}</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">AI Enthusiast</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">Entrepreneur</span>
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                {personal.tagline}
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                {personal.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('#projects')}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all hover:shadow-lg hover:scale-105 group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => window.open(personal.resume, '_blank')}
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 dark:bg-gray-800 dark:text-gray-200 px-8 py-3 rounded-full text-lg font-medium transition-all hover:shadow-lg group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a 
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
              <a 
                href={personal.socialLinks.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={personal.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-400 dark:text-gray-500 hover:text-blue-400 transition-colors hover:scale-110 transform"
              >
                <Twitter size={24} />
              </a>
              <a 
                href={personal.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-pink-500 transition-colors hover:scale-110 transform"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Profile Image */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={personal.image}
                alt={personal.name}
                className="relative z-10 w-full h-full object-cover rounded-full border-8 border-white dark:border-gray-700 shadow-2xl"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 animate-bounce">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.projects}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 animate-bounce" style={{animationDelay: '0.5s'}}>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.experience}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-300 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;