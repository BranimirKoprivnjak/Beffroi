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
          <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700, textAlign: 'left' }} marginBottom={4}>
            Kako bezbrižno kupiti nekretninu?
          </Typography>
          <Grid container spacing={4}>
            <Grid
              item
              container
              alignItems={'flex-start'}
              justifyContent={'center'}
              xs={12}
              md={6}
            >
              <Box
                component={'img'}
                loading="lazy"
                height={1}
                width={1}
                src={'blog2.jpg'}
                alt="..."
                boxShadow={3}
                maxWidth={600}
                sx={{
                  filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </Grid>
            <Grid item container xs={12} md={6}>
              <Box data-aos={isMd ? 'fade-left' : 'fade-up'}>
                <Box>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Kupnja nekretnine je veliki korak u životu svakog pojedinca. {isMobile && <br/>}Bilo da tražite svoj prvi dom, investicijsku priliku ili 
                    želite promijeniti trenutno mjesto stanovanja, proces može biti zahtjevan. {isMobile && <br/>} 
                    No, ne morate se nositi s tim sami. Agencija za nekretnine može biti vaš pouzdan partner kroz sve korake. {isMobile && <br/>}Evo kako vam možemo pomoći:
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    1. Definiranje vaših potreba i želja
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Prije nego što krenemo u potragu, važno je razumjeti što točno tražite. {isMobile && <br/>} 
                    Koliko soba vam je potrebno? Želite li stan u centru grada ili kuću na mirnoj lokaciji? Kakav je vaš budžet? {isMobile && <br/>}
                    Naši agenti će s vama proći kroz listu vaših želja i potreba kako bismo usmjerili pretragu na prave nekretnine.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    2. Pretraga i selekcija nekretnina
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    S obzirom na vaše kriterije, naši agenti koriste svoje znanje i resurse kako bi pronašli nekretnine koje odgovaraju vašim zahtjevima. 
                    {isMobile && <br/>} Štedimo vaše vrijeme tako što unaprijed pregledavamo ponude i selektiramo samo one koje vrijedi razmotriti.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    3. Organiziranje razgledavanja
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Kada izaberemo nekretnine koje vam mogu odgovarati, organiziramo razgledavanja u vrijeme koje vama odgovara. {isMobile && <br/>} 
                    Naši agenti će biti s vama kako bi odgovorili na sva vaša pitanja i pružili dodatne informacije o nekretnini i okolici.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    4. Pregovaranje i ponuda
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Kada pronađete nekretninu koja vam se sviđa, slijedi faza pregovaranja. {isMobile && <br/>}
                    Naši iskusni agenti će pregovarati u vaše ime kako bi osigurali najbolju moguću cijenu i uvjete kupnje.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    5. Pravna provjera i dokumentacija
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Kupnja nekretnine uključuje i pravne aspekte. {isMobile && <br/>}Naša agencija će se pobrinuti za provjeru vlasničkih listova, 
                    građevinskih dozvola i drugih važnih dokumenata. {isMobile && <br/>}Također, pomoći ćemo vam u prikupljanju svih potrebnih papira za završetak kupoprodaje.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    6. Završetak kupoprodaje
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Konačni korak je potpisivanje kupoprodajnog ugovora i prijenos vlasništva. {isMobile && <br/>}
                    Naši agenti će biti uz vas kako bi osigurali da sve prođe glatko i bez stresa.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    U agenciji za nekretnine razumijemo da je kupnja nekretnine velika odluka i obvezujemo se da ćemo vam pružiti podršku na svakom koraku. 
                    {isMobile && <br/>} S našim znanjem i iskustvom, možete biti sigurni da ćete donijeti pravu odluku. 
                    {isMobile && <br/>} Ako razmišljate o kupnji nekretnine, kontaktirajte nas i krenimo zajedno u potragu za vašim idealnim domom.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Main>
  );
};

export default Page;