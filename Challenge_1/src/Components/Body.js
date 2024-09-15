import React from 'react'

const Body = () => {
  return (
    <div className='flex p-8 ms-8'>
        <div className='w-1/2 ml-20'>
            <h1 className='text-9xl font-bold'>YOUR FEET DESERVETHE BEST</h1>
            <p className='text-gray-500'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div>
                <button className='bg-red-700 p-2 border-red-700 border-2 text-white text-xl m-2'>SHOP NOW</button>
                <button className='text-gray-600 p-2 border-black border-2 text-xl m-2'>CATEGORY</button>
            </div>
            <div>
                <h1>Also Available On</h1>
            </div>
            <div className='flex'>
                <img src='download (2).png' alt='hello' className='p-1'></img>
                <img src='download (3).png' alt='hello' className='p-1'></img>
            </div>
        </div>
        <div>
            <img src='/download.png' alt='hello' className=' pl-20 ml-10'></img>
        </div>
    </div>
  )
}

export default Body