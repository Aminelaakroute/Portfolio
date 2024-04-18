import React, { useState } from 'react'
import './Main.css'


const MyProject =[
  {projectTitle : "RM", category:["RM"], imgPath:"./Capture1.png" },
  {projectTitle : "CS", category:["CS"], imgPath:"dfff" },
  {projectTitle : "JS", category:["JS"], imgPath:"dfff" },
  {projectTitle : "NE", category:["NE"], imgPath:"dfff" },
  {projectTitle : "cFF", category:["css"], imgPath:"dfff" },
  {projectTitle : "ccSS", category:["css"], imgPath:"dfff" }
]

const Main = () => {
  const [CurrentActive, setCurentActive] = useState ("AL")
  const [Arr, setArr] = useState (MyProject)
  return (
    <main className='flex'>

    <section className='left-section flex'>

      <button onClick={()=>{
        setCurentActive("AL");
        
        setArr(MyProject);
      }
      }className={CurrentActive ==="AL"? "active" : null} >All Projects</button>
      <button onClick={()=>{
        setCurentActive("CS");
        const newArr = MyProject.filter((item) => {
          const litArr = item.category.filter((myItem) =>{
            return myItem === "CS";
          });
          return litArr[0] === "CS";
        }
        );
        setArr(newArr);
      }}className={CurrentActive ==="CS"? "active" : null} >Html & CSS</button>
      <button onClick={()=>{
        setCurentActive("JS");
        const newArr = MyProject.filter((item) => {
          const litArr = item.category.filter((myItem)=>{
            return myItem === "JS";
          });
          return litArr[0] === "JS";
        }
        );
        setArr(newArr);
      }}className={CurrentActive ==="JS"? "active" : null} >JavaScript</button>
      <button onClick={()=>{
        setCurentActive("RM");
        const newArr = MyProject.filter((item) => {
          const litArr =item.category.filter((myItem)=>{
            return myItem === "RM";
          });
          return litArr[0] === "RM";
        }
        );
        setArr(newArr);
      }}className={CurrentActive ==="RM"? "active" : null} >React & MUI</button>
      <button onClick={()=>{
        setCurentActive("NE");
        const newArr = MyProject.filter((item) => {
          const litArr = item.category.filter((myItem) => {
            return myItem === "NE";
          })
          return litArr[0] === "NE";
        }
        );
        setArr(newArr);
      }}className={CurrentActive ==="NE"? "active" : null} >Node & Express</button>
    </section>
    


    <section className=" flex right-section ">


      
{Arr.map((item)=>{
    return(
        <article 
// @ts-ignore
        key={item} className='card'>
                <img width={266} src={item.imgPath} alt="" />

                <div style={{width:"266px"}} className="box">
          
                  <h1 className='title '>{item.projectTitle}</h1>
          
                  <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facilis velit esse facere. Qui quaerat nihil consequatur </p>
          
                  <div className='icons flex'>
                    <div style={{gap: "11px"}} className='flex'>
                      <div className="icon-link"/>
                      <div className="icon-github1"/>
                    </div>  
                      <a className='link flex' href="">More<span style={{alignSelf: "end"}} className='icon-arrow-right'></span></a>
                  </div>        
                </div>
          
              </article>
          )

})}


    </section>
    </main>
  )
}
export default Main ;