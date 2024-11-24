import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from "axios";
import { Link } from 'react-router-dom'
function Course() {
    const [book, setBook]=useState([]);
    useEffect(()=>{
        const getbook=async()=>{
            try {
            const res=await axios.get("https://book-nexus-api.vercel.app/book");
            console.log(res)
            setBook(res.data);
            } catch (error) {
                console.log("Error",error);
            }
        }
        getbook();

    },[]);
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 top-0 right-0'>
            <div className='mt-28 items-center justify-center text-center'>
                <h1 className='text-2xl font-semibold md:text-4xl'> We're delighted to have you<span className='text-pink-500'>Here!</span></h1>
                <p className='mt-12'>All content available on this website, including but not limited to eBooks, audiobooks, images, logos, and text, is either owned by BookNexus or licensed for use on this platform. Unauthorized reproduction, distribution, or commercial use of any content is strictly prohibited and may result in legal action. Users are responsible for ensuring that downloaded materials are used solely for personal, non-commercial purposes, in compliance with copyright laws.</p>
                <Link to="/">
                <button className='bg-pink-500 text-white px-4 py-2  rounded-md hover:bg-pink-700 duration-300 mt-6'>Back </button>
                </Link>
            
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    book.map((item)=>
                    <Cards key={item.id} item={item}/>)
                }
            </div>
        </div>
    </>
  )
}

export default Course
