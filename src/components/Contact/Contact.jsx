import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {PiMessengerLogoBold} from 'react-icons/pi'
import {BsWhatsapp} from 'react-icons/bs'

const contactData = [
  {id: 1, pic:<MdOutlineEmail/>, title: 'Email', account: 'owusubk416@gmail.com' ,link: 'mailto:owusubk416@gmail.com' },
  {id: 2, pic:<PiMessengerLogoBold/>, title: 'Messenger', account: 'Bismark_Okyere' ,link: 'https://m.me/bismark.okyere.505' },
  {id: 3, pic:<BsWhatsapp/>, title: 'WhatsApp', account: "Let's Chat" ,link: 'https://wa.me/0547270155' },
]

const Contact = () => {
  return (
    <section id="contact">
      <h2 className='fade-in font-bold'><span className='text-[var(--color-light2)]'>Contact</span> Me</h2>
      <p className='fade-in text-[0.9rem] sm:text-lg'>Get in touch</p>
      <div className="container grid sm:grid-cols-[30%,60%] gap-[2rem]">
        <div className="contact_left flex flex-col gap-[1rem]">
          {
            contactData.map((contact)=>(
              <a key={contact.id} href={contact.link} target='_blank' rel='noreferrer'>
              <article className='btnFader bg-[var(--color-bg4)] rounded-lg p-[1.2rem] grid place-items-center'>
                <span className='text-[var(--color-light2)] text-[1.5rem]'>{contact.pic}</span>
                <h4 className='font-bold text-[var(--color-light2)] mb-2 mt-[1.5rem]'>{contact.title}</h4>
                <h5 className='text-[var(--color-light)] text-[0.9rem] md:[1.5rem]'>{contact.account}</h5>
              </article>
              </a>
            ))
          }
        </div>

      {  <div className="contact_right">
          <form 
          action ="https://getform.io/f/924832c6-1ef2-4169-9c5d-8af5d6ebb446"
          method='POST' 
          className='flex flex-col gap-[1.2rem]'>
            <input className='fade-in' type="text" name='text' placeholder='Enter Your Fullname' required/>
            <input className='fade-in' type="email" name='email' placeholder='Enter Your Email' required/>
            <textarea className='fade-in' name="message" rows="7" placeholder='Enter Message' required></textarea>
            <button type="submit" className='btn primary'>Send Message</button>
          </form>
        </div>}

      </div>
    </section>
  )
}

export default Contact
