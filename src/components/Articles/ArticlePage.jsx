import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { MyArticles } from './MyArticles';

const ArticlePage = () => {
  const [articles, setArticles] = useState(MyArticles);

  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', padding: '16px' }}>
      {articles.map((item) => (
        <Card
          key={item.id}
          sx={{
            width: 606, // Largeur fixe pour correspondre à l'image
            boxShadow: 3,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        >
          <CardMedia
            component="img"
            image={item.imgPath}
            alt={item.title}
            sx={{
              width: 606,
              height: 368,
              objectFit: 'cover', // Assure que l'image remplit bien la zone
            }}
          />
          <CardContent>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              {item.ArticleTitle}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
              Category: {item.category}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'primary.main', textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => window.open(item.ArticleLink, '_blank')}
            >
              Read more
            </Typography>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default ArticlePage;
