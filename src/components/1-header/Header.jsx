import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const  [showModal , setshowModal] = useState(false);
  return (
    <header className=' flex'>
      <button onClick={() => {
        setshowModal(true);
      }
      } className='menu icon-menu flex'/>
      <div/>
      <nav>
        <ul className='flex'>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      <button className='mode flex'>
        <span className='icon-moon-o'/>
      </button>
      {showModal && (
                  <div className="fixed">
                    <div >
                      <ul className=" modal">
                        <li >
                          <button className='icon-close' onClick={() => {
                            setshowModal(false);
                          }
                          }/>
                        </li>
                        <li><a href="">About</a></li>
                        <li><a href="">Articles</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Speaking</a></li>
                        <li><a href="">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                )}
    </header>
  )
}
export default Header;