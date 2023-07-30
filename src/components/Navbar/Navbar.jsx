import React from 'react'
import './navbar.css'
import { navData } from './navData'
import BkIcon from '../../assets/bk_b.png'

import {BiHome, BiSolidUserPin, BiCodeBlock, BiLaptop, BiMessageAltDots} from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav className='fixed w-full h-[5rem] grid place-items-center z-10 shadow-md shadow-[#040c16]'>
      <div className="nav_container container flex justify-between items-center">
        <a href="index.html">
          <h2 className='flex flex-row justify-center items-center relative md:text-[var(--color-light2)]'>
            <img className='w-[2.1rem] sm:w-[3rem]' src={BkIcon} alt="bk_Icon" />
          </h2>
        </a>
        <ul className="menu hidden md:flex gap-[3rem] text-[1.1rem]">
          {
            navData.map((links)=>
            <li key={links.id}><a href={links.link}>{links.title}</a></li>
            )
          }
        </ul>
        {/* <button><IoIosColorPalette className='text-[2rem] text-[var(--color-light2)]'/></button> */}
        <div className="small_menu md:hidden flex flex-row gap-[1.2rem] text-2xl">
          <a href="#"><BiHome/></a>
          <a href="#about"><BiSolidUserPin/></a>
          <a href="#experience" ><BiCodeBlock/></a>
          <a href="#work"><BiLaptop/></a>
          <a href="#contact"><BiMessageAltDots/></a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar