// File: ArticlePage.js
import { useState } from 'react';
import { MyArticles } from './MyArticles';
import './ArticlePage.css';
import LinkIcon from '@mui/icons-material/Link';

const ArticlePage = () => {
  const [articles] = useState(MyArticles);

  return (
    <div>
      {/* Styled Title */}
      <h1 className="articles-title Roboto">Explore Our Articles</h1>

      {/* Articles Section */}
      <div className="articles-container">
        {articles.map((item) => (
          <div className="article-card" key={item.id}>
            <img src={item.imgPath} alt={item.title} />
            <div className="article-content">
              <h2 className="article-title">{item.ArticleTitle}</h2>
              <div className='flex'>
                <p className="article-category">Category: {item.category}</p>
                <p
                  className="article-link"
                  onClick={() => window.open(item.ArticleLink, '_blank')}
                >
                  <LinkIcon />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;
