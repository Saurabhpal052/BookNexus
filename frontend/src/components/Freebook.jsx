import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Cards from './Cards';
export const Freebook = () => {
   const  [book,setBook]=useState([]);
     useEffect(()=>{
      const getbook=async()=>{
        try {
          const results=await axios.get("https://book-nexus-api.vercel.app/book");
          setBook(results.data);
          
          
        } catch (error) {
          console.log("Error generating during fetch",error);
        }
      }
      getbook();
     },[]);
     console.log(book)
     
     const filterData=book.filter((data)=>data.category=="Free")
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
   <div>
   <h1 className='font-semibold text-xl pb-2 '> Free offered course</h1>
   <p> You Can access these free books, Which is provided by us. </p>
   </div>
   
   <div>
      <Slider {...settings}>
        
          {filterData.map((item)=>
          <Cards item={item} key={item.id}/>
          )}
        
      </Slider>
    </div>
</div>
   </>
  )
}
export default Freebook;
