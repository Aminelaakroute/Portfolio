import { useEffect, useState } from 'react'
import './Header.css'

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [Theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark")
  useEffect(() => {

    if (Theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light")
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark")
    }

    document.body.classList.add(Theme)
  }, [Theme])

  return (
    <header className='flex'>
      <button onClick={() => {
        setshowModal(true);
      }
      } className='menu icon-menu flex' />
      <div />
      <nav>
        <ul className='flex'>
          <li><a href="">Abouts</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Studies</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      <button onClick={() => {
        // send vlue to LS
        localStorage.setItem("currentMode", Theme === "dark" ? "light" : "dark")
        ""
        // get value from LS
        setTheme(localStorage.getItem("currentMode"))
      }
      } className='mode flex'>
        {Theme === "dark" ? (
          <span className='icon-moon-o' />
        ) : (
          <span className='icon-sun' />
        )
        }
      </button>
      {showModal && (
        <div className="fixed">
          <div >
            <ul className=" modal">
              <li >
                <button className='icon-close' onClick={() => {
                  setshowModal(false);
                }
                } />
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