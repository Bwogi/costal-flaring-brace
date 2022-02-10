import React from 'react';
import Box from '@mui/material/Box';
// import { useTheme } from '@mui/material/styles';
// import Divider from '@mui/material/Divider';
// import bgImage from '../../images/background-image.jpg';

import Main from 'layouts/Main';
import Container from 'components/Container';

import {
  Hero,
  Integrations,
  // PromoNumbers,
  Subscription,
  PortfolioGrid,
  QuickSearch,
  // Team,
  // Brains,
  Work,
  // Video,
} from './components';
// import Paper from '@mui/material/Paper';
// import { Card, CardMedia } from '@mui/material';

// import Work from './components/Work';

// const styles = {
//   paperContainer: {
//     backgroundImage: `url(${bgImage})`,
//   },
// };

const MainComponent = () => {
  // const theme = useTheme();
  return (
    <Main>
      <Box>
        <Hero />
        <Box>
          <Container>
            <Work />
          </Container>
        </Box>

        <Box marginTop={1} paddingTop={13} bgcolor={'alternate.main'}>
          <Container paddingTop={'0 !important'}>
            <Subscription />
          </Container>
          <Container>
            <Integrations />
          </Container>
        </Box>
        <Box>
          <Container>
            <PortfolioGrid />
          </Container>
        </Box>
        {/* <Box>
          <Video />
        </Box> */}
        <Box>
          <Container>
            <QuickSearch />
          </Container>
        </Box>
        {/* <Box>
          <Container>
            <Team />
          </Container>
        </Box> */}
        <Box bgcolor={'alternate.main'}>
          {/* <Container>
            <PromoNumbers />
          </Container> */}
        </Box>
      </Box>
    </Main>
  );
};

export default MainComponent;
