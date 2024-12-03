import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Gallery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Capturing moments of learning, collaboration, and achievement from our various events
            and activities.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <p className="text-2xl text-gray-500 font-medium">No Photos Available</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
