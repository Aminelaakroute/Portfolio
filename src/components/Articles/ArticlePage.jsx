import { motion } from 'framer-motion';
import './ArticlePage.css';
import { MyArticles } from './MyArticles';
import { useState } from 'react';

const ArticlePage = () => {
  const [Arr, setArr] = useState(MyArticles);
  return (
    
    <section className="flex">
      {Arr.map((item) => {
        return (
          <motion.article 
          layout 
          initial={{transform : "scale(0)"}}
          animate={{transform : "scale(1)"}}
          transition={{ type : "spring", stiffness : 260, damping : 20}}
          key={item.id}
          className='card'>
          <img width={606} height={368} src={item.imgPath} alt={item.title} />
          <div style = {{width : "266px"}} className="box">
            <h2>{item.ArticleTitle}</h2>
            <p>{item.category}</p>
            <p>{item.ArticleLink}</p>
          </div>
          </motion.article>)})}
    </section>
  )}

export default ArticlePage;

