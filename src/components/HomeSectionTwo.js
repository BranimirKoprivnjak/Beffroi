import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Hero = ({ isMobile }) => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={6} marginBottom={6}>
      <Grid item container xs={12} md={6} alignItems={'center'} order={{ xs: 2, md: 1 }}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary" sx={{ fontWeight: 300 }}>
              Više od 40% kupoprodaja u RH ostvare strani državljani, stoga je prisutnost van domaćeg tržišta ključna. 
              {isMobile && <br/>} Upravo zato, djelujemo globalno - i to nas čini posebnima. 
              <br/> Dobrodošli u našu zajednicu gdje svaka kupoprodaja nije samo posao, već prilika za stvaranje doživotnih prijateljstava i suradnji. 
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
        order={{ xs: 1, md: 2 }}
      >
        <Box
          component={'img'}
          loading="lazy"
          height={1}
          width={1}
          src={'home2.JPG'}
          alt="..."
          maxWidth={600}
          sx={{
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
