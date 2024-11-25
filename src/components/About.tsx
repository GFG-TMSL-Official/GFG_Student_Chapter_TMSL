import React from 'react';
import { Target, Users, Rocket, Code } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Our Mission',
      description: 'To create a vibrant community of programmers who learn, grow, and innovate together while mastering the art of coding.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'A diverse group of tech enthusiasts collaborating to solve real-world problems through code.'
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Fostering creativity and technical excellence through workshops, hackathons, and coding competitions.'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Learning',
      description: 'Providing structured learning paths, mentorship, and hands-on experience in cutting-edge technologies.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About GFG TMSL</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The GeeksforGeeks Student Chapter at Techno Main Salt Lake is a community of passionate developers
            dedicated to fostering technical excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;