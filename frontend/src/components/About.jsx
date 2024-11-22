import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
   <>
    <section className='mt-20 ml-20'>
    <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold  sm:text-4xl">About Us</h2>
                <p class="mt-4  text-lg">Welcome to BookNexus, where stories come to life! Since 2024, we've been connecting readers with tales that inspire, educate, and entertain.Our mission is to create a haven for readers of all ages, offering a curated selection of books to ignite imaginations and enrich lives.From bestsellers to hidden gems, we take pride in offering a collection that caters to every reader's taste. Explore our exclusive section for indie authors and rare editions.Our journey began as a small passion project in Lucknow. Over the years, we've grown into a thriving community space for book enthusiasts worldwide.</p>
                <div class="mt-8">
                    <Link to="/Contacts" class="text-blue-500 hover:text-blue-600 font-medium">Get in Touch
                        <span class="ml-2">&#8594;</span></Link>
                </div>
            </div>
            <div class="mt-12 md:mt-0">
                <img src="https://media.istockphoto.com/id/1160444891/photo/multi-ethnic-group-of-students-in-a-library.jpg?s=612x612&w=0&k=20&c=yTu_0zaotlzlpOjPjmqDMkxYKVa9XBdfrUooffpIq8Q=" alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>
   </>
  )
}

export default About