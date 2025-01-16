"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  Send,
  Star,
  Calendar,
  Umbrella,
  Building2,
  Sparkles,
  Bus,
  BookMarked,
  Gift,
  Users,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PopularTrips = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const categoriesRef = useRef(null);
  const cardsRef = useRef(null);

  const experts = [
    {
      name: "Giuseppe",
      role: "Nature",
      image:
        "https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg",
    },
    {
      name: "Giulia",
      role: "Oceans",
      image:
        "https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg",
    },
    {
      name: "Giorgio",
      role: "Culture",
      image:
        "https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg",
    },
    {
      name: "Sunny",
      role: "Planner",
      image:
        "https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg",
    },
    {
      name: "Jeremy",
      role: "Sustainability",
      image:
        "https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg",
    },
    {
      name: "Ceyda",
      role: "Hotels",
      image:
        "https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg",
    },
    {
      name: "Mauro",
      role: "Luxury",
      image:
        "https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg",
    },
    {
      name: "Syifa",
      role: "Maps",
      image:
        "https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg",
    },
    {
      name: "Sari",
      role: "History",
      image:
        "https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg",
    },
    {
      name: "Gregory",
      role: "Luxury Travel",
      image:
        "https://www.secretatlas.com/wp-content/uploads/2021/03/Sognefjord-.jpg",
    },
  ];

  const categories = [
    { icon: Star, text: "For You", active: true },
    { icon: Calendar, text: "Weekend" },
    { icon: Umbrella, text: "Beach" },
    { icon: Building2, text: "Multi City" },
    { icon: Sparkles, text: "New Years" },
    { icon: Bus, text: "Bus & Train" },
    { icon: BookMarked, text: "Bucketlist" },
    { icon: Gift, text: "Christmas" },
    { icon: Users, text: "Friends" },
    { icon: Heart, text: "Couple" },
  ];

  const destinations = [
    {
      id: "1",
      title: "MARRAKECH",
      subtitle: "Red City",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.ZtN956n8LZjYU1E7ckGZYQHaFj&pid=Api",
      activities: [
        {
          name: "Visit Jardin Majorelle",
          description: "Explore the stunning blue villa and gardens",
        },
        {
          name: "Shop at Medina Souks",
          description: "Navigate the traditional markets",
        },
        {
          name: "Visit Jamaa el-Fnaa",
          description: "Experience the famous square and market place",
        },
      ],
      hotels: [
        {
          name: "La Mamounia",
          description: "Luxury palace hotel with traditional Moroccan design",
          coordinates: "31.6250° N, 8.0040° W",
          hotel_url:
            "https://www.fashionela.net/lifestyle/la-mamounia-hotel-the-most-sophisticated-oriental-palace/",
        },
        {
          name: "Royal Mansour",
          description: "Exclusive riads with private pools",
          coordinates: "31.6250° N, 8.0040° W",
          hotel_url:
            "https://www.theluxevoyager.com/luxe-hotels/morocco/royal-mansour-marrakech/",
        },
      ],
    },
    {
      id: "2",
      title: "GRANADA",
      subtitle: "Moorish Pearl",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.tGI0ZowRNGz7n62Jt-IhxAHaFc&pid=Api",
      activities: [
        {
          name: "Visit Alhambra",
          description: "Explore the stunning Moorish palace complex",
        },
        {
          name: "Albaicín Quarter",
          description: "Wander through the historic Arab quarter",
        },
        {
          name: "Flamenco Shows",
          description: "Experience traditional Spanish dance",
        },
      ],
      hotels: [
        {
          name: "Parador de Granada",
          description: "Historic hotel within the Alhambra complex",
          coordinates: "37.1775° N, 3.5900° W",
          hotel_url:
            "https://www.alamy.com/stock-photo/parador-hotel-alhambra-granada.html",
        },
        {
          name: "Hotel Alhambra Palace",
          description: "Luxury hotel with Moorish architecture",
          coordinates: "37.1775° N, 3.5900° W",
          hotel_url:
            "https://www.alamy.com/stock-photo/parador-hotel-alhambra-granada.html",
        },
      ],
    },
    {
      id: "3",
      title: "ROMA",
      subtitle: "Eternal City",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.Y2o6c1BUJs3f7oMGWQMOSQHaE7&pid=Api",
      activities: [
        {
          name: "Colosseum Tour",
          description: "Visit the iconic ancient amphitheater",
        },
        {
          name: "Vatican Museums",
          description: "Explore world-famous art collections",
        },
        {
          name: "Trastevere Walking Tour",
          description: "Discover the charming historic neighborhood",
        },
      ],
      hotels: [
        {
          name: "Hotel de Russie",
          description: "Luxury hotel near Spanish Steps",
          coordinates: "41.9115° N, 12.4760° E",
          hotel_url:
            "https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/",
        },
        {
          name: "Portrait Roma",
          description: "Boutique hotel with rooftop views",
          coordinates: "41.9070° N, 12.4700° E",
          hotel_url: "https://www.cntraveler.com/hotels/rome/portrait-roma",
        },
      ],
    },
    {
      id: "4",
      title: "ISTANBUL",
      subtitle: "Two Continents",
      image:
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/11/bb/39.jpg",
      activities: [
        {
          name: "Hagia Sophia",
          description: "Visit the magnificent Byzantine church-turned-mosque",
        },
        {
          name: "Grand Bazaar",
          description: "Shop at one of the world's oldest markets",
        },
        {
          name: "Bosphorus Cruise",
          description: "See the city from the water",
        },
      ],
      hotels: [
        {
          name: "Four Seasons Sultanahmet",
          description: "Luxury hotel in historic prison building",
          coordinates: "41.0082° N, 28.9784° E",
          hotel_url:
            "https://www.fourseasons.com/landing-pages/regional-hotels-groups/turkiye/",
        },
        {
          name: "Ciragan Palace Kempinski",
          description: "Ottoman palace hotel on the Bosphorus",
          coordinates: "41.0390° N, 29.0290° E",
          hotel_url:
            "https://www.fivestaralliance.com/luxury-hotels/istanbul/ciragan-palace-kempinski-istanbul",
        },
      ],
    },

    {
      id: "5",
      title: "PARIS",
      subtitle: "City of Lights",
      image:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg",
      activities: [
        {
          name: "Eiffel Tower Visit",
          description: "Admire Paris from the iconic tower",
        },
        {
          name: "Louvre Museum",
          description: "Discover famous art and history",
        },
        {
          name: "Seine River Cruise",
          description: "Take a boat ride along the Seine",
        },
      ],
      hotels: [
        {
          name: "Le Meurice",
          description: "Luxury hotel with classic Parisian style",
          coordinates: "48.8657° N, 2.3218° E",
          hotel_url:
            "https://www.dorchestercollection.com/en/paris/le-meurice/",
        },
        {
          name: "Shangri-La Hotel",
          description: "Exquisite luxury with views of the Eiffel Tower",
          coordinates: "48.8639° N, 2.2891° E",
          hotel_url: "https://www.shangri-la.com/paris/shangrila/",
        },
      ],
    },
    {
      id: "12",
      title: "MARRAKECH",
      subtitle: "Red City",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.ZtN956n8LZjYU1E7ckGZYQHaFj&pid=Api",
      activities: [
        {
          name: "Visit Jardin Majorelle",
          description: "Explore the stunning blue villa and gardens",
        },
        {
          name: "Shop at Medina Souks",
          description: "Navigate the traditional markets",
        },
        {
          name: "Visit Jamaa el-Fnaa",
          description: "Experience the famous square and market place",
        },
      ],
      hotels: [
        {
          name: "La Mamounia",
          description: "Luxury palace hotel with traditional Moroccan design",
          coordinates: "31.6250° N, 8.0040° W",
          hotel_url:
            "https://www.fashionela.net/lifestyle/la-mamounia-hotel-the-most-sophisticated-oriental-palace/",
        },
        {
          name: "Royal Mansour",
          description: "Exclusive riads with private pools",
          coordinates: "31.6250° N, 8.0040° W",
          hotel_url:
            "https://www.theluxevoyager.com/luxe-hotels/morocco/royal-mansour-marrakech/",
        },
      ],
    },
    {
      id: "6",
      title: "BARCELONA",
      subtitle: "Catalonia's Heart",
      image:
        "https://d1bvpoagx8hqbg.cloudfront.net/originals/barcelona-magical-city-lights-music-monuments-a4a89404ada51b126806c6157b68122c.jpg",
      activities: [
        {
          name: "Sagrada Familia",
          description: "Visit Gaudí’s iconic basilica",
        },
        {
          name: "Park Güell",
          description: "Explore colorful mosaics and architecture",
        },
        {
          name: "La Rambla Stroll",
          description: "Walk down the famous avenue",
        },
      ],
      hotels: [
        {
          name: "Hotel Arts",
          description: "Luxury hotel with views of the Mediterranean",
          coordinates: "41.3784° N, 2.1921° E",
          hotel_url: "https://www.hotelartsbarcelona.com/",
        },
        {
          name: "W Barcelona",
          description: "Trendy hotel with panoramic sea views",
          coordinates: "41.3691° N, 2.1910° E",
          hotel_url:
            "https://www.marriott.com/hotels/travel/bcnwh-w-barcelona/",
        },
      ],
    },
    {
      id: "7",
      title: "LONDON",
      subtitle: "Capital of the UK",
      image: "https://www.mappr.co/wp-content/uploads/2021/03/image-201.jpeg",
      activities: [
        {
          name: "Tower of London",
          description: "Discover England’s royal history",
        },
        {
          name: "London Eye",
          description: "See the city from the giant Ferris wheel",
        },
        {
          name: "Westminster Abbey",
          description: "Explore the historic abbey of British monarchs",
        },
      ],
      hotels: [
        {
          name: "The Ritz London",
          description: "Classic luxury hotel in the heart of London",
          coordinates: "51.5074° N, 0.1397° W",
          hotel_url: "https://www.theritzlondon.com/",
        },
        {
          name: "Claridge's",
          description: "Art Deco style luxury hotel",
          coordinates: "51.5073° N, 0.1450° W",
          hotel_url: "https://www.claridges.co.uk/",
        },
      ],
    },
    {
      id: "8",
      title: "NEW YORK",
      subtitle: "The Big Apple",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqzvH-_xPZX57JgzjMeQFGrL95vuwBidNAQ&s",
      activities: [
        {
          name: "Statue of Liberty",
          description: "Visit the iconic symbol of freedom",
        },
        {
          name: "Central Park",
          description: "Relax in the heart of the city",
        },
        {
          name: "Broadway Show",
          description: "Watch a world-class theater performance",
        },
      ],
      hotels: [
        {
          name: "The Plaza Hotel",
          description: "Famous luxury hotel in Manhattan",
          coordinates: "40.7644° N, 73.9743° W",
          hotel_url: "https://www.theplazany.com/",
        },
        {
          name: "The St. Regis New York",
          description: "Elegant luxury hotel with classic style",
          coordinates: "40.7615° N, 73.9783° W",
          hotel_url:
            "https://www.marriott.com/hotels/travel/nycxr-the-st-regis-new-york/",
        },
      ],
    },
    {
      id: "9",
      title: "KYOTO",
      subtitle: "Historic Japan",
      image:
        "https://www.pelago.com/img/destinations/kyoto/1129-0642_kyoto.jpg",
      activities: [
        {
          name: "Kinkaku-ji",
          description: "Visit the Golden Pavilion",
        },
        {
          name: "Fushimi Inari Shrine",
          description: "Explore thousands of red torii gates",
        },
        {
          name: "Gion District",
          description: "Walk through the traditional geisha district",
        },
      ],
      hotels: [
        {
          name: "The Ritz-Carlton, Kyoto",
          description: "Luxury hotel by the Kamogawa River",
          coordinates: "35.0104° N, 135.7681° E",
          hotel_url: "https://www.ritzcarlton.com/en/hotels/japan/kyoto",
        },
        {
          name: "Hotel Granvia Kyoto",
          description: "Hotel in Kyoto Station with modern amenities",
          coordinates: "35.0110° N, 135.7589° E",
          hotel_url: "https://www.granviakyoto.com/",
        },
      ],
    },
    {
      id: "10",
      title: "AMSTERDAM",
      subtitle: "Venice of the North",
      image:
        "https://www.eurail.com/content/dam/city-guides/City-guides/amsterdam%20masthead.adaptive.1024.1546431745640.jpg",
      activities: [
        {
          name: "Anne Frank House",
          description: "Visit the hiding place of Anne Frank",
        },
        {
          name: "Canal Cruise",
          description: "Explore Amsterdams picturesque canals",
        },
        {
          name: "Van Gogh Museum",
          description: "Admire masterpieces by Vincent Van Gogh",
        },
      ],
      hotels: [
        {
          name: "Conservatorium Hotel",
          description: "Stylish hotel in a former music conservatory",
          coordinates: "52.3623° N, 4.8767° E",
          hotel_url: "https://www.conservatoriumhotel.com/",
        },
        {
          name: "Hotel Pulitzer",
          description: "Luxury hotel housed in historic canal-side buildings",
          coordinates: "52.3705° N, 4.8848° E",
          hotel_url: "https://www.pulitzeramsterdam.com/",
        },
      ],
    },
    {
      id: "11",
      title: "BARCELONA",
      subtitle: "Catalonia's Heart",
      image:
        "https://d1bvpoagx8hqbg.cloudfront.net/originals/barcelona-magical-city-lights-music-monuments-a4a89404ada51b126806c6157b68122c.jpg",
      activities: [
        {
          name: "Sagrada Familia",
          description: "Visit Gaudí’s iconic basilica",
        },
        {
          name: "Park Güell",
          description: "Explore colorful mosaics and architecture",
        },
        {
          name: "La Rambla Stroll",
          description: "Walk down the famous avenue",
        },
      ],
      hotels: [
        {
          name: "Hotel Arts",
          description: "Luxury hotel with views of the Mediterranean",
          coordinates: "41.3784° N, 2.1921° E",
          hotel_url: "https://www.hotelartsbarcelona.com/",
        },
        {
          name: "W Barcelona",
          description: "Trendy hotel with panoramic sea views",
          coordinates: "41.3691° N, 2.1910° E",
          hotel_url:
            "https://www.marriott.com/hotels/travel/bcnwh-w-barcelona/",
        },
      ],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial loaded state

    // Initialize all elements to their starting positions immediately
    gsap.set(".expert-avatar", { opacity: 0, y: 50 });
    gsap.set(headingRef.current, { opacity: 0, y: 30 });
    gsap.set(".category-item", { opacity: 0, x: -30 });
    gsap.set(".destination-card", { opacity: 0, y: 50 });

    // Create main timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=100",
        end: "center center",
        toggleActions: "play none none reverse",
      },
    });

    // Animate elements
    tl.to(".expert-avatar", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    })
      .to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .to(
        ".category-item",
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(
        ".destination-card",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.3"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={`max-w-7xl mx-auto px-4 py-8 `}>
      {/* Experts Section */}
      <div className="flex justify-between overflow-x-auto overflow-y-hidden gap-4 no-scrollbar  items-center container py-8">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="expert-avatar bg-slate-200 rounded-md p-5 w-36 h-36   flex flex-col items-center flex-shrink-0"
            style={{ visibility: "visible" }} // Prevent FOUC
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
        className="text-4xl text-white font-bold mt-12 mb-8"
        style={{ visibility: "visible" }}
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
              index === 0
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            } whitespace-nowrap`}
            style={{ visibility: "visible" }}
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
        {destinations.map((destination: any, index: number) => (
          <div   key={index}>
            <Link href={`/${destination.id}`}>
              <Card
              
                className=" group relative  rounded-lg h-80"
                style={{ visibility: "visible" }}
              >
                <div
                  className="lg:w-[300px] lg:h-[320px] w-full h-full relative 
                overflow-hidden"
                >
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    width={400}
                    height={320}
                    className=" inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b group-hover:scale-110 from-transparent to-black/60" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{destination.title}</h3>
                  <p className="text-lg opacity-90">{destination.subtitle}</p>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTrips;
