'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Avatar } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Send, Star, Calendar, Umbrella, Building2, Sparkles, Bus, BookMarked, Gift, Users, Heart } from 'lucide-react';
import Image from 'next/image';

const PopularTrips = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const categoriesRef = useRef(null);
  const cardsRef = useRef(null);


  const experts = [
    { name: 'Giuseppe', role: 'Nature' , image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'  },
    { name: 'Giulia', role: 'Oceans', image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'  },
    { name: 'Giorgio', role: 'Culture' , image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg' },
    { name: 'Sunny', role: 'Planner', image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'  },
    { name: 'Jeremy', role: 'Sustainability', image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'  },
    { name: 'Ceyda', role: 'Hotels' , image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg' },
    { name: 'Mauro', role: 'Luxury' , image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg' },
    { name: 'Syifa', role: 'Maps' , image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg' },
    { name: 'Sari', role: 'History', image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'  },
    { name: 'Gregory', role: 'Luxury Travel', image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'  }
  ];

  const categories = [
    { icon: Star, text: 'For You', active: true },
    { icon: Calendar, text: 'Weekend' },
    { icon: Umbrella, text: 'Beach' },
    { icon: Building2, text: 'Multi City' },
    { icon: Sparkles, text: 'New Years' },
    { icon: Bus, text: 'Bus & Train' },
    { icon: BookMarked, text: 'Bucketlist' },
    { icon: Gift, text: 'Christmas' },
    { icon: Users, text: 'Friends' },
    { icon: Heart, text: 'Couple' }
  ];

  const destinations = [
    { 
      title: 'MARRAKECH',
      subtitle: 'Red City',
      image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'  // Using placeholder image
    },
    {
      title: 'GRANADA',
      subtitle: 'Moorish Pearl',
      image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'
    },
    {
      title: 'ROMA',
      subtitle: 'Eternal City',
      image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'
    },
    {
      title: 'ISTANBUL',
      subtitle: 'Two Continents',
      image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'
    },

    { 
      title: 'MARRAKECH',
      subtitle: 'Red City',
      image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'  // Using placeholder image
    },
    {
      title: 'GRANADA',
      subtitle: 'Moorish Pearl',
      image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'
    },
    {
      title: 'ROMA',
      subtitle: 'Eternal City',
      image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'
    },
    {
      title: 'ISTANBUL',
      subtitle: 'Two Continents',
      image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'
    },
    { 
      title: 'MARRAKECH',
      subtitle: 'Red City',
      image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'  // Using placeholder image
    },
    {
      title: 'GRANADA',
      subtitle: 'Moorish Pearl',
      image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'
    },
    {
      title: 'ROMA',
      subtitle: 'Eternal City',
      image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'
    },
    {
      title: 'ISTANBUL',
      subtitle: 'Two Continents',
      image: 'https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg'
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Set initial loaded state

    // Initialize all elements to their starting positions immediately
    gsap.set('.expert-avatar', { opacity: 0, y: 50 });
    gsap.set(headingRef.current, { opacity: 0, y: 30 });
    gsap.set('.category-item', { opacity: 0, x: -30 });
    gsap.set('.destination-card', { opacity: 0, y: 50 });

    // Create main timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=100",
        end: "center center",
        toggleActions: "play none none reverse"
      }
    });

    // Animate elements
    tl.to('.expert-avatar', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
    })
    .to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, "-=0.3")
    .to('.category-item', {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    }, "-=0.5")
    .to('.destination-card', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    }, "-=0.3");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`max-w-7xl mx-auto px-4 py-8 `}
    >
      {/* Experts Section */}
      <div className='flex justify-between overflow-x-auto overflow-y-hidden gap-4 no-scrollbar  items-center container py-8'>

        {experts.map((expert, index) => (
          <div 
            key={index} 
            className="expert-avatar bg-slate-200 rounded-md p-5 w-36 h-36   flex flex-col items-center flex-shrink-0"
            style={{ visibility: 'visible' }} // Prevent FOUC
          >
            <Avatar className="w-16 h-16 mb-2">
              <Image
                width={64}
                height={64}
                alt={expert.name}
                src={expert.image}
                className="object-cover"
              />
            </Avatar>
            <span className="font-medium">{expert.name}</span>
            <span className="text-sm text-gray-500">{expert.role}</span>
          </div>
        ))}
      
      </div>

      {/* Heading */}
      <h2 
        ref={headingRef} 
        className="text-4xl font-bold mt-12 mb-8"
        style={{ visibility: 'visible' }}
      >
        Discover Unforgettable Trips
      </h2>

      {/* Categories */}
      <div 
        ref={categoriesRef} 
        className="flex  gap-4 pb-6 w-full  lg:max-w-4xl mx-auto overflow-x-auto no-scrollbar "
      >



            {categories.map((category, index) => (
          <button
          key={index}
          className={`category-item flex items-center gap-2 px-4 py-2 rounded-full ${
            index === 0 ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
          } whitespace-nowrap`}
          style={{ visibility: 'visible' }}
          >
            <category.icon size={18} />
            <span>{category.text}</span>
          </button>
        ))}
          
      </div>

      {/* Destination Cards */}
      <div 
        ref={cardsRef} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
      >
        {destinations.map((destination, index) => (
          <Card 
            key={index} 
            className="destination-card group relative  rounded-lg h-80"
            style={{ visibility: 'visible' }}
          >
            <Image
              src={destination.image}
              alt={destination.title}
              width={400}
              height={320}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b group-hover:scale-110 from-transparent to-black/60" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold">{destination.title}</h3>
              <p className="text-lg opacity-90">{destination.subtitle}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularTrips;