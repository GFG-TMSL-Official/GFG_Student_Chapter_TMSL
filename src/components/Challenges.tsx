import React from 'react';
import { Trophy, Clock, Users, ArrowRight } from 'lucide-react';

interface Challenge {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  participants: number;
  duration: string;
  deadline: string;
  description: string;
}

const Challenges = () => {
  const challenges: Challenge[] = [
    {
      title: 'Algorithm Marathon',
      difficulty: 'Hard',
      participants: 156,
      duration: '3 hours',
      deadline: 'March 30, 2024',
      description: 'Test your algorithmic skills with complex problem-solving challenges.'
    },
    {
      title: 'Web Dev Challenge',
      difficulty: 'Medium',
      participants: 234,
      duration: '4 hours',
      deadline: 'April 5, 2024',
      description: 'Build responsive and interactive web applications using modern technologies.'
    },
    {
      title: 'Code Debug Sprint',
      difficulty: 'Easy',
      participants: 312,
      duration: '2 hours',
      deadline: 'April 12, 2024',
      description: 'Find and fix bugs in various programming languages and improve code quality.'
    }
  ];

  const getDifficultyClass = (difficulty: Challenge['difficulty']) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="challenges" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Coding Challenges</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Put your skills to the test with our coding challenges and compete with fellow developers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{challenge.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyClass(challenge.difficulty)}`}>
                  {challenge.difficulty}
                </span>
              </div>

              <p className="text-gray-600 mb-6">{challenge.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{challenge.participants} participants</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{challenge.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Trophy className="h-5 w-5 mr-2" />
                  <span>Deadline: {challenge.deadline}</span>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2 group">
                Start Challenge
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
