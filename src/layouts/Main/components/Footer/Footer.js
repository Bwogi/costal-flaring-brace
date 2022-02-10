import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import logo from '../../../../images/balloonbrace-logo.png';

const Footer = () => {
  const theme = useTheme();
  // const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="p"
            // href="/"
            title="the Balloon Brace for Costal Flaring"
            // width={80}
            sx={{ color: 'grey.900', fontWeight: 'bold' }}
          >
            <img src={logo} alt="logo" width={57} height={50} />
            <Typography
              ontWeight={700}
              variant={'p'}
              // gutterBottom
              align={'center'}
            >
              <span
                style={{
                  color: theme.palette.primary.main,
                  fontWeight: 'bold',
                }}
              >
                Balloon Brace&reg;
              </span>{' '}
              <br />{' '}
              <span
                style={{ fontSize: '0.8em', color: theme.palette.primary.main }}
              >
                for Costal Flaring
              </span>
            </Typography>
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                // target="blank"
                // href="/"
                size="small"
              >
                Order now
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; Balloon Brace&reg; for Costal Flaring. 2022, All rights
          reserved.
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
