import React from 'react'
import {TbSettings2} from 'react-icons/tb'
import {AiOutlineHeart, AiFillHome} from 'react-icons/ai'
import {PiSquaresFourLight, PiEnvelopeSimple} from 'react-icons/pi'
import {FaRegEdit} from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'

const sideItems = [
  {
    icon: <AiFillHome/> ,
    name: "Dashboard"
  },
  {
    icon: <PiSquaresFourLight/> ,
    name: "Explore City"
  },
  {
    icon: <PiEnvelopeSimple/> ,
    name: "Ticket"
  },
  {
    icon: <AiOutlineHeart/> ,
    name: "Favorites"
  },
  {
    icon: <TbSettings2/> ,
    name: "Setting"
  },
]
const Sidebar = () => {
  return (
    <div className='h-screen bg-white w-[20%] rounded-3xl shadow-md flex items-center flex-col'>
    <h1 className='text-blue-950 font-bold text-2xl py-6'>MimaBooking</h1>
    <div className='relative w-32 h-32 rounded-full bg-slate-300 '>
      <img 
      className='w-32 h-32 rounded-full object-cover p-[6px] border border-blue-950'
      src="https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
    <FaRegEdit className=' rounded-xl absolute left-[40%] top-28 text-[25px] text-white bg-blue-950 border border-blue-950 p-[3px]'/>
    <h1 className='text-blue-950 py-6 text-2xl'>Ilia Jan</h1>
    </div>
    <div className='mt-40'>
    {
      sideItems.map((item, index) => {
        return(
          <div className='flex gap-4 mb-6 items-center text-blue-950 text-start'>
            {item.icon}
            <h1>{item.name}</h1>
          </div>

        )
      })
    }
  
    </div>
   <div className='flex gap-2 text-blue-950 pt-64 items-center'>
   <MdKeyboardArrowRight className=' rounded-xl  text-[25px] border border-blue-950  p-[2px]'/>
    <h4>Logout</h4>
   </div>
    </div>
  )
}

export default Sidebar