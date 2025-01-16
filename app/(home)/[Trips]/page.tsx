'use client'

import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Bed, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const destinations = [
  {
    "id": "1",  
    "title": "MARRAKECH",
    "subtitle": "Red City",
    "image": "https://tse2.mm.bing.net/th?id=OIP.ZtN956n8LZjYU1E7ckGZYQHaFj&pid=Api",
    "activities": [
      {
        "name": "Visit Jardin Majorelle",
        "description": "Explore the stunning blue villa and gardens"
      },
      {
        "name": "Shop at Medina Souks",
        "description": "Navigate the traditional markets"
      },
      {
        "name": "Visit Jamaa el-Fnaa",
        "description": "Experience the famous square and market place"
      }
    ],
    "hotels": [
      {
        "name": "La Mamounia",
        "description": "Luxury palace hotel with traditional Moroccan design",
        "coordinates": "31.6250° N, 8.0040° W",
        "hotel_url": "https://www.fashionela.net/lifestyle/la-mamounia-hotel-the-most-sophisticated-oriental-palace/"
      },
      {
        "name": "Royal Mansour",
        "description": "Exclusive riads with private pools",
        "coordinates": "31.6250° N, 8.0040° W",
        "hotel_url": "https://www.theluxevoyager.com/luxe-hotels/morocco/royal-mansour-marrakech/"
      }
    ]
  },
    {
    "id": "2",
    "title": "GRANADA",
    "subtitle": "Moorish Pearl",
    "image": "https://tse2.mm.bing.net/th?id=OIP.tGI0ZowRNGz7n62Jt-IhxAHaFc&pid=Api",
    "activities": [
      {
        "name": "Visit Alhambra",
        "description": "Explore the stunning Moorish palace complex"
      },
      {
        "name": "Albaicín Quarter",
        "description": "Wander through the historic Arab quarter"
      },
      {
        "name": "Flamenco Shows",
        "description": "Experience traditional Spanish dance"
      }
    ],
    "hotels": [
      {
        "name": "Parador de Granada",
        "description": "Historic hotel within the Alhambra complex",
        "coordinates": "37.1775° N, 3.5900° W",
        "hotel_url": "https://www.alamy.com/stock-photo/parador-hotel-alhambra-granada.html"
      },
      {
        "name": "Hotel Alhambra Palace",
        "description": "Luxury hotel with Moorish architecture",
        "coordinates": "37.1775° N, 3.5900° W",
        "hotel_url": "https://www.alamy.com/stock-photo/parador-hotel-alhambra-granada.html"
      }
    ]
  },
  {
        "id": "3",
    "title": "ROMA",
    "subtitle": "Eternal City",
    "image": "https://tse1.mm.bing.net/th?id=OIP.Y2o6c1BUJs3f7oMGWQMOSQHaE7&pid=Api",
    "activities": [
      {
        "name": "Colosseum Tour",
        "description": "Visit the iconic ancient amphitheater"
      },
      {
        "name": "Vatican Museums",
        "description": "Explore world-famous art collections"
      },
      {
        "name": "Trastevere Walking Tour",
        "description": "Discover the charming historic neighborhood"
      }
    ],
    "hotels": [
      {
        "name": "Hotel de Russie",
        "description": "Luxury hotel near Spanish Steps",
        "coordinates": "41.9115° N, 12.4760° E",
        "hotel_url": "https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/"
      },
      {
        "name": "Portrait Roma",
        "description": "Boutique hotel with rooftop views",
        "coordinates": "41.9070° N, 12.4700° E",
        "hotel_url": "https://www.cntraveler.com/hotels/rome/portrait-roma"
      }
    ]
  },
  {
    "id": "4",
    "title": "ISTANBUL",
    "subtitle": "Two Continents",
    "image": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/11/bb/39.jpg",
    "activities": [
      {
        "name": "Hagia Sophia",
        "description": "Visit the magnificent Byzantine church-turned-mosque"
      },
      {
        "name": "Grand Bazaar",
        "description": "Shop at one of the world's oldest markets"
      },
      {
        "name": "Bosphorus Cruise",
        "description": "See the city from the water"
      }
    ],
    "hotels": [
      {
        "name": "Four Seasons Sultanahmet",
        "description": "Luxury hotel in historic prison building",
        "coordinates": "41.0082° N, 28.9784° E",
        "hotel_url": "https://www.fourseasons.com/landing-pages/regional-hotels-groups/turkiye/"
      },
      {
        "name": "Ciragan Palace Kempinski",
        "description": "Ottoman palace hotel on the Bosphorus",
        "coordinates": "41.0390° N, 29.0290° E",
        "hotel_url": "https://www.fivestaralliance.com/luxury-hotels/istanbul/ciragan-palace-kempinski-istanbul"
      }
    ]
  },
  {
    "id": "5",
    "title": "PARIS",
    "subtitle": "City of Lights",
    "image": "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg",
    "activities": [
      {
        "name": "Eiffel Tower Visit",
        "description": "Admire Paris from the iconic tower"
      },
      {
        "name": "Louvre Museum",
        "description": "Discover famous art and history"
      },
      {
        "name": "Seine River Cruise",
        "description": "Take a boat ride along the Seine"
      }
    ],
    "hotels": [
      {
        "name": "Le Meurice",
        "description": "Luxury hotel with classic Parisian style",
        "coordinates": "48.8657° N, 2.3218° E",
        "hotel_url": "https://www.dorchestercollection.com/en/paris/le-meurice/"
      },
      {
        "name": "Shangri-La Hotel",
        "description": "Exquisite luxury with views of the Eiffel Tower",
        "coordinates": "48.8639° N, 2.2891° E",
        "hotel_url": "https://www.shangri-la.com/paris/shangrila/"
      }
    ]
  },
  {
    "id": "6",
    "title": "BARCELONA",
    "subtitle": "Catalonia's Heart",
    "image": "https://d1bvpoagx8hqbg.cloudfront.net/originals/barcelona-magical-city-lights-music-monuments-a4a89404ada51b126806c6157b68122c.jpg",
    "activities": [
      {
        "name": "Sagrada Familia",
        "description": "Visit Gaudí’s iconic basilica"
      },
      {
        "name": "Park Güell",
        "description": "Explore colorful mosaics and architecture"
      },
      {
        "name": "La Rambla Stroll",
        "description": "Walk down the famous avenue"
      }
    ],
    "hotels": [
      {
        "name": "Hotel Arts",
        "description": "Luxury hotel with views of the Mediterranean",
        "coordinates": "41.3784° N, 2.1921° E",
        "hotel_url": "https://www.hotelartsbarcelona.com/"
      },
      {
        "name": "W Barcelona",
        "description": "Trendy hotel with panoramic sea views",
        "coordinates": "41.3691° N, 2.1910° E",
        "hotel_url": "https://www.marriott.com/hotels/travel/bcnwh-w-barcelona/"
      }
    ]
  },
  {
    "id": "7",
    "title": "LONDON",
    "subtitle": "Capital of the UK",
    "image": "https://www.mappr.co/wp-content/uploads/2021/03/image-201.jpeg",
    "activities": [
      {
        "name": "Tower of London",
        "description": "Discover England’s royal history"
      },
      {
        "name": "London Eye",
        "description": "See the city from the giant Ferris wheel"
      },
      {
        "name": "Westminster Abbey",
        "description": "Explore the historic abbey of British monarchs"
      }
    ],
    "hotels": [
      {
        "name": "The Ritz London",
        "description": "Classic luxury hotel in the heart of London",
        "coordinates": "51.5074° N, 0.1397° W",
        "hotel_url": "https://www.theritzlondon.com/"
      },
      {
        "name": "Claridge's",
        "description": "Art Deco style luxury hotel",
        "coordinates": "51.5073° N, 0.1450° W",
        "hotel_url": "https://www.claridges.co.uk/"
      }
    ]
  },
  {
    "id": "8",
    "title": "NEW YORK",
    "subtitle": "The Big Apple",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqzvH-_xPZX57JgzjMeQFGrL95vuwBidNAQ&s",
    "activities": [
      {
        "name": "Statue of Liberty",
        "description": "Visit the iconic symbol of freedom"
      },
      {
        "name": "Central Park",
        "description": "Relax in the heart of the city"
      },
      {
        "name": "Broadway Show",
        "description": "Watch a world-class theater performance"
      }
    ],
    "hotels": [
      {
        "name": "The Plaza Hotel",
        "description": "Famous luxury hotel in Manhattan",
        "coordinates": "40.7644° N, 73.9743° W",
        "hotel_url": "https://www.theplazany.com/"
      },
      {
        "name": "The St. Regis New York",
        "description": "Elegant luxury hotel with classic style",
        "coordinates": "40.7615° N, 73.9783° W",
        "hotel_url": "https://www.marriott.com/hotels/travel/nycxr-the-st-regis-new-york/"
      }
    ]
  },
  {
    "id": "9",
    "title": "KYOTO",
    "subtitle": "Historic Japan",
    "image": "https://www.pelago.com/img/destinations/kyoto/1129-0642_kyoto.jpg",
    "activities": [
      {
        "name": "Kinkaku-ji",
        "description": "Visit the Golden Pavilion"
      },
      {
        "name": "Fushimi Inari Shrine",
        "description": "Explore thousands of red torii gates"
      },
      {
        "name": "Gion District",
        "description": "Walk through the traditional geisha district"
      }
    ],
    "hotels": [
      {
        "name": "The Ritz-Carlton, Kyoto",
        "description": "Luxury hotel by the Kamogawa River",
        "coordinates": "35.0104° N, 135.7681° E",
        "hotel_url": "https://www.ritzcarlton.com/en/hotels/japan/kyoto"
      },
      {
        "name": "Hotel Granvia Kyoto",
        "description": "Hotel in Kyoto Station with modern amenities",
        "coordinates": "35.0110° N, 135.7589° E",
        "hotel_url": "https://www.granviakyoto.com/"
      }
    ]
  },
  {
              "id": "10",
    "title": "AMSTERDAM",
    "subtitle": "Venice of the North",
    "image": "https://www.eurail.com/content/dam/city-guides/City-guides/amsterdam%20masthead.adaptive.1024.1546431745640.jpg",
    "activities": [
      {
        "name": "Anne Frank House",
        "description": "Visit the hiding place of Anne Frank"
      },
      {
        "name": "Canal Cruise",
        "description": "Explore Amsterdam’s picturesque canals"
      },
      {
        "name": "Van Gogh Museum",
        "description": "Admire masterpieces by Vincent Van Gogh"
      }
    ],
    "hotels": [
      {
        "name": "Conservatorium Hotel",
        "description": "Stylish hotel in a former music conservatory",
        "coordinates": "52.3623° N, 4.8767° E",
        "hotel_url": "https://www.conservatoriumhotel.com/"
      },
      {
        "name": "Hotel Pulitzer",
        "description": "Luxury hotel housed in historic canal-side buildings",
        "coordinates": "52.3705° N, 4.8848° E",
        "hotel_url": "https://www.pulitzeramsterdam.com/"
      }
    ]
  }
]

export default function TripPage({ params }: { params: { Trips: string } }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const trip = destinations.find((t) => t.id === params.Trips || t.title === params.Trips);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = "1";
      headerRef.current.style.transform = "translateY(0)";
    }
    if (contentRef.current) {
      contentRef.current.style.opacity = "1";
      contentRef.current.style.transform = "translateY(0)";
    }
    if (mapRef.current) {
      mapRef.current.style.opacity = "1";
      mapRef.current.style.transform = "translateX(0)";
    }
  }, []);

  if (!trip) {
    return <div>Trip not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8">
      <div
        ref={headerRef}
        className="relative h-96 rounded-lg overflow-hidden transition-all duration-1000 opacity-0 transform translate-y-8"
      >
        <Image
          src={trip.image}
          alt={trip.title}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-5xl font-bold text-white mb-2">
              {trip.title}
            </h1>
            <p className="text-2xl text-white/90">{trip.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div
          ref={contentRef}
          className="lg:col-span-2 transition-all duration-1000 delay-300 opacity-0 transform translate-y-8"
        >
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="activities">
                <TabsList className="mb-6">
                  <TabsTrigger value="activities" className="flex items-center gap-2">
                    <Camera className="w-4 h-4" />
                    Activities
                  </TabsTrigger>
                  <TabsTrigger value="hotels" className="flex items-center gap-2">
                    <Bed className="w-4 h-4" />
                    Hotels
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="activities">
                  <div className="space-y-4">
                    {trip.activities.map((activity, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300"
                      >
                        <h3 className="text-xl font-semibold mb-2">
                          {activity.name}
                        </h3>
                        <p className="text-gray-600">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="hotels">
                  <div className="space-y-4">
                    {trip.hotels.map((hotel, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300"
                      >
                        <h3 className="text-xl font-semibold mb-2">
                          {hotel.name}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {hotel.description}
                        </p>
                        <div className="flex items-center text-gray-500">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{hotel.coordinates}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div
          ref={mapRef}
          className="lg:col-span-1 transition-all duration-1000 delay-600 opacity-0 transform translate-x-8"
        >
          <Card className="h-full">
            <CardHeader>
              <h2 className="text-xl font-semibold">Location</h2>
            </CardHeader>
            <CardContent>
            <div style={{'backgroundImage':"url(https://joomly.net/frontend/web/images/googlemap/map.png)"}} className="aspect-square bg-gray-100 rounded-lg relative overflow-hidden">
              
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>City Center:</strong> {trip.hotels[0]?.coordinates}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
      >
        {destinations.map((destination: any, index: number) => (
          <div key={index}>
            <Link href={`/${destination.id}`}>
              <Card
                key={index}
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
}