import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Hero = ({ isMobile, padding }) => {
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
      >
      <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
        <Box
          component={'img'}
          loading="lazy"
          height={1}
          width={1}
          src={isMobile ? 'home1mob.JPG' : 'home1.JPG'}
          alt="..."
          boxShadow={3}
          maxWidth={600}
          sx={{
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
        {isMobile && <Typography
              variant='h3'
              sx={{
                position: 'absolute',
                top: '15%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                fontSize: '1.5rem',
                fontWeight: 600,
                textShadow: '2px 2px #363940',
                zIndex: 1,
              }}
            >
              Lokalni eksperti, globalan doseg.
            </Typography>}
        </Box>
      </Grid>
      <Grid item container xs={12} md={6} alignItems={'center'}>
        <Box data-aos={isMd ? 'fade-left' : 'fade-up'}>
          <Box marginBottom={3}>
            {!isMobile && <Typography variant="h6" component="p" color="text.secondary" paddingLeft={padding} paddingRight={padding} sx={{ fontWeight: 300 }}>
              BEFFROI Nekretnine nudi širok izbor nekretnina različitih vrsta, uključujući stanove, kuće, zemljišta i poslovne prostore. 
            </Typography>}
            {isMobile && <Typography variant="h6" component="p" color="text.secondary" paddingLeft={padding} paddingRight={padding} sx={{ fontWeight: 300, textAlign: 'center' }}>
              BEFFROI Nekretnine nudi širok izbor nekretnina različitih vrsta, uključujući stanove, kuće, zemljišta i poslovne prostore. 
            </Typography>}
            {!isMobile && <Typography variant="h6" component="p" color="text.secondary" marginTop={isMobile ? 2 : 0} paddingLeft={padding} paddingRight={padding} sx={{ fontWeight: 300 }}>
              Bez obzira tražite li dom, investicijsku priliku ili poslovni prostor, mi smo ovdje da vam pomognemo ostvariti vaše ciljeve.
            </Typography>}
            {isMobile && <Typography variant="h6" component="p" color="text.secondary" marginTop={isMobile ? 2 : 0} paddingLeft={padding} paddingRight={padding} sx={{ fontWeight: 300, textAlign: 'center' }}>
              Bez obzira tražite li dom, investicijsku priliku ili poslovni prostor, mi smo ovdje da vam pomognemo ostvariti vaše ciljeve.
            </Typography>}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
