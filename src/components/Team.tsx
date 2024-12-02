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
      image: 'https://i.postimg.cc/rwDDCG1y/Arin.jpg',
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com/in/arin-karmakar-7758a8204/',
      email: 'gmail.com'
    },
    {
      name: 'Chandan Kumar Raj',
      role: 'Chapter Co Lead',
      image: 'https://i.postimg.cc/7YsC2tTQ/Chandan.jpg',
      github: 'https://github.com/chandan0629',
      linkedin: 'https://www.linkedin.com/in/chandan-kumar-raj-210839210/',
      email: 'alex@example.com'
    },
    {
      name: 'Samyak Mishra',
      role: 'Technical Lead',
      image: 'https://i.postimg.cc/50SyNsVg/Samyak.jpg',
      github: 'https://github.com/Samyak072',
      linkedin: 'https://www.linkedin.com/in/samyak072/',
      email: 'sm2.cse.tmsl@ticollege.org'
    },
    {
      name: 'Suprakash Roy',
      role: 'Technical Co Lead',
      image: 'src/images/Suprakash.jpg',
      github: 'https://github.com/SuprakashRoy04',
      linkedin: 'https://www.linkedin.com/in/suprakash-roy-28361b247/',
      email: 'suprakash.05roy@gmail.com'
    },
    {
      name: 'Saranya Adhikary',
      role: 'Design Lead',
      image: 'https://i.postimg.cc/XqNJZ9Nb/Saranya.jpg',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'saranyaemailme@gmail.com'
    },
    {
      name: 'Rhitwika Poddar',
      role: 'Design Co Lead',
      image: 'https://i.postimg.cc/rmkzkvvz/Rhitwika.jpg',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'rhitwikapoddar@gmail.com'
    },
    {
      name: 'Aditya Seth',
      role: 'Event Lead',
      image: 'https://i.postimg.cc/3dk0kmBR/Aditya.jpg',
      //<img src="https://i.postimg.cc/3dk0kmBR/Aditya.jpg" alt="Aditya"/>
      github: 'https://github.com/AdityaSeth777',
      linkedin: 'https://www.linkedin.com/in/aditya-seth-270833233/',
      email: 'contact@adityaseth.in'
    },
    {
      name: 'Arnab Singha',
      role: 'Event Co Lead',
      image: 'https://i.postimg.cc/6qz8zYbq/Arnab.webp',
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com',
      email: 'singhaarnab007@gmail.com'
    },
    {
      name: 'Rahul Deb',
      role: 'Social Media Lead',
      image: 'https://i.postimg.cc/JhJtS1Y9/Rahul.jpg',
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com',
      email: 'rdeb97412@gmail.com'
    },
    {
      name: 'Arghya Dandopat',
      role: 'Social Media Co Lead',
      image: 'https://i.postimg.cc/SQGYyxQ4/Arghya.jpg',
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com',
      email: 'dandapatarghya71@gmail.com'
    },
    {
      name: 'Shamik Ghosh',
      role: 'PR Lead',
      image: 'https://i.postimg.cc/L5ysjhhZ/Shamik.jpg',
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com',
      email: 'shamikghoshxd@gmail.com'
    },
    {
      name: 'Suhani Kundu',
      role: 'PR Co Lead',
      image: 'src/images/Suhani.jpg',
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com/in/suhani-kundu-110104267/',
      email: 'suhanikundu.2004@gmail.com'
    },
    {
      name: 'Atyankush Das',
      role: 'Marketing Lead',
      image: 'src/images/Atyankush.jpg',
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com',
      email: 'atyankushd@gmail.com'
    },
    {
      name: 'Abu Huzaifa Luqmani',
      role: 'Marketing Co Lead',
      image: 'https://i.postimg.cc/MpfGj6wv/Huzaifa.jpg',
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com',
      email: 'huzaifaluqmani13@gmail.com'
    },
    {
      name: 'Pragya Saha',
      role: 'Marketing Co Lead',
      image: 'https://i.postimg.cc/kgLBjVsQ/Pragya.jpg',
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com',
      email: 'sasha156julla@gmail.com'
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
