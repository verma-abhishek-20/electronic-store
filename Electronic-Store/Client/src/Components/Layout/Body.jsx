import React from 'react'
import HeroSction from './HeroSction'
import FeatureProduct from './FeatureProduct'
import ShopCategories from './ShopCategories'
import AirDops from './AirDops'
import SonyHeadset from './SonyHeadset'
import OurSpecialOffer from './OurSpecialOffer'
import FAQ from './FAQ'
import SubscribeNews from './SubscribeNews'

const Body = () => {
  return (
    <div className=' px-20 bg-[#F4F2F0] '>
       <HeroSction />
      <FeatureProduct />
      <ShopCategories />
      <AirDops />
      <SonyHeadset />
      <OurSpecialOffer />
      <FAQ />
      <SubscribeNews />
    </div>
  )
}

export default Body