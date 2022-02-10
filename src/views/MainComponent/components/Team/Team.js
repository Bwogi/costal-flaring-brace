/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
// import image01 from '../../../../images/costal-flare04mod.png';
// import image02 from '../../../../images/costal-flare02mod.png';
// import image03 from '../../../../images/costal-flare06.png';
// import Button from '@mui/material/Button';
// import { GiTopaz } from 'react-icons/gi';

const Team = () => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                What makes this Brace unique?
              </Typography>
              <Typography color="text.secondary">
                This Balloon Brace® is specifically designed to ease the
                treatment of malformations of the Rib(Costal Flaring)
              </Typography>
            </Box>
            <Grid container spacing={1}>
              {[
                'Our patients have registered positive, noticeable results in as little as 3 to 6 months',
                'It can be worn comfortably for extended periods of time.',
                'Its very soft and comfortable.',
                'Easily left on even while sleeping at night.',
                'It is easily adjustable. Pump the balloons to your comfort level.',
                'It is machine washable',

                'It is very affordable',
              ].map((item, i) => (
                <Grid item xs={12} key={i}>
                  <Box
                    component={ListItem}
                    disableGutters
                    width={'auto'}
                    padding={0}
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth={'auto !important'}
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        bgcolor={theme.palette.primary.main}
                        width={20}
                        height={20}
                      >
                        {/* <GiTopaz /> */}
                        <svg
                          width={12}
                          height={12}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <ListItemText primary={item} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: 10 }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PUZSJbiRgnY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
          {/* <Box height={1} width={1} display={'flex'} flexDirection={'column'}>
            <Box
              component={'img'}
              src={image01}
              alt="..."
              width={160}
              height={160}
              marginLeft={'calc(60% - 160px)'}
              zIndex={3}
              borderRadius={'100%'}
              boxShadow={4}
              data-aos={'fade-up'}
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none',
              }}
            />
            <Box
              component={'img'}
              width={200}
              height={200}
              src={image02}
              alt="..."
              marginTop={'-8%'}
              zIndex={2}
              borderRadius={'100%'}
              boxShadow={4}
              data-aos={'fade-up'}
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none',
              }}
            />
            <Box
              component={'img'}
              width={300}
              height={300}
              src={image03}
              alt="..."
              marginTop={'-20%'}
              marginLeft={'calc(100% - 300px)'}
              zIndex={1}
              borderRadius={'100%'}
              boxShadow={4}
              data-aos={'fade-up'}
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none',
              }}
            />
            <Box marginTop={3} display={'flex'} justifyContent={'center'}>
              <Button
                component={'a'}
                // href="#"
                // target={'_blank'}
                variant="contained"
                color="primary"
                size="large"
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
                Order now
              </Button>
            </Box>
          </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Team;
