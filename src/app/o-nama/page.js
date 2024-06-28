'use client'

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Typography } from '@mui/material';

const Page = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();
  }, []);

  return (
      <Main bgcolor={'background.paper'}>
        <Container>
          <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
            O nama
          </Typography>
          <Grid container spacing={6}>
            <Grid item container xs={12} md={6}>
                <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
                  <Box>
                    <Typography variant="h6" component="p" color="text.secondary" sx={{ fontWeight: 300 }}>
                      Hrvatska je zemlja nevjerojatne ljepote i ogomnih potencijala.{isMobile && <br/>} Barem tako vjerujemo mi u BEFFROI. {isMobile && <br/>} 
                      Nakon obrazovnih i profesionalnih iskustava diljem svijeta, naši osnivači uvjerili su se da je doma najljepše. {isMobile && <br/>} 
                      Naoružani znanjem, strpljenjem i željom za napretkom, odlučili smo našim klijentima pružiti besprijekornu uslugu, i putem izgraditi bolju Hrvatsku. {isMobile && <br/>} 
                      Naš tim stručnjaka pruža sveobuhvatnu podršku, od početnog savjetovanja i procjene vrijednosti nekretnine, do marketinških aktivnosti, 
                      organizacije razgledavanja i vođenja pregovora. {isMobile && <br/>} Naši pravni stručnjaci jamče da će svi pravni aspekti biti adresirani s posebnom pažnjom 
                      kako bi se zaštitili vaši interesi i uklonili svi rizici. {isMobile && <br/>}
                      Na nikad dinamičnijem tržištu nekretnina, učiniti ćemo cijeli proces kupoprodaje ugodnim i jednostavnim.
                    </Typography>
                    <Typography variant='h5' component="p" sx={{fontWeight: 500}} marginTop={1}>
                      BEFFROI je… 
                    </Typography>
                    <Typography variant="h6" marginTop={1.5} sx={{fontWeight: 300}}>
                      Naziv za najjaču kulu srednjovjekovne tvrđave i simbol gradskih sloboda. 
                      <br/> BEFFROI simbolizira odgovornost koju građanstvo ima u zaštiti svojih zajednica, očuvanju svoje baštine i 
                      doprinosu zajedničkoj priči koja definira njihovo društvo. Kao nepokolebljivi čuvar univerzalnih vrijednosti, 
                      BEFFROI nas podsjeća da građanstvo nije samo pravni status već aktivan, stalan napor da se oblikuje i njeguje mjesto koje zovemo domom.
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
              >
                <Box
                  component={'img'}
                  loading="lazy"
                  height={1}
                  width={1}
                  src={'onama.jpg'}
                  alt="..."
                  boxShadow={3}
                  maxWidth={600}
                  sx={{
                    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                  }}
                />
              </Grid>
          </Grid>
        </Container>
      </Main>
  );
};

export default Page;