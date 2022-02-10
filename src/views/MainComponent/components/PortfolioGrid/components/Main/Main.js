import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import image01 from '../../../../../../images/img8.jpg';
import image02 from '../../../../../../images/img9.jpg';
import image03 from '../../../../../../images/img10.jpg';

const Main = () => {
  const theme = useTheme();
  return (
    <Box sx={{ marginBottom: 20 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component={'a'}
            href={''}
            display={'block'}
            width={1}
            height={1}
            sx={{
              textDecoration: 'none',
              transition: 'all .2s ease-in-out',
              '&:hover': {
                transform: `translateY(-${theme.spacing(1 / 2)})`,
              },
            }}
          >
            <Box
              component={Card}
              width={1}
              height={1}
              display={'flex'}
              flexDirection={'column'}
            >
              <CardMedia
                image={image01}
                title="Consectetur adipiscing elit"
                sx={{
                  height: { xs: 340, md: 400 },
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
              <Box component={CardContent}>
                <Typography variant={'h6'} fontWeight={700} gutterBottom>
                  Child with a rib flaring condition
                </Typography>
                <Typography variant={'body2'} color="text.secondary">
                  Before the Balloon Brace&reg; is applied
                </Typography>
              </Box>
              <Box flexGrow={1} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component={'a'}
            href={''}
            display={'block'}
            width={1}
            height={1}
            sx={{
              textDecoration: 'none',
              transition: 'all .2s ease-in-out',
              '&:hover': {
                transform: `translateY(-${theme.spacing(1 / 2)})`,
              },
            }}
          >
            <Box
              component={Card}
              width={1}
              height={1}
              display={'flex'}
              flexDirection={'column'}
            >
              <CardMedia
                image={image02}
                title="Consectetur adipiscing elit"
                sx={{
                  height: { xs: 340, md: 400 },
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
              <Box component={CardContent}>
                <Typography variant={'h6'} fontWeight={700} gutterBottom>
                  Wearing the Balloon Brace&reg;
                </Typography>
                <Typography variant={'body2'} color="text.secondary">
                  The brace is adjusted to your comfort level
                </Typography>
              </Box>
              <Box flexGrow={1} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component={'a'}
            href={''}
            display={'block'}
            width={1}
            height={1}
            sx={{
              textDecoration: 'none',
              transition: 'all .2s ease-in-out',
              '&:hover': {
                transform: `translateY(-${theme.spacing(1 / 2)})`,
              },
            }}
          >
            <Box
              component={Card}
              width={1}
              height={1}
              display={'flex'}
              flexDirection={'column'}
            >
              <CardMedia
                image={image03}
                title="Consectetur adipiscing elit"
                sx={{
                  height: { xs: 340, md: 400 },
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
              <Box component={CardContent}>
                <Typography variant={'h6'} fontWeight={700} gutterBottom>
                  The Brace is comfortable
                </Typography>
                <Typography variant={'body2'} color="text.secondary">
                  The pumps parts are then removed for your ease.
                </Typography>
              </Box>
              <Box flexGrow={1} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
