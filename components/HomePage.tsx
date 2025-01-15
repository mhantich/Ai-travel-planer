import React from 'react'
import Hero from './Hero'
import PopularTrips from './PopularTrips'
import TravelPlanner from './TravelPlanner'
import Testimonials from './Testimonials'
import LogoSection from './LogoSection'

function HomePage() {
  return (
    <div>
        <Hero/>
        <PopularTrips/>
        <TravelPlanner/>
        <Testimonials/>
        <LogoSection/>
    </div>
  )
}

export default HomePage