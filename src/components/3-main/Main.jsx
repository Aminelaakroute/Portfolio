import React, { useState } from 'react'
import './Main.css'
import { MyProject } from './MyProject'


const Main = () => {
  const [CurrentActive, setCurentActive] = useState("AL")
  const [Arr, setArr] = useState(MyProject)

  const handleClick = (buttonCategory) => {
    setCurentActive(buttonCategory);
    const newArr = MyProject.filter((item) => {
      const litArr = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return litArr === buttonCategory;
    }
    );
    setArr(newArr);
  }


  return (
    <main className='flex'>

      <section className='left-section flex'>

        <button onClick={() => {
          setCurentActive("AL");
          setArr(MyProject);
        }
        } className={CurrentActive === "AL" ? "active" : null} >All Projects</button>
        <button onClick={() => {
          handleClick("CS");
        }} className={CurrentActive === "CS" ? "active" : null} >Html & CSS & JS</button>
        <button onClick={() => {
          handleClick("PM");
        }} className={CurrentActive === "PM" ? "active" : null} >Php & MySql</button>
        <button onClick={() => {
          handleClick("PQ")
        }} className={CurrentActive === "PQ" ? "active" : null} >Python & Qt5</button>
        <button onClick={() => {
          handleClick("RM")
        }} className={CurrentActive === "RM" ? "active" : null} >React & MUI</button>
        <button onClick={() => {
          handleClick("NE")
        }} className={CurrentActive === "NE" ? "active" : null} >Node & Express</button>
      </section>



      <section className=" flex right-section ">



        {Arr.map((item) => {
          return (
            <article
              // @ts-ignore
              key={item} className='card'>
              <img width={266} height={266} src={item.imgPath} alt="" />

              <div style={{ width: "266px" }} className="box">

                <h1 className='title'>{item.projectTitle}</h1>

                <p className='subtitle'>
                  If you want to see more information about this project, click on "More" If you're interested in the source code, click on the link provided.
                </p>

                <div className='icons flex'>
                  <div style={{ gap: "11px" }} className='flex'>
                    <div className="icon-link" />
                    <div className="icon-github1" />
                  </div>
                  <a className='link flex' href="">More<span style={{ alignSelf: "end" }} className='icon-arrow-right'></span></a>
                </div>
              </div>

            </article>
          )

        })}


      </section>
    </main>
  )
}
export default Main;