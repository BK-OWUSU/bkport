import React,{useEffect} from 'react'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    
    const all_P = document.querySelectorAll('p');
    const all_ALinks = document.querySelectorAll('a');
    const all_h3s = document.querySelectorAll('h3');
    const all_h2s = document.querySelectorAll('h2');
    const all_Divs = document.querySelectorAll('div');
    const all_Articles = document.querySelectorAll('article');
    const inputs = document.querySelectorAll('input');
    const textareas = document.querySelector('textarea');
    const spans = document.querySelectorAll('span');

    const observeComponents = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting) {
            entry.target.classList.add('appear');
          } else {
            entry.target.classList.remove('appear');
          }
        })
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '0px',
    });

    //P-tags
    all_P.forEach(item =>{
      observeComponents.observe(item);
    }) 

    //h2-tags
    all_h2s.forEach(item => {
      observeComponents.observe(item);
    })

    //h3-tags
    all_h3s.forEach(item => {
      observeComponents.observe(item);
    })

    //a Links-tags
    all_ALinks.forEach(item => {
      observeComponents.observe(item);
    })

    //Divs
    all_Divs.forEach(item => {
      observeComponents.observe(item);
    })

    //Articles
    all_Articles.forEach(item => {
      observeComponents.observe(item);
    })

    //Forms
    inputs.forEach(item => {
      observeComponents.observe(item);
    })  

    observeComponents.observe(textareas);

    
    spans.forEach(item => {
      observeComponents.observe(item);
    })  


  },[])

  return (
    <main>
     <Navbar/>
     <Header/>
     <About/>
     <Experience/>
     <Work/>
     <Contact/>
     <Footer/>
    </main>
  )
}

export default App
