import React from 'react'
import Navbar from '../components/Navbar'
import Dropdowns from '../components/Dropdowns'
import Destinations from '../components/Destinations'
import Offers from '../components/Offers'

const Main = () => {
  return (
    <div className='h-screen w-[80%] '>
        <Navbar/>
        <Dropdowns/>
        <Destinations/>
        <Offers/>
    </div>
  )
}

export default Main