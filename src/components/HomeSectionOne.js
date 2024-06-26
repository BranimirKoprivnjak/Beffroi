import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Hero = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={6} marginBottom={6}>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box
          component={'img'}
          loading="lazy"
          height={1}
          width={1}
          src={'home1.JPG'}
          alt="..."
          boxShadow={3}
          borderRadius={2}
          maxWidth={600}
          sx={{
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
      </Grid>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-left' : 'fade-up'}>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              BEFFROI Nekretnine nudi širok izbor nekretnina različitih vrsta, uključujući stanove, kuće, zemljišta i poslovne prostore. 
              Bez obzira tražite li dom, investicijsku priliku ili poslovni prostor, mi smo ovdje da vam pomognemo ostvariti vaše ciljeve.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
