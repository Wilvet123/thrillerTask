import {React, useState} from 'react'
import {CiBellOn} from 'react-icons/ci'
import {BiSearch} from 'react-icons/bi'


const Navbar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    
    <div className='flex justify-between py-3 px-7 mx-6 bg-white rounded-2xl'>
        <div className='relative'>
        <input
         type='search' 
         placeholder='Search any things ...'
          className='border-gray-300  border px-11 py-3 rounded-2xl'
         />
         <BiSearch size={26} className='absolute text-gray-300 top-[14px] left-4'/>
        </div>
        
         <div className='flex items-center'>
         <p className='mr-5'>{currentDate.toDateString()}</p>
         <sup className='rounded-full mr-3 text-xs bg-red-600 text-white py-[3px] px-2'>3</sup>
        <CiBellOn className=' rounded-xl  text-[30px] border border-gray-300 p-[3px]'/>
         </div>
       
    </div>
  )
}

export default Navbar