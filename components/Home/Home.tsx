import React from 'react'
import Kaizen from './Kaizen/Kaizen'
import Registration from './Registration/Registration'
import Review from './Review/Review'

const Home = () => {
  return (
    <div className='overflow-hidden'>
       <Kaizen />
       <Review />
       <Registration />
    </div>
  )
}

export default Home