import React from 'react'

import Hero from '../components/Hero'

import BestSellers from '../components/BestSellers'
import LatestCollection from '../components/LatestCollection'
import WhyDiffer from '../components/WhyDiffer'
import SubscribeSection from '../components/SubscribeSection'

function Home() {
  return (
    <div>
    
    <Hero/>
    <LatestCollection/>
   <BestSellers/>
   <WhyDiffer/>
   <SubscribeSection/>
      </div>
  )
}

export default Home
