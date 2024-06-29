import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
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
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="BEFFROI"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={'LogoHR.png'}
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Link
            underline="none"
            component="a"
            href="/o-nama"
            color={'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
            marginBottom={1}
          >
            O nama
        </Link>
        <Link
            underline="none"
            component="a"
            href="/vrijednosti"
            color={'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Vrijednosti
        </Link>
        <Box marginBottom={-0.5} marginTop={-0.5}>
          <NavItem
              title={'Blog'}
              id={'blog-pages'}
              items={blogPages}
          />
        </Box>
        <Link
            underline="none"
            component="a"
            href="/vrijednost-nekretnine"
            color={'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
            marginBottom={1}
          >
            Koliko vrijedi moja nekretnina?
          </Link>
          <Link
            underline="none"
            component="a"
            href="/cesta-pitanja"
            color={'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
            marginBottom={1}
          >
            Česta pitanja
          </Link>
          <Link
            underline="none"
            component="a"
            href="/kontakt"
            color={'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
            marginBottom={1}
          >
            Kontakt
          </Link>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
