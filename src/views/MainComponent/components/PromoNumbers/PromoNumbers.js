import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const mock = [
  // {
  //   title: 300,
  //   subtitle:
  //     '300 + component compositions, which will help you to build any page easily.',
  //   suffix: '+',
  // },
  // {
  //   title: 45,
  //   subtitle:
  //     '45 + landing and supported pages to Build a professional website.',
  //   suffix: '+',
  // },
  // {
  //   title: 99,
  //   subtitle: '99% of our customers rated 5-star our themes over 5 years.',
  //   suffix: '%',
  // },
];

const PromoNumbers = () => {
  // const theme = useTheme();
  // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
  //   defaultMatches: true,
  // });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Card sx={{ padding: 3 }}>
        <CardContent>
          <Box>
            <Typography
              variant={'h5'}
              sx={{ fontWeight: 700 }}
              align={'center'}
              // borderRadius={10}
              // gutterBottom
            >
              Disclaimer.
            </Typography>
            <Typography
              variant={'subtitle1'}
              align={'center'}
              color={'text.secondary'}
            >
              The information on this site is not intended or implied to be a
              substitute for professional medical advice, diagnosis or
              treatment. All content, including text, graphics, images and
              information, contained on or available through this web site is
              for general information purposes only. We make no representation
              and assume no responsibility for the accuracy of information
              contained on or available through this web site, and such
              information is subject to change without notice. You are
              encouraged to confirm any information obtained from or through
              this web site with other sources, and review all information
              regarding any medical condition or treatment with your physician.
              NEVER DISREGARD PROFESSIONAL MEDICAL ADVICE OR DELAY SEEKING
              MEDICAL TREATMENT BECAUSE OF SOMETHING YOU HAVE READ ON OR
              ACCESSED THROUGH THIS WEBSITE.
            </Typography>
          </Box>
          <Box marginY={4}>
            <Grid container spacing={2}>
              {mock.map((item, i) => (
                <Grid key={i} item xs={12} md={4}>
                  <Typography variant="h3" align={'center'} gutterBottom>
                    <Box fontWeight={600}>
                      <VisibilitySensor
                        onChange={(isVisible) =>
                          setViewPortVisibility(isVisible)
                        }
                        delayedCall
                      >
                        <CountUp
                          redraw={false}
                          end={viewPortEntered ? item.title : 0}
                          start={0}
                          suffix={item.suffix}
                        />
                      </VisibilitySensor>
                    </Box>
                  </Typography>
                  <Typography
                    color="text.secondary"
                    align={'center'}
                    component="p"
                  >
                    {item.subtitle}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            justifyContent={'center'}
          >
            {/* <Box
              component={Button}
              variant="contained"
              color="primary"
              size="large"
              fullWidth={!isMd}
            >
              Explore
            </Box> */}
            {/* <Box
              component={Button}
              color="primary"
              size="large"
              fullWidth={!isMd}
              marginTop={{ xs: 1, sm: 0 }}
              marginLeft={{ sm: 2 }}
              startIcon={
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={24}
                  height={24}
                >
                </Box>
              }
            >
              
            </Box> */}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PromoNumbers;
