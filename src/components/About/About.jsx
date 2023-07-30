import React from 'react'
import './about.css'
import BK from '../../assets/bk_owusu.jpg'
import {AiOutlineDownload} from 'react-icons/ai'
import CV from '../../assets/cv.pdf'

const About = () => {
  return (
    <section id='about' className="about" >
      <h2 className='font-bold mb-[4rem]'>About <span className='text-[var(--color-light2)]'>Me</span></h2>
      <div className="container grid md:grid-cols-2 gap-[1rem]">

        <div className="about_left flex justify-center items-center hover:opacity-80">
         <div className="about_img w-[12rem] md:w-[15rem] lg:w-[25rem]">
          <img src={BK} alt="about-me"/>
          <div className="about_img_spin"></div>
         </div>
        </div>

        <div className="about_right overflow-hidden">
          <p className='fader mb-[1rem] text-[0.9rem] sm:text-xl'>
            Building projects my clients love has always been one of my by passions. Beign in the web development industry for a year and serving a lot of clients, I'm always motivated to do exceedenly more.
          </p>
          <p className='fade-in sm:text-xl text-[0.9rem]'>
            Hi, my name is Bismark Kofi Owusu from Accra, Ghana. I'm a full-stack web. My top priority is to get your business online the right way, giving you industry-standard design and all the functionalities you need to operate smoothly online. Get in touch today with me today and let's start your project.  
          </p>
          <a href={CV} download className='btnFader btn primary mt-[1.5rem] sm:mt-[2rem]'>Download CV <AiOutlineDownload className='animate-bounce'/></a>
        </div>

      </div>
    </section>
  )
}

export default About