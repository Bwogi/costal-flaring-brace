import React from 'react';
import Typed from 'react-typed';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <Box>
      <Box>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          // gutterBottom
          sx={{ fontWeight: 400 }}
        >
          {/* theFront will make your product look modern and professional while */}
          {/* saving you precious time. */}
        </Typography>
        <Typography
          variant="h6"
          color="text.primary"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          <span>This Brace</span>{' '}
          <Typed
            strings={[
              'is very soft and comfortable.',
              'can be left on even while sleeping at night.',
              'can be worn comfortably for extended periods of time.',
              'is easily adjustable.',
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
            backDelay={1500}
            style={{ color: '#598edf' }}
          />
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 5,
            marginBottom: 0,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ marginBottom: 4 }}
            size="large"
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          >
            Make Your Order Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
