import { useEffect, useState } from 'react'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/6-contact/Contact'
import Footer from './components/7-footer/Footer'
import ArticlePage from './components/4-Articles/ArticlePage'
import StudiesPage from './components/5-studies/StudiesPage'


function App() {
  useEffect( ()=> {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300 ) {
              setShowScrollbtn(true)
      }else{
              setShowScrollbtn(false)
      }
      
    }
    )
  } ,[]);

  const [ShowScrollbtn, setShowScrollbtn] = useState(false)

  return (
    <div id='up' className='container'>
      <Header />

      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <ArticlePage/>
      <div className='divider' />
      <StudiesPage />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />
      
      <a style={{opacity : ShowScrollbtn ? 1 : 0 , transition : "1s" }} href="#up">
        <button className='icon-chevron-up scroll2top'></button>
      </a>
     
    </div>
  )
}

export default App
