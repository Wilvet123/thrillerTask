import React, { useState } from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineCalendar} from 'react-icons/ai'
import {CiLocationOn, CiUser} from "react-icons/ci"
const Dropdowns = () => {
    const [isClicked, setClicked] = useState(false)
  return (
    <div className='relative mx-6 '>
    <img 
    className='rounded-2xl w-full h-48 mt-6 object-cover'
    src='https://images.pexels.com/photos/6969824/pexels-photo-6969824.jpeg?auto=compress&cs=tinysrgb&w=1600'/>
       <div className='px-5 py-2 bg-white flex items-center rounded-2xl  mx-9 top-44 absolute'>
        <div className="relative inline-block">
            <div 
            className='flex justify-between items-center gap-12 pr-5  text-gray-400 border-r-[1px]'
            onClick={() => setClicked(!isClicked)}>
                <button className='flex items-center gap-1' ><CiLocationOn size={24}/>Where are you going?</button>
                <MdKeyboardArrowDown size={25} className='text-black'/>
            </div>
 
            <div className={`absolute overflow-auto w-full p-2 rounded-lg top-10 bg-gray-300 flex flex-col ${isClicked ? "block" : "hidden"}`}>
                <a href="#">Dashboard</a>
                <a href="#">Setting</a>
                <a href="#">Logout</a>
            </div>
        </div>
        
            <div className='flex justify-between items-center px-5 gap-7 border-r-[1px]'>
            <div className='text-gray-300 flex items-center gap-1 mr-4'>
            <AiOutlineCalendar/>
                <h1>Check-in Date</h1>
            </div>
                <MdKeyboardArrowDown size={25}/>
            </div>
        <div className='relative'>
        <select name="languages" id="lang" className=' py-3 bg-white px-7 ml-1   '>
        <option value="1">1 adult</option>
        <option value="2">2 adults</option>
        <option value="3">3 adults</option>
        <option value="4">4 adults</option>
        <option value="5">5 adults</option>
      </select>
      <CiUser size={23} className='absolute left-2 bottom-3'/>
        </div>
       
        <button className='px-9 py-3 ml-11  text-white bg-blue-900 rounded-2xl'>Search</button>
        </div>
    </div>
  )
}

export default Dropdowns