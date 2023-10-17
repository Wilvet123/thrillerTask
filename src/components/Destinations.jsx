import React, {useState} from 'react'
import {FaStar} from 'react-icons/fa'
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from 'react-icons/md'
const items = [
  {
    image: "https://images.pexels.com/photos/2272939/pexels-photo-2272939.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country:"Montmarte, France",
    rating: "4/5",
    details:"Visiting the best tourist areas chosen by the audience",
    price: "$450,000,00",

  },
 
  {
    image: "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country:"London, UK",
    rating: "5/5",
    details:"London is one of the most ebautiful places to visit that...",
    price: "$360,000,00",

  },
  {
    image: "https://images.pexels.com/photos/17318624/pexels-photo-17318624/free-photo-of-aerial-view-of-zinciriye-medresesi-mardin-turkey.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country:"Instanbul, Turkey",
    rating: "5/5",
    details:"One of our best-selling tours to Turkey and visiting its...",
    price: "$450,000,00",

  },

];
const destItems = [
  {
    image: "https://images.pexels.com/photos/17318624/pexels-photo-17318624/free-photo-of-aerial-view-of-zinciriye-medresesi-mardin-turkey.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country:"Instanbul, Turkey",
    rating: "5/5",
    details:"One of our best-selling tours to Turkey and visiting its...",
    price: "$450,000,00",

  },
  {
    image: "https://images.pexels.com/photos/2272939/pexels-photo-2272939.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country:"Montmarte, France",
    rating: "4/5",
    details:"Visiting the best tourist areas chosen by the audience",
    price: "$450,000,00",
  },
  
  {
    image: "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country:"London, UK",
    rating: "5/5",
    details:"London is one of the most ebautiful places to visit that...",
    price: "$360,000,00",

  },
]

const lastItems = [
  {
    image: "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country:"London, UK",
    rating: "5/5",
    details:"London is one of the most ebautiful places to visit that...",
    price: "$360,000,00",

  },
  {
    image: "https://images.pexels.com/photos/17318624/pexels-photo-17318624/free-photo-of-aerial-view-of-zinciriye-medresesi-mardin-turkey.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country:"Instanbul, Turkey",
    rating: "5/5",
    details:"One of our best-selling tours to Turkey and visiting its...",
    price: "$450,000,00",
  },
  {
    image: "https://images.pexels.com/photos/2272939/pexels-photo-2272939.jpeg?auto=compress&cs=tinysrgb&w=1600",
    country:"Montmarte, France",
    rating: "4/5",
    details:"Visiting the best tourist areas chosen by the audience",
    price: "$450,000,00",
  },
]
const Destinations = () => {
  const [isActive, setActive] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0);
 
  const handleNextClick = () => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex + 1);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex - 1);
  };
  const renderDots = () => {
    
    return items.map((item, index) => (
      <div
        key={item.id}
        
        className={`w-3 h-3 rounded-full border p-1 ${activeIndex === index ? 'bg-blue-950' : ' bg-gray-200'}`}
        onClick={() => setActiveIndex(index)}
      />
    ));
  };

  return (
    <div className='ml-6'>
      <div className="flex justify-between pb-6 pt-16">
      <h1 className='text-xl text-blue-950  text-left'>Trending Destinations</h1>
      <div>
      <button  className=' rounded-xl mr-3 text-[23px] border border-blue-950  p-[3px]' 
        onClick={handlePrevClick}><MdOutlineKeyboardArrowLeft/></button>
        <button  className=' rounded-xl mr-6 text-[25px]  bg-blue-950 text-white p-[3px]'
        onClick={handleNextClick}><MdOutlineKeyboardArrowRight/></button>
      </div>
       
      </div>
   
    <div className='flex gap-4 overflow-hidden '>
    {items.map((item, index) =>{
      return(
        <div key={item.id} className= {`flex h-36 w-[]  py-3 px-3 gap-3 rounded-xl bg-white ${activeIndex === index ? 'z-10 opacity-100' : 'hidden'}`}>
            <img
            className='object-center w-[105px]  h-[105px] rounded-3xl '
             src={item.image}/>
            <div className='text-start'>
                <div className='flex justify-between gap-20'>
                    <h1 className='font-bold flex my-2'>{item.country}</h1>
                    <p className='flex items-center gap-1 text-sm'><span><FaStar className='text-yellow-400'/></span>{item.rating}</p>
                </div>
                <p className='text-gray-300 text-xs'>{item.details}</p>
                  <p className='text-blue-950 font-medium'>{item.price}</p>
            </div>
        </div>
      )
    })
    }
    {destItems.map((item, index) =>{
      return(
        <div key={item.id} className= {`flex h-36 w-[]  py-3  px-3 gap-3 rounded-xl bg-white ${activeIndex === index ? 'z-10 opacity-100' : 'hidden'}`}>
            <img
            className='object-center w-[105px]  h-[105px] rounded-3xl '
             src={item.image}/>
            <div className='text-start'>
                <div className='flex justify-between gap-20'>
                    <h1 className='font-bold flex my-2'>{item.country}</h1>
                    <p className='flex items-center gap-1 text-sm'><span><FaStar className='text-yellow-400'/></span>{item.rating}</p>
                </div>
                <p className='text-gray-300 text-xs'>{item.details}</p>
                  <p className='text-blue-950 font-medium'>{item.price}</p>
            </div>
        </div>
      )
    })
    }
    {lastItems.map((item, index) =>{
      return(
        <div key={item.id} className= {`flex h-36 w-[]  py-3  px-3 gap-3  rounded-xl bg-white ${activeIndex === index ? 'z-10 opacity-100' : 'hidden'}`}>
            <img
            className='object-center w-[105px]  h-[105px] rounded-3xl '
             src={item.image}/>
            <div className='text-start'>
                <div className='flex justify-between gap-20'>
                    <h1 className='font-bold flex my-2'>{item.country}</h1>
                    <p className='flex items-center gap-1 text-sm'><span><FaStar className='text-yellow-400'/></span>{item.rating}</p>
                </div>
                <p className='text-gray-300 text-xs'>{item.details}</p>
                  <p className='text-blue-950 font-medium'>{item.price}</p>
            </div>
        </div>
      )
    })
    }
  
    
    </div>

    <div
   
    className="flex gap-1 pt-5 items-center justify-center">{renderDots()}</div>
    </div>
  )

}

export default Destinations