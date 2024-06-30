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
            Kako uspješno prodati nekretninu?
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
                src={'blog1.jpg'}
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
                    Prodaja nekretnine može biti zahtjevan proces, ali s pravim koracima i stručnom pomoći, može postati jednostavan i bezazlen. 
                    {isMobile && <br/>} U ovom članku, istražit ćemo ključne korake koje trebate poduzeti kako biste uspješno prodali svoju nekretninu, 
                    i kako vam agencija može biti od pomoći u tom procesu.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500, textAlign: 'left' }}>
                    Korak 1: Procjena vrijednosti nekretnine
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Prvi korak u prodaji nekretnine je određivanje njene tržišne vrijednosti. {isMobile && <br/>}  
                    To možete učiniti samostalno istraživanjem tržišta ili angažiranjem profesionalnog procjenitelja. {isMobile && <br/>}  
                    Agencija za nekretnine može vam pomoći pružanjem točne procjene vrijednosti temeljene na trenutnim tržišnim uvjetima 
                    i usporedbi sličnih nekretnina.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500, textAlign: 'left' }}>
                    Korak 2: Priprema nekretnine za prodaju
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Da biste privukli kupce, vaša nekretnina mora izgledati privlačno. {isMobile && <br/>} 
                    To uključuje čišćenje, dekoriranje, manje popravke i možda čak i home staging. {isMobile && <br/>} 
                    Agencija vam može dati savjete kako da vaša nekretnina zasja u najboljem svjetlu i privuče potencijalne kupce.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500, textAlign: 'left' }}>
                    Korak 3: Oglašavanje nekretnine
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Dobra vidljivost vaše nekretnine ključna je za privlačenje kupaca. {isMobile && <br/>} 
                    Agencija za nekretnine može vašu nekretninu oglašavati na svojoj web stranici, u tiskanim medijima, na društvenim mrežama 
                    i na online platformama za prodaju nekretnina. {isMobile && <br/>}Profesionalne fotografije i detaljni opisi povećavaju šanse za prodaju.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500, textAlign: 'left' }}>
                    Korak 4: Pregovaranje i prihvaćanje ponude
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Kada primite ponudu, važno je znati pregovarati. {isMobile && <br/>}Agencija za nekretnine može vam pomoći da procijenite ponudu 
                    i savjetovati vas o najboljem postupku. {isMobile && <br/>}Ako se odlučite prihvatiti ponudu, agencija će voditi proces do završetka prodaje.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500, textAlign: 'left' }}>
                    Korak 5: Pravni postupak i završetak prodaje
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Prodaja nekretnine uključuje pravne postupke kao što su izrada predugovora, provjera dokumentacije i potpisivanje kupoprodajnog ugovora. {isMobile && <br/>} 
                    Agencija za nekretnine može vam pomoći u svim pravnim aspektima, osiguravajući da prodaja prođe glatko i bez problema. {isMobile && <br/>}
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500, textAlign: 'left' }}>
                    Zaključak
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Prodaja nekretnine može biti stresna, ali s pravim partnerom taj proces može biti ugodno iskustvo. {isMobile && <br/>}
                    Angažiranjem agencije za nekretnine, dobivate stručnu podršku i savjete koji će vam pomoći da brzo i 
                    efikasno prodate svoju nekretninu. {isMobile && <br/>}
                    Ako razmišljate o prodaji, kontaktirajte nas i saznajte kako vam možemo pomoći da ostvarite svoje ciljeve. 
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