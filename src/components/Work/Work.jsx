import React from 'react'
import './work.css'
import IMG1 from '../../assets/bk_socials.png'
import IMG2 from '../../assets/bk_oams.png'
import IMG3 from '../../assets/bk_portfolio.png'
import IMG4 from '../../assets/bk_Intersect_obs.png'
import IMG5 from '../../assets/project1.png'
import IMG6 from '../../assets/project4.png'

const workData = [
  {id: 1, img: IMG1, title:'HTML, CSS,  JavaScript', linkDemo: 'https://www.bk-owusu.github.io/bk-socials',linkGit: 'https://www.github.com/BK-OWUSU/bk-socials', desc: 'A cool and highly responsive social media website created using HtML, JavaScipt and CSS'},
  {id: 2, img: IMG2, title:'React', linkDemo: 'https://www.bk-owusu.github.io/oams',linkGit: 'https://www.github.com/BK-OWUSU/oams', desc: 'A single page school website project design in react with user-friendly and beautifull interface'},
  {id: 3, img: IMG3, title:'React', linkDemo: 'https://www.bk-owusu.github.io/bmark',linkGit: 'https://www.github.com/BK-OWUSU/bmark', desc: 'A nice and cool user-friendly portfolio website with theme customization created using React'},
  {id: 4, img: IMG4, title:'HTML, CSS,  JavaScript', linkDemo: 'https://www.bk-owusu.github.io/inter-obs',linkGit: 'https://www.github.com/BK-OWUSU/inter-obs', desc: 'A simple and highly responsive portfolio website created using HtML, JavaScipt and CSS'},
  {id: 5, img: IMG5, title:'HTML, CSS,  JavaScript', linkDemo: 'https://www.bk-owusu.github.io/bk-owusu.github.io',linkGit: 'https://www.github.com/BK-OWUSU/BK-OWUSU.github.io', desc: 'A multipage and highly responsive educational website design using HtML, JavaScipt and CSS'},
  {id: 6, img: IMG6, title:'HTML, CSS,  JavaScript', linkDemo: 'https://www.bk-owusu.github.io',linkGit: 'https://www.bk-owusu.github.io', desc: 'This project is currently under development. You can visit my github repository for more updates'},
]

const Work = () => {

  return (
    <section id="work">
      <h2 className='fader font-bold'>Recent <span className='text-[var(--color-light2)]'>Works</span></h2>
      <p className='fader text-[0.9rem] sm:text-xl'>Chect out just a few of some of my recent works.Hover on project for live demo or to visit my github repository</p> 
      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-[1rem] sm:gap-[2rem]">
        {
          workData.map((workD)=>(
          <article key={workD.id} className='fade-in work_box relative bg-[var(--color-bg4)] rounded-lg overflow-hidden'>
              <div className="work_content">
                <div className="work_img">
                  <img src={workD.img}/>
                </div>
                <p className='my-3 text-[0.85rem] sm:text-lg text-center text-[var(--color-light2)]'>{workD.desc}</p>
              </div>
               <div className="work_hover flex justify-center items-center flex-col gap-[3rem]">
                <h5 className='font-bold text-[0.75rem] sm:text-lg text-[var(--color-primary)]'>{workD.title}</h5>
                <div className="project_links flex gap-2 md:gap-4 px-2">
                    <a className='btn first'href={workD.linkDemo} target='_blank' >Demo</a>
                    <a className='btn primary' href={workD.linkGit} target='_blank'>Github</a>
                </div>
              </div>

        </article>
          ))
        }
      </div>
    </section>
  )
}

export default Work