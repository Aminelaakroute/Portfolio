import { useEffect, useState } from 'react'
import Header from './components/1-header/Header'
import ArticlePage from './components/Articles/ArticlePage'
import Footer from './components/5-footer/Footer'



function Articles() {
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
      <div className='divider'/>
      
      <ArticlePage/>

      <div className='divider' />
      <Footer />
      <a style={{opacity : ShowScrollbtn ? 1 : 0 , transition : "1s" }} href="#up">
        <button className='icon-chevron-up scroll2top'></button>
      </a>
     
    </div>
  )
}

export default Articles

/*
import { useState } from "react";
import { useEffect } from "react";
import ArticlePage from "./components/Articles/ArticlePage";


function Articles() {
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
      <div id= 'up' className='container'>
            
            <ArticlePage/>
      
      <a style={{opacity : ShowScrollbtn ? 1 : 0 , transition : "1s" }} href="#up">
      <button className='icon-chevron-up scroll2top'></button>
      </a>
      </div>
    )
  
}


export default Articles
*/