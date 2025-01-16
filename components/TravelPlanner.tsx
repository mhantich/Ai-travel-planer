import { Send } from 'lucide-react'
import React from 'react'

function TravelPlanner() {
  return (
    <div>
              <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-200 mb-8 animate-fade-in">
          Simplify your travel using our trip planner AI
        </h1>
        <p className="max-w-4xl mx-auto text-gray-100 mb-12 leading-relaxed">
        MhxAi simplifies vacation planning by finding the best destinations, perfect stays, and exciting activities tailored to your preferences.
Forget the hassle of managing multiple tabs and apps—everything you need is in one place.
Input your details like budget, destination, and activities, and let MhxAi craft a personalized itinerary.
Plan smarter, travel better, and make every trip unforgettable with MhxAi
        </p>
        <button className="bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-800 transition-colors transform hover:scale-105 duration-200 flex items-center gap-2 mx-auto">
          Plan a new trip
          <Send size={18} />
        </button>
      </div>
    </div>
  )
}

export default TravelPlanner