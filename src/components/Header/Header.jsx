import React from 'react'
import './header.css'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {FaLaptopCode} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {GrConnectivity} from 'react-icons/gr'

import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineDribbble} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

 const socialsData = [
  {id: 1, link: 'https://instagram.com/owusu_bk', icon: <AiOutlineInstagram/>, text:'Instagram'},
  {id: 2, link: 'https://twitter.com/owusu_bk', icon: <AiOutlineTwitter/>, text:'Twitter'},
  {id: 3, link: 'https://dribbble.com/Bk_owusu', icon: <AiOutlineDribbble/>, text:'Dribble'},
  {id: 4, link: 'https://bk-owusu.github.io', icon: <AiOutlineGithub/>, text:'Github'}
]

const Header = () => {
  
  return (
    <section className="header sm:h-[calc(100vh-5rem)]" id='#'>
      <div className="header_icons w-[100vw] flex justify-center mt-[7%]">
        <div className='flex flex-row'>
        <h2 className='textright self-center text-[6vmin]'><HiUsers/></h2>
          <h2 className='fade-in text-[15vmin] animate-bounce'><FaLaptopCode/></h2>
          <h2 className='textleft self-center text-[6vmin]'><HiUsers/></h2>
        </div>
      </div>
      <div className="container sm:mt-[5%] sm:pl-[12vw] mt-[10vh] overflow-hidden sm:overflow-visible">
        <p className='textright text-[var(--color-primary)] text-xl md:text-2xl mb-2 z-20'>Hi, my name is</p>
        <p className='textleft text-[var(--color-light2)] text-3xl sm:text-6xl font-bold'> Bismark K. Owusu</p>
        <p className='textright text-3xl sm:text-6xl font-bold py-2'>I'm a full Stack Developer</p>
        <p className='fade-in text-[0.9rem] sm:text-lg py-4 sm:w-[80%]'>You are a click away from building your own amazing website. Just send me the details of your project for a quick morden and highly responsive web Apps today!</p>
        <div className="header_cta flex gap-[2rem] mt-1 justify-center sm:justify-normal">
            <a href="#contact" className='btn primary'>Let's Talk</a>
            <a href="#portfolio" className='btn group'>My Work <HiArrowNarrowRight className='text-lg group-hover:rotate-90'/></a>
          </div>
      </div>
      <div className="header_socials fixed z-20 top-[40%] xl:bottom-[30vh] md:bottom-[40vh] hidden md:block">
          {
              socialsData.map((item)=> 
              <li key={item.id} className='w-[8rem] ml-[-5.5rem] hover:ml-[0]'>
              <a className='flex items-center justify-between py-2 bg-[var(--color-bg4)]'
              href={item.link} 
              target='_blank' 
              rel='noopener noreferrer'>
              <span className='pl-[5px]'>{item.text}</span> 
              <span className='text-2xl mr-2'>{item.icon}</span></a>
              </li>)
            }
      </div>
    </section>
  )
}

export default Header