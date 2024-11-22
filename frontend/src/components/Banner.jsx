import React from 'react'
import banner from '../../public/open_book.png'
function Banner() {
  
  return (
    <>
        <div  className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col my-10 md:flex-row justify-items: center'>
          <div className=' order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
          <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>Hello, Welcomes to <span className='text-pink-500'>BookNexus</span>  for learn something new everyday!!!</h1>
            <p className='text-xl'>
            Unlock the Power of Knowledge.
            </p>
            
          </div>
         
          </div>
          
          <div className=' order-1 w-full md:w-1/2 '>
         <img src={banner} className='w-92 h-92 margin-left: 0.25rem' alt=""/>
          </div>
        </div>
    </>
  )
}

export default Banner