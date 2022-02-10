import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import CardMedia from '@mui/material/CardMedia';

const Brains = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'primary'}
          align={'center'}
        >
          The Researchers
        </Typography>
        <Typography fontWeight={700} variant={'h3'} align={'center'}>
          The Brains Behind the Balloon Brace&reg; <br />
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
          marginBottom={8}
        >
          They are both Pediatric and Trauma Surgeons at{' '}
          <a
            href="https://www.ucsfbenioffchildrens.org/find-a-doctor/results?specialtysearch=9182e8a6fbf94c0f8f1decde9914bf61&selectedSpecialtySearchName=General+Surgery&sortby=1"
            target="_blank"
            rel="noreferrer"
          >
            UCSF Benioff Children&apos;s Hospitals.
          </a>
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {[
          {
            name: '',
            title: 'Tel: 1 (925) 708 1263 | oidowu@msn.com',
            avatar: '#',
          },
          {
            name: 'Olajire Idowu, MD',
            title: 'Pediatric and trauma surgeon',
            avatar:
              'https://www.ucsfbenioffchildrens.org/-/media/project/ucsf/ucsf-bch/images/provider/card/dr-olajire-idowu-md-106-320x320-2x.jpg?h=526&w=526&hash=77BA4BC796814A1B94AA78DF69DD567D',
          },
          {
            name: 'Sunghoon Kim, MD, MS',
            title: 'Pediatric and trauma surgeon',
            avatar:
              'https://www.ucsfbenioffchildrens.org/-/media/project/ucsf/ucsf-bch/images/provider/card/dr-sunghoon-kim-md-104-320x320-2x.jpg?h=640&w=640&hash=069C444166CAB6667C42580414223A98',
          },
          {
            name: '',
            title: 'Tel: 1 (925) 813 4743 | skim@mail.cho.org',
            avatar: '#',
          },
        ].map((item, i) => (
          <Grid
            item
            xs={2}
            sm={2}
            md={3}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Card
              sx={{
                boxShadow: 0,
                background: 'transparent',
                backgroundImage: 'none',
              }}
            >
              <Box
                component={CardMedia}
                borderRadius={2}
                width={1}
                height={1}
                minHeight={320}
                image={item.avatar}
              />
              <Box
                component={CardContent}
                bgcolor={'transparent'}
                marginTop={-5}
              >
                <Box component={Card}>
                  <CardContent>
                    <ListItemText primary={item.name} secondary={item.title} />
                  </CardContent>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Brains;
