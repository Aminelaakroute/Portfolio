import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'



function App() {

  return (
    <div id='up' className='container'>
      <Header />
  
      <Hero />
      <div className='divider'/>
      <Main />
      <div className='divider'/>
      <Contact />
      <div className='divider'/>
      <Footer />
      <a href="#up">
      <button className='icon-chevron-up scroll2top'></button>
      </a>
    </div>
  )
}

export default App
