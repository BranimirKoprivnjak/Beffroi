import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 125, md: 150 }}
      >
        <Box
          component={'img'}
          src={'LogoHR.png'}
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <Link
            underline="none"
            component="a"
            href="/o-nama"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            O nama
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/vrijednosti"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Vrijednosti
          </Link>
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/vrijednost-nekretnine"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Koliko vrijedi moja nekretnina?
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/cesta-pitanja"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Česta pitanja
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/kontakt"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Kontakt
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.4),
            color:'#1e2022'
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
