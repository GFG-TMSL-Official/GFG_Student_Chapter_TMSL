import React from 'react';
import { ChevronRight, Calendar, Clock } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  author: {
    name: string;
    image: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

const Blogs = () => {
  const posts: BlogPost[] = [
    {
      title: 'Getting Started with Data Structures',
      excerpt: 'Learn the fundamentals of data structures and their implementations in various programming languages.',
      author: {
        name: 'Arin Karmakar',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      },
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['DSA', 'Programming', 'Beginners']
    },
    {
      title: 'Web Development Best Practices',
      excerpt: 'Explore modern web development practices and improve your coding skills with these essential tips.',
      author: {
        name: 'Chandan Kumar Raj',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      },
      date: 'March 18, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Web Dev', 'Frontend', 'Best Practices']
    },
    {
      title: 'Introduction to System Design',
      excerpt: 'Understanding the basics of system design and architecture for building scalable applications.',
      author: {
        name: 'Samyak Mishra',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      },
      date: 'March 20, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['System Design', 'Architecture', 'Advanced']
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Blogs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of technical articles, tutorials, and insights written by our community members.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-gray-600">{post.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <button className="mt-4 w-full flex items-center justify-center gap-2 text-green-600 hover:text-green-700 transition-colors group">
                  Read More
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
