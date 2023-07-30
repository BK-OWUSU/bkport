import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {FaReact,FaGithub} from 'react-icons/fa'
import {SiTailwindcss, SiJavascript} from 'react-icons/si'

const Experience = () => {
  return (
  <section className='experience' id='experience'>
    <h2 className='font-bold fade-in'><span className='text-[var(--color-light2)]'>My</span> Experience</h2>
    <p className='fade-in text-[0.9rem] sm:text-xl'>I have worked with the following technologies</p>
    <div className="container grid grid-cols-2 gap-[1.5rem] sm:gap-[3rem] sm:grid-cols-3">
      
      <article className='btnFader flex flex-col gap-[1rem] justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <span className='text-[15vmin] text-[#ff6600]'><AiFillHtml5/></span>
        <p className='text-lg mb-[1rem]'>HTML</p>
      </article>
      
      <article className='btnFader flex flex-col gap-[1rem] justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <span className='text-[15vmin] text-[#33ccff]'><DiCss3/></span>
        <p className='text-lg mb-[1rem]'>CSS</p>
      </article>
      
      <article className='btnFader flex flex-col gap-[1rem] justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <span className='text-[15vmin] text-[rgb(14,165,233)]'><FaReact/></span>
        <p className='text-lg mb-[1rem]'>REACT</p>
      </article>
      
      <article className='btnFader flex flex-col gap-[1rem] justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <span className='text-[15vmin] text-[rgb(226,232,240)]'><FaGithub/></span>
        <p className='text-lg mb-[1rem]'>GITHUB</p>
      </article>
      
      <article className='btnFader flex flex-col gap-[1rem] justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <span className='text-[15vmin] text-[#3399ff]'><SiTailwindcss/></span>
        <p className='text-lg mb-[1rem]'>TAILWIND</p>
      </article>
      
      <article className='btnFader flex flex-col gap-[1rem] justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        <span className='text-[15vmin] text-[#ffad33]'><SiJavascript/></span>
        <p className='text-lg mb-[1rem]'>JAVASCRIPT</p>
      </article>
      
    </div>
  </section>
  )
}

export default Experience