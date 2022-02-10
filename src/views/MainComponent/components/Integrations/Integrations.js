import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { GiWashingMachine } from 'react-icons/gi';
import { GiCheckMark } from 'react-icons/gi';
// import { GiCherry } from 'react-icons/gi';
import { GiPencilRuler } from 'react-icons/gi';

const mock = [
  {
    title: 'Machine Washable',
    subtitle:
      'This Balloon Brace® was specifically designed to be machine washable and ready to go after the balloon is removed(Follow the instructions)',
    icon: <GiWashingMachine />,
  },
  {
    title: 'Simple to Use',
    subtitle:
      'The Balloon Brace® is designed to minimise the time and effort required to wear it properly. You can wear and remove it with ease.',
    icon: <GiCheckMark />,
  },
  {
    title: 'Soft and Adjustable',
    subtitle:
      'Because the available options are too hard and uncomfortable, the Balloon Brace® is here to change all this.',
    icon: <GiPencilRuler />,
  },
];

const Integrations = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  width={160}
                  fontSize={66}
                  height={160}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Integrations;
