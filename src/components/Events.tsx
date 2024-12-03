import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'workshop' | 'webinar' | 'hackathon';
}

const Events = () => {
  const events: Event[] = [
    {
      title: 'Advanced DSA Workshop',
      date: 'March 25, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Lab 401, CS Building',
      description: 'Deep dive into advanced data structures and algorithms with hands-on coding sessions.',
      type: 'workshop'
    },
    {
      title: 'Web Development Bootcamp',
      date: 'April 2, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Virtual Event',
      description: 'Comprehensive workshop on modern web development technologies and best practices.',
      type: 'webinar'
    },
    {
      title: 'Code Sprint 2024',
      date: 'April 15-16, 2024',
      time: '9:00 AM onwards',
      location: 'Main Auditorium',
      description: '24-hour hackathon focused on building innovative solutions for real-world problems.',
      type: 'hackathon'
    }
  ];

  const getEventClass = (type: Event['type']) => {
    switch (type) {
      case 'workshop':
        return 'border-blue-200 bg-blue-50';
      case 'webinar':
        return 'border-purple-200 bg-purple-50';
      case 'hackathon':
        return 'border-green-200 bg-green-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for exciting workshops, webinars, and hackathons to enhance your skills
            and connect with fellow developers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className={`rounded-lg border-2 p-6 transition-all duration-300 hover:shadow-lg ${getEventClass(event.type)}`}
            >
              <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{event.description}</p>
              <button className="w-full bg-white text-gray-800 border-2 border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors duration-300">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
