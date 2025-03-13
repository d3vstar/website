import React from 'react'
import Kaizen from './Kaizen/Kaizen'
import Registration from './Registration/Registration'
import Review from './Review/Review'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div className='overflow-hidden'>
       <Kaizen />
       <Review />
       <Registration />
       <Footer />
    </div>
  )
}

export default Home