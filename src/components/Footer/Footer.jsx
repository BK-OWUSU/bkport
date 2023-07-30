import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineDribbble} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

 const footerData = [
  {id: 1, link: 'https://instagram.com/owusu_bk', icon: <AiOutlineInstagram/>},
  {id: 2, link: 'https://twitter.com/owusu_bk', icon: <AiOutlineTwitter/>},
  {id: 3, link: 'https://dribbble.com/Bk_owusu', icon: <AiOutlineDribbble/>},
  {id: 4, link: 'https://bk-owusu.github.io', icon: <AiOutlineGithub/>}
]

const Footer = () => {
  return (
    <footer className='bg-[var(--color-bg)] w-[100vw] h-[10vh]'>
      <div className="container flex flex-row justify-center items-center gap-3">
        {
          footerData.map(footer => (
            <a key={footer.id} href={footer.link} target='_blank'>
              <span className='fader btn primary'>{footer.icon}</span>
            </a>
          ))
        }
      </div>
    </footer>
  )
}

export default Footer