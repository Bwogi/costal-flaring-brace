import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
// import MenuIcon from '@mui/icons-material/Menu';
// import logo from '../../../../images/balloonbrace-logo.png';
import logo from '../../../../../../images/balloonbrace-logo.png';
import Typography from '@mui/material/Typography';

const SidebarNav = () => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      // justifyContent={'space-between'}
      // alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        sx={{
          textDecoration: 'none',
          color: 'grey.900',
          fontWeight: 'bold',
        }}
      >
        <img src={logo} alt="logo" />
        <Typography
          ontWeight={700}
          variant={'h5'}
          // gutterBottom
          align={'center'}
        >
          <span
            style={{ color: theme.palette.primary.main, fontWeight: 'bold' }}
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
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        {/* <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/"
            color="grey.700"
            // variant={'subtitle1'}
          >
              Home
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/"
            color="grey.700"
            // variant={'subtitle1'}
          >
              What is Rib Flaring?
          </Link>
        </Box>
       
        // <Box marginLeft={4}>
        //   <Link
        //     underline="none"
        //     component="a"
        //     href="/"
        //     color="grey.700"
        //     // variant={'subtitle1'}
        //   >
        //       This Braces&apos; Uniqueness?
        //   </Link>
        // </Box> */}

        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            // target="blank"
            href="#"
            size="large"
          >
            Order now
          </Button>
        </Box>
      </Box>
      {/* <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box> */}
    </Box>
  );
};

SidebarNav.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default SidebarNav;

// import React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { useTheme } from '@mui/material/styles';

// import NavItem from './components/NavItem';

// const SidebarNav = ({ pages }) => {
//   const theme = useTheme();
//   const { mode } = theme.palette;

//   const {
//     landings: landingPages,
//     secondary: secondaryPages,
//     company: companyPages,
//     account: accountPages,
//     portfolio: portfolioPages,
//     blog: blogPages,
//   } = pages;

//   return (
//     <Box>
//       <Box width={1} paddingX={2} paddingY={1}>
//         <Box
//           display={'flex'}
//           component="a"
//           href="/"
//           title="theFront"
//           width={{ xs: 100, md: 120 }}
//         >
//           <Box
//             component={'img'}
//             src={
//               mode === 'light'
//                 ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
//                 : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
//             }
//             height={1}
//             width={1}
//           />
//         </Box>
//       </Box>
//       <Box paddingX={2} paddingY={2}>
//         <Box>
//           <NavItem title={'Landings'} items={landingPages} />
//         </Box>
//         <Box>
//           <NavItem title={'Company'} items={companyPages} />
//         </Box>
//         <Box>
//           <NavItem title={'Pages'} items={secondaryPages} />
//         </Box>
//         <Box>
//           <NavItem title={'Account'} items={accountPages} />
//         </Box>
//         <Box>
//           <NavItem title={'Blog'} items={blogPages} />
//         </Box>
//         <Box>
//           <NavItem title={'Portfolio'} items={portfolioPages} />
//         </Box>
//         <Box marginTop={2}>
//           <Button
//             size={'large'}
//             variant="outlined"
//             fullWidth
//             component="a"
//             href="/docs/introduction"
//           >
//             Documentation
//           </Button>
//         </Box>
//         <Box marginTop={1}>
//           <Button
//             size={'large'}
//             variant="contained"
//             color="primary"
//             fullWidth
//             component="a"
//             target="blank"
//             href="https://MUI.com/store/items/the-front-landing-page/"
//           >
//             Purchase now
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// SidebarNav.propTypes = {
//   pages: PropTypes.object.isRequired,
// };

// export default SidebarNav;
