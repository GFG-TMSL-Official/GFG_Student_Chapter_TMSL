import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const TeamMember: React.FC<TeamMember> = ({ name, role, image, github, linkedin, email }) => (
  <div className="group relative">
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex justify-center space-x-3 mb-2">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
                <Github className="h-5 w-5" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="text-white hover:text-green-400">
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  </div>
);

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Arin Karmakar',
      role: 'Chapter Lead',
      image: 'h',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'alex@example.com'
    },
    {
      name: 'Samyak Mishra',
      role: 'Technical Lead',
      image: 'image-url',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'sm2.cse.tmsl@ticollege.org'
    },
    {
      name: 'Saranya',
      role: 'Event Coordinator',
      image: 'image',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'michael@example.com'
    },
    {
      name: 'Aditya Seth',
      role: 'Content Lead',
      image: 'image',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'emily@example.com'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated individuals working together to create an impactful and healthy learning experience
            for our community members.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
