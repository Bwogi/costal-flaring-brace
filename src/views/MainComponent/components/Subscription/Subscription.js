/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Subscription = () => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'primary'}
        align={'center'}
      >
        Why this Brace?
      </Typography>
      <Typography fontWeight={700} variant={'h3'} gutterBottom align={'center'}>
        A case for the soft Balloon Brace &reg;
      </Typography>
      <Typography
        variant={'h6'}
        component={'p'}
        color={'text.secondary'}
        align={'center'}
      >
        The balloon brace is used for the correction of costal rib flaring. This
        device is soft and comfortable to wear for extended periods of time
        during the day or while sleeping at night.
      </Typography>
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
          Purchase now
        </Button>
      </Box>
    </Box>
  );
};

export default Subscription;
