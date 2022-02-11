import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import image01 from '../../../../images/costal-flare01modnew.png';
// import image01 from '../../../../images/costal-flare02modnew.jpg';
import image02 from '../../../../images/costal-flare02modnewnew.jpg';
import image03 from '../../../../images/costal-flare03mod.jpg';
import image04 from '../../../../images/costal-flare04mod.png';
// import video01 from '../../../../images/IMG_2593.MOV';

import Container from 'components/Container';

const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.alternate.main,
        backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
        marginTop: -13,
        paddingTop: 13,
      }}
    >
      <Container>
        <Box>
          <Box
            marginBottom={{ xs: 0, sm: 4 }}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
                padding: '0.4rem',
                fontSize: 12,
                borderRadius: 1,
                marginBottom: 3,
              }}
              // gutterBottom
              color={theme.palette.primary.other}
              align={'center'}
              backgroundColor={theme.palette.primary.light}
            >
              Introducing
            </Typography>
            <Typography
              variant="h2"
              gutterBottom
              align={'center'}
              sx={{
                fontWeight: 900,
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>
                Balloon Brace
              </span>
              &reg; for Costal Flaring Correction
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              align={'center'}
              sx={{
                marginBottom: 4,
                maxWidth: 900,
                paddingTop: 2,
                fontSize: 11,
              }}
            >
              This soft brace corrects Costal Flaring conditions without
              surgical intervention. Our patients have registered noticeable
              results in as little as 3 to 6 months!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginBottom: 4 }}
              size="large"
              // href={'https://balloonbrace.com/our-shop/'}
              // endIcon={
              //   <svg
              //     width={16}
              //     height={16}
              //     xmlns="http://www.w3.org/2000/svg"
              //     fill="none"
              //     viewBox="0 0 24 24"
              //     stroke="currentColor"
              //   >
              //     <path
              //       strokeLinecap="round"
              //       strokeLinejoin="round"
              //       strokeWidth={2}
              //       d="M17 8l4 4m0 0l-4 4m4-4H3"
              //     />
              //   </svg>
              // }
            >
              Purchase Now
            </Button>
          </Box>

          <Grid
            container
            spacing={2}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <Grid
              item
              container
              justifyContent={'flex-end'}
              alignItems={'flex-end'}
              xs={4}
              sx={{
                '& .lazy-load-image-loaded': {
                  width: '80%',
                  height: '80%',
                  display: 'flex !important',
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                borderRadius={2}
                // src={'https://assets.maccarianagency.com/backgrounds/img21.jpg'}
                src={image01}
                alt="..."
                effect="blur"
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent={'flex-start'}
              alignItems={'flex-end'}
              xs={8}
              sx={{
                '& .lazy-load-image-loaded': {
                  display: 'flex !important',
                  width: 1,
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                borderRadius={2}
                // src={'https://assets.maccarianagency.com/backgrounds/img22.jpg'}
                src={image02}
                alt="..."
                effect="blur"
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent={'flex-end'}
              alignItems={'flex-start'}
              xs={8}
              sx={{
                '& .lazy-load-image-loaded': {
                  display: 'flex !important',
                  width: 1,
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                borderRadius={2}
                // src={'https://assets.maccarianagency.com/backgrounds/img24.jpg'}
                src={image03}
                alt="..."
                effect="blur"
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent={'flex-start'}
              alignItems={'flex-start'}
              xs={4}
              sx={{
                '& .lazy-load-image-loaded': {
                  width: '80%',
                  height: '80%',
                  display: 'flex !important',
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                borderRadius={2}
                // src={'https://assets.maccarianagency.com/backgrounds/img25.jpg'}
                src={image04}
                alt="..."
                effect="blur"
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
