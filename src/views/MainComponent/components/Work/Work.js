import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
// import { Divider } from '@mui/material';
// import { color } from '@mui/system';
// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
// import image01 from '../../../../images/rib-flare-explained.png';
import image02 from '../../../../images/wearing-the-brace.png';
// import image03 from '../../../../images/rib-flare-explained.png';
// import { Divider } from '@mui/material';

// const mock = [
//   {
//     title: 'A Hard Brace',
//     description:
//       'This can be very extremely uncomfortable especially when won for extended periods of time.',
//     illustration: '../../../../images/rib-flare-explained.png',
//     illustrationDark:
//       'https://balloonbrace.com/wp-content/uploads/2018/04/hbs-hardbrace-300x167.png',
//   },
//   {
//     title: 'Our soft Balloon Brace®',
//     description:
//       'This device is soft and comfortable to wear for extended periods of time during the day or while sleeping at night.',
//     illustration:
//       'https://balloonbrace.com/wp-content/uploads/2018/04/hbs-softbrace-300x167.png',
//     illustrationDark:
//       'https://balloonbrace.com/wp-content/uploads/2018/04/hbs-softbrace-300x167.png',
//   },
// ];

const Work = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box sx={{ marginBottom: '4rem' }}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          {/* Get Started */}
        </Typography>
        <Typography
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          What is{' '}
          <span style={{ color: theme.palette.primary.main }}>
            {' '}
            Rib Flaring
          </span>
          ?!
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
          // sx={{ maxWidth: '800px' }}
        >
          Rib flaring is a condition in which the costal margin cartilages have
          grown in a protruding shape.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid
          data-aos="fade-up"
          data-aos-offset={100}
          data-aos-duration={600}
          item
          container
          xs={12}
          spacing={4}
        >
          <Grid item container alignItems={'center'} xs={12} sm={6}>
            <Box>
              <Typography variant={'h5'} gutterBottom>
                Overview{' '}
              </Typography>
              <Typography variant="p" component="p" color="text.secondary">
                Rib flaring is a condition where costal margin cartilages grow
                in a protruding shape. It does not cause pain. However, it may
                be cosmetically unacceptable for the person affected with the
                condition.
              </Typography>{' '}
              &nbsp;
              <Typography variant="p" component="p" color="text.secondary">
                It can be treated with the surgical removal of the costal margin
                cartilages.
              </Typography>
              &nbsp;
              <Typography variant="p" component="p" color="text.secondary">
                The condition can be treated by remolding the area with this{' '}
                <strong> Balloon Brace&reg; </strong>. And because the available
                options are too hard and uncomfortable, the Balloon Brace® is
                here to change all this.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            container
            justifyContent={'center'}
            alignItems={'center'}
            xs={12}
            sm={6}
          >
            <Box
              component={'img'}
              src={image02}
              alt="rib falre"
              width={1}
              // borderRadius={5}
              maxWidth={'80%'}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Work;
