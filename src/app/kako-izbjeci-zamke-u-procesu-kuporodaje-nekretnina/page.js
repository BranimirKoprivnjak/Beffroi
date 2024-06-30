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
          <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }} marginBottom={4}>
            Kako izbjeći zamke u procesu kupoprodaje nekretnina
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
                src={'blog5.jpg'}
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
                    Kupnja ili prodaja nekretnine jedan je od najvažnijih financijskih koraka u životu svakog pojedinca. {isMobile && <br/>} 
                    Proces može biti složen i stresan, a nerijetko se može susresti s raznim zamkama. {isMobile && <br/>} 
                    U ovom članku donosimo vam savjete kako ih prepoznati i izbjeći.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    1. Neprovjerene informacije - Prije nego što se odlučite na kupnju, provjerite sve informacije o nekretnini. {isMobile && <br/>}
                    To uključuje vlasnički list, lokacijsku dozvolu, uporabnu dozvolu i energetski certifikat. {isMobile && <br/>}
                    U Hrvatskoj je često problem neusklađenost stvarnog stanja s podacima u katastru, stoga je važno provjeriti i katastarski plan.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    2. Pravne komplikacije - Ako nekretnina ima neriješene pravne sporove, hipoteke ili nije slobodna od tereta, 
                    može doći do komplikacija u procesu kupoprodaje. {isMobile && <br/>}
                    Zato je ključno angažirati stručnjaka za nekretnine koji će provjeriti pravno stanje i savjetovati vas o daljnjim koracima.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    3. Realna cijena - Postavljanje ili prihvaćanje nerealne cijene može produljiti proces prodaje ili kupnje. {isMobile && <br/>}
                    Informirajte se o tržišnim cijenama sličnih nekretnina u istom području. {isMobile && <br/>}
                    Usporedba cijena može vam pomoći da postavite ili prepoznate realnu cijenu.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    4. Pregled nekretnine - Uvijek obavite temeljit pregled nekretnine prije kupnje. {isMobile && <br/>}
                    Provjerite stanje instalacija, konstrukcije, krova i drugih bitnih dijelova. {isMobile && <br/>}
                    Ne ustručavajte se angažirati stručnjaka za procjenu stanja nekretnine.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    5. Skriveni troškovi - Budite svjesni svih troškova koji dolaze s kupoprodajom. {isMobile && <br/>}
                    To uključuje porez na promet nekretnina, agencijsku proviziju, javnobilježničke troškove i troškove eventualnih popravaka. {isMobile && <br/>}
                    Pitajte za detaljan pregled svih troškova prije potpisivanja ugovora.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Zaključak:
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Kupoprodaja nekretnina može biti izazovan proces, ali s pravim informacijama i stručnom pomoći možete izbjeći zamke koje vas mogu skupo stajati. {isMobile && <br/>} 
                    Uvijek se posavjetujte s pouzdanim agentom za nekretnine i pravnim savjetnikom kako biste osigurali siguran i uspješan posao. {isMobile && <br/>}
                    Naša agencija stoji vam na raspolaganju s iskusnim timom koji će vam pomoći da proces kupoprodaje prođe glatko i bez stresa.
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