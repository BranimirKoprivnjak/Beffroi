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
            Kako prodati nekretninu uz pomoć agencije
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
                src={'blog4.jpg'}
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
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500, textAlign: 'left' }}>
                    Zašto odabrati agenciju za nekretnine?
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Kada se odlučite za kupnju, prodaju ili najam nekretnine, možda ćete se zapitati trebate li angažirati agenciju za nekretnine. {isMobile && <br/>}
                    Evo nekoliko ključnih razloga zašto je suradnja s našom agencijom pametan izbor:
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    1. Stručnost i iskustvo: Naši agenti su stručnjaci u svojem području. {isMobile && <br/>}Imaju bogato iskustvo i znanje o tržištu nekretnina, 
                    što znači da možete dobiti najbolje savjete i informacije koje su vam potrebne za donošenje informirane odluke.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    2. Ušteda vremena: Traženje ili prodaja nekretnine može biti dugotrajan proces. {isMobile && <br/>}
                    Naša agencija preuzima sav posao - od oglašavanja, organiziranja razgledavanja, do pregovaranja i zatvaranja posla. {isMobile && <br/>} 
                    To vam štedi dragocjeno vrijeme koje možete iskoristiti na bolji način.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    3. Pravna sigurnost: Uz našu agenciju, ne morate brinuti o pravnim zamkama. {isMobile && <br/>}Pružamo kompletnu pravnu podršku i savjetovanje,
                    osiguravajući da su svi dokumenti i ugovori u skladu s zakonom.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    4. Pristup širokoj mreži nekretnina: Imamo pristup velikom broju nekretnina koje možda nisu javno oglašene. {isMobile && <br/>}
                    To vam omogućuje da pronađete savršenu nekretninu koja odgovara vašim potrebama i željama.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    5. Pregovaračke vještine: Naši agenti su iskusni pregovarači koji će se zalagati za vaše interese, bilo da kupujete, prodajete ili 
                    iznajmljujete nekretninu. {isMobile && <br/>}Osiguravamo da dobijete najbolju moguću cijenu.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    6. Personalizirana usluga: Svaki klijent je za nas poseban. {isMobile && <br/>}Posvećujemo se razumijevanju vaših specifičnih potreba i 
                    ciljeva kako bismo pružili uslugu koja je prilagođena upravo vama.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    7. Postprodajna podrška: Naša usluga ne završava prodajom ili najmom nekretnine. {isMobile && <br/>}
                    Tu smo da odgovorimo na sva vaša pitanja i pružimo podršku čak i nakon što se ključevi predaju.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Odabir naše agencije za nekretnine znači da ste u sigurnim rukama. {isMobile && <br/>}Mi smo vaš pouzdan partner u svijetu nekretnina, 
                    posvećeni tome da vaše iskustvo bude što bezbrižnije i uspješnije. {isMobile && <br/>}
                    Kontaktirajte nas danas i saznajte kako vam možemo pomoći da ostvarite svoje nekretninske snove.
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