import React from 'react';
// import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Contact = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          fontWeight={700}
          variant={'h6'}
          align={'center'}
          // gutterBottom
        >
          Disclaimer
        </Typography>
        <Typography
          // variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          Please read carefully
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            '& .MuiInputBase-input.MuiOutlinedInput-input': {
              bgcolor: 'background.paper',
            },
          }}
        >
          <Box>
            <Typography
              variant={'subtitle1'}
              color={'text.secondary'}
              align={'center'}
              sx={{ paddingLeft: 5, paddingRight: 5 }}
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
              <br />
              NEVER DISREGARD PROFESSIONAL MEDICAL ADVICE OR DELAY SEEKING
              MEDICAL TREATMENT BECAUSE OF SOMETHING YOU HAVE READ ON OR
              ACCESSED THROUGH THIS WEBSITE.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
