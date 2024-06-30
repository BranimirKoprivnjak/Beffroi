'use client'

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from 'components/Container';
import { Typography } from '@mui/material';
import Form from 'components/Form'

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
          <Typography variant={'h4'} sx={{ fontWeight: 700, textAlign: 'left' }} marginBottom={4}>
            Koliko vrijedi moja nekretnina?
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
                src={'nekretnina.jpg'}
                alt="..."
                boxShadow={3}
                maxWidth={600}
                sx={{
                  filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </Grid>
            <Grid item container xs={12} md={6} alignItems={'center'}>
              <Box data-aos={isMd ? 'fade-left' : 'fade-up'}>
                <Box marginBottom={3}>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Procjena vrijednosti jedno je od najvažnijih pitanja koje si vlasnici postavljaju kada odluče prodati svoju nekretninu. 
                    {isMobile && <br/>} Ipak, utvrditi koliko vrijedi vaša nekretnina nije jednostavan zadatak zbog niza faktora koji mogu utjecati na cijenu.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Lokacija
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Lokacija je možda najvažniji faktor. Nekretnine u urbanim sredinama poput Zagreba, Splita, Dubrovnika ili na atraktivnim turističkim destinacijama na obali i 
                    otocima obično postižu više cijene.  {isMobile && <br/>}Blizina važnih sadržaja kao što su škole, bolnice, trgovine, javni prijevoz i druge usluge također utječe na vrijednost.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Stanje nekretnine
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Stanje nekretnine uključuje starost zgrade, kvalitetu gradnje, stanje instalacija i opreme te potrebu za eventualnim renovacijama. 
                    {isMobile && <br/>} Novije i dobro održavane nekretnine prirodno postižu više cijene na tržištu.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Površina i raspored
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Veličina nekretnine i raspored prostorija također igraju ključnu ulogu.  {isMobile && <br/>}Prostrane nekretnine s funkcionalnim rasporedom često su privlačnije potencijalnim kupcima. 
                    {isMobile && <br/>} Dodatne značajke poput balkona, terasa, vrtova ili garaža mogu dodatno povećati vrijednost.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Energetska učinkovitost
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Energetski certifikat nekretnine također može utjecati na cijenu.  {isMobile && <br/>}Nekretnine s boljim energetskim certifikatom, koje su energetski učinkovitije, 
                    često su privlačnije jer nude dugoročne uštede na troškovima energije.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Tržišni uvjeti
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Tržišni uvjeti i ekonomska situacija mogu značajno varirati i utjecati na cijene nekretnina. 
                    {isMobile && <br/>} Visoka potražnja i niska ponuda obično rezultiraju višim cijenama, dok ekonomska nestabilnost može dovesti do pada vrijednosti.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500, textAlign: 'left' }}>
                    Razlika između oglašenih i realiziranih cijena
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Važno je napomenuti da postoji razlika između oglašenih cijena nekretnina i stvarno realiziranih cijena. 
                    {isMobile && <br/>} Oglašene cijene često iznose više od onoga što kupci na kraju plate, što može stvoriti iskrivljenu sliku tržišta.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Procjena tržišne vrijednosti nekretnine zahtjeva stručno znanje i iskustvo. 
                    {isMobile && <br/>} BEFFROI je agencija specijalizirana je za procjene vrijednosti i posredovanje u prometu nekretninama i 
                    može vam pomoći da dobijete točnu i realnu procjenu.  {isMobile && <br/>}Ukoliko želite saznati koliko vrijedi vaša nekretnina, 
                    kontaktirajte nas s povjerenjem.  {isMobile && <br/>}Agent zadužen za vaš upit besplatno će izraditi preliminarnu procjenu vrijednosti vaše nekretnine.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box marginTop={4}>
            <Typography
              variant={'h3'}
              sx={{ fontWeight: 700 }}
              align={'center'}
              gutterBottom
            >
              Kontaktirajte nas
            </Typography>
            <Typography color="text.secondary" align={'center'} marginBottom={4}>
              Na nikad dinamičnijem tržištu nekretnina, učinit ćemo cijeli proces kupoprodaje ugodnim i jednostavnim.
            </Typography>
          </Box>
          <Form />
        </Container>
      </Main>
  );
};

export default Page;