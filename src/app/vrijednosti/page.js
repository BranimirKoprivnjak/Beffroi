'use client'

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Typography } from '@mui/material';

import Image from 'next/image'

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
          <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }} marginBottom={4}>
            Vrijednosti
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
                src={'vrijednosti.jpg'}
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
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Hrabrost
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    U našem radu, hrabrost je ključna vrijednost. {isMobile && <br/>}Neustrašivo se suočavamo s izazovima i donosimo odluke koje su u najboljem interesu naših klijenata. 
                    {isMobile && <br/>} Spremni smo preuzeti inicijativu i istražiti nove prilike kako bismo vam pružili vanserijske rezultate.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Istina
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Poštujemo vašu potrebu za transparentnošću i uvijek ćemo vam pružiti iskrene informacije o tržištu, nekretninama i prilikama 
                    da za vaš novac dobijete više od drugih.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Empatija i razumijevanje
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Razumijemo da iza svake nekretnine stoje osobne priče i osjećaji. {isMobile && <br/>}Upravo zato s empatijom pristupamo potrebama i 
                    željama svakog klijenta a rješenja prilagođavamo specifičnosti svake situacije.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Fokus i strpljenje
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Fokusirani smo na vaše potrebe i strpljivo ćemo raditi s vama kako biste razumjeli svaki korak u kupoprodajnom procesu. 
                    {isMobile && <br/>} Pazimo na svaki detalj kako bismo osigurali da vaše iskustvo s nama uvijek bude besprijekorno i dosljedno.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Staloženost
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    U svakoj situaciji zadržavamo samokontrolu i profesionalnost kako bismo pomirili interese svih sudionika u procesu kupoprodaje.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Disciplina
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Vjerujemo da je disciplina temelj našeg uspjeha. {isMobile && <br/>}Držimo se visokih standarda i očekujemo od svakog člana našeg tima da se pridržava istih. 
                    {isMobile && <br/>} Naš strogi trening osigurava da svaki zaposlenik posjeduje potrebne vještine, znanje i profesionalnost kako bi uspješno obavljao svoje dužnosti i 
                    bio fokusiran na isporučivanje kvalitetnih razultata.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Briga za zajednicu
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Naposljetku, zagovaranjem građanskih vrijednosti i volonterskim radom, BEFFROI pomaže graditi bolju Hrvatsku. 
                    {isMobile && <br/>} Vjerujemo u bolju budućnost i radosno dovodimo za stol kupce, prodavatelje, investitore i 
                    sve voljne sudjelovati u uzbudljivoj priči naše mlade republike. 
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