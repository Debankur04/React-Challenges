import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-8'>
        <div>
            <img src='\download (1).png' alt='hello'></img>
        </div>
        <div className='flex justify-around '>
            <h1 className='text-xl pl-8 font-semibold'>Menu</h1>
            <h1 className='text-xl pl-8 font-semibold'>Location</h1>
            <h1 className='text-xl pl-8 font-semibold'>About</h1>
            <h1 className='text-xl pl-8 font-semibold'>Contact</h1>
        </div>
        <div>
            <button className='bg-red-700 p-2 text-white text-xl'>LOGIN</button>
        </div>
    </div>
  )
}

export default Header