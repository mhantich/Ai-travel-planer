import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "An absolutely amazing trip planner, so much incredible information available, produces fantastic itineraries. Great videos, reels etc."
    },
    {
      text: "Fav new app. Literally planned a whole trip to Thailand for me. She's really funny and smart and I love the bucketlists!!"
    },
    {
      text: "MhxAi is a fascinating, inspirational ai trip planning tool that made a super customized itinerary for my Japan trip."
    },
    {
      text: "I'm traveling in #Bali for a month, and I found out about this platform yesterday.I swear I'm in shock. It's like talking to a human, funny, asks questions for better responses, and knows EVERYTHING."
    },
    {
      text: "It was like chatting with that one friend who's been everywhere, done everything, gave me the best hotel and flight options and planned my entire road trip."
    }
  ];

  return (
    <div className="bg-black w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
          Cute things people have
          <br />
          said about MhxAi
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            // Make specific items span full width on medium screens
            const isWide = index === 3 || index === 4;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:scale-105 
                  ${isWide ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <p className="text-gray-800 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;