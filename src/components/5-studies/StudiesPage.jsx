import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Paper, Typography, useTheme } from '@mui/material';
import { School, Work,} from '@mui/icons-material'; // Icônes MUI Star, Code, Public 
import { motion } from 'framer-motion'; // Pour les animations

const StudiesPage = () => {
  const theme = useTheme();

  const events = [
    {
      year: '2019-2020',
      title: 'Scientific Baccalaureate',
      description: 'Obtained the baccalaureate with honors.',
      icon: <School fontSize="large" />,
      color: theme.palette.primary.main,
    },
    {
      year: '2020-2023',
      title: '(FST Tanger) Licence en Informatique',
      description: 'Première année de licence à l\'Université XYZ.',
      icon: <School fontSize="large" />,
      color: theme.palette.secondary.main,
    },
    {
      year: '2023: Mars - April',
      title: '(TMPA) Internship',
      description: 'fullstack developer (MERN Stack )internship at TMPA (Tanger Med Port Authority).',
      icon: <Work fontSize="large" />,
      color: theme.palette.success.main,
    },
    {
      year: '2023 - 2025',
      title: "(ENSA Kénitra) Master's degree",
      description: 'Information Systems Security.',
      icon: <School fontSize="large" />,
      color: theme.palette.warning.main,
    }
  ];

  // Animation Framer Motion
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
    <h1 className="articles-title Roboto">My Academic and Professional Background</h1>
    <Timeline position="alternate" sx={{ padding: '20px', background: 'transparent' }}>
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <TimelineDot sx={{ backgroundColor: event.color, color: '#ffff' }}>
                {event.icon}
              </TimelineDot>
            </motion.div>
            {index < events.length - 1 && (
              <TimelineConnector sx={{ backgroundColor: event.color }} />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <Paper
                elevation={6}
                sx={{
                  padding: '16px',
                  background: 'transparent', // Fond transparent
                  color: theme.palette.text.primary, // Couleur du texte adaptée
                  borderRadius: '12px',
                  border: `2px solid ${event.color}`, // Bordure colorée
                }}
              >
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }} color='var(--subtitle)'>
                  {event.year}
                </Typography>
                <Typography variant="h5" component="h3" sx={{ margin: '8px 0', fontWeight: 'bold' }} color='var(--subtitle)'>
                  {event.title}
                </Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic' }} color='var(--subtitle)'>
                  {event.description}
                </Typography>
              </Paper>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
    </>
  );
};

export default StudiesPage;