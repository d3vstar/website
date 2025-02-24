import React from 'react'
import Kaizen from './Kaizen/Kaizen'
import Registration from './Registration/Registration'

const Home = () => {
  return (
    <div className='overflow-hidden'>
       <Kaizen />
       <Registration />
    </div>
  )
}

export default Home