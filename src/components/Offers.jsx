import React from 'react'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {AiOutlineHeart} from 'react-icons/ai'

const offersItems = [
  {
    image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1600",
    hotel:" 7Seasons Apartments",
    location: "Kensington/London",
    price:"$65,00"
  },
  {
    image:"https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600",
    hotel:" Along With The Villa",
    location: "Hungary/Budapest",
    price:"$65,00"
  },
  {
    image:"https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&w=1600",
    hotel:" Resort and Recreation",
    location: "Williamstreet/Boxon",
    price:"$65,00"
  },
  {
    image:"https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1600",
    hotel:"Beautiful and Classy",
    location: "Citadines Opera Paros/France",
    price:"$65,00"
  },
  {
    image:"https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg?auto=compress&cs=tinysrgb&w=1600",
    hotel:"Permanent Peace",
    location: "Sugar Apartments/Brazil",
    price:"$79,00"
  },
]
const Offers = () => {
  return (
    <div className='mx-6'>
    <div className='flex justify-between items-center text-blue-950'>
    <h1 className='text-xl  py-3 text-left'>Best Offers</h1>
      <h5>View All</h5>
    </div>
    <div className='flex gap-5'>
    {
      offersItems.map((item, index) =>{
        return(
          <div className='bg-white text-start w-[22%] p-2 h-52 rounded-3xl'>
        <img
            className='object-center w-full  h-24 rounded-3xl '
            src={item.image} />
          <p className='text-sm to-blue-950 pt-4 pb-1'>{item.hotel}</p>
          <div className='flex text-gray-400 gap-1 items-center'>
          <HiOutlineLocationMarker size={12} />
          <p className='text-[11px]'>{item.location}</p>
          </div>
         
          <div className='flex justify-between py-2'>
          <p className='text-blue-950 text-sm font-medium'> {item.price} <span className='text-gray-300'>/ night</span> </p>
          <AiOutlineHeart className=' rounded-xl text-gray-500 text-[25px] border border-gray-300 p-[3px]'/>
          </div>
          
        </div>
   
        )
      })
    }
    </div> 
    </div>
  )
}

export default Offers