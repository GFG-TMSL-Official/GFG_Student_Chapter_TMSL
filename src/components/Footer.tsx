import React, { useState } from 'react';
import { Code2, Facebook, Instagram, Linkedin, Github, ArrowUp } from 'lucide-react';
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setMessage('');

  // Validate the input email
  if (!email || !email.includes('@')) {
    setMessage('Please enter a valid email address.');
    setIsSubmitting(false);
    return;
  }

  // EmailJS configuration with proper template params
  const templateParams = {
    to_email: email, // Map the entered email to the template's "to_email" field
    to_name: email.split('@')[0], // Extract the username from the email (e.g., "abc" from "abc@gmail.com")
  };

  emailjs
    .send(
      'service_m5kgakp', // Replace with your actual service ID
      'template_3y5carn', // Replace with your actual template ID
      templateParams,
      'yRBonteeeLpKxLi3W' // Replace with your public API key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setMessage('Thanks for Subscribing to our Newsletter!');
      setEmail(''); // Clear the email input field
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setMessage('Oops! Something went wrong, please try again.');
    })
    .finally(() => {
      setIsSubmitting(false); // Re-enable the button
    });
};


  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Code2 className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold">GFG TMSL</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering students with technical knowledge and practical skills through peer learning
              and hands-on experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/gfgtmsl/posts/?feedView=all" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/GFG-TMSL-Official" className="text-gray-400 hover:text-green-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-green-400 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-green-400 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#blogs" className="text-gray-400 hover:text-green-400 transition-colors">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://drive.google.com/drive/folders/1zz05OGzZD6qbSkVDFlPM3abceeSfeBhN?usp=sharing" className="text-gray-400 hover:text-green-400 transition-colors">
                  Study Material
                </a>
              </li>
              <li>
                <a href="https://www.geeksforgeeks.org/explore?page=3&sortBy=submissions&itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=practice_header" className="text-gray-400 hover:text-green-400 transition-colors">
                  Practice Problems
                </a>
              </li>
              <li>
                <a href="https://www.geeksforgeeks.org/explore?page=1&sortBy=submissions&itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=practice_header" className="text-gray-400 hover:text-green-400 transition-colors">
                  Interview Prep
                </a>
              </li>
              <li>
                <a href="https://www.geeksforgeeks.org/geeksforgeeks-practice-best-online-coding-platform/?ref=ghm" className="text-gray-400 hover:text-green-400 transition-colors">
                  Coding Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on events and opportunities.
            </p>
            <form className="flex" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md bg-gray-800 border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </button>
            </form>
            {message && (
              <p className="mt-2 text-sm text-gray-300">{message}</p>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Technical Team GFG TMSL. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
