'use client'

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

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Container>
          <Typography variant={'h4'} sx={{ fontWeight: 700, textAlign: 'left' }} marginBottom={4}>
            Koliko vrijedi moja nekretnina?
          </Typography>
          <Grid container spacing={4}>
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
                  <Typography marginBottom={2}>
                    Procjena vrijednosti jedno je od najvažnijih pitanja koje si vlasnici postavljaju kada odluče prodati svoju nekretninu. 
                    Ipak, utvrditi koliko vrijedi vaša nekretnina nije jednostavan zadatak zbog niza faktora koji mogu utjecati na cijenu.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 600 }}>
                    Lokacija
                  </Typography>
                  <Typography marginBottom={2}>
                    Lokacija je možda najvažniji faktor. Nekretnine u urbanim sredinama poput Zagreba, Splita, Dubrovnika ili na atraktivnim turističkim destinacijama na obali i 
                    otocima obično postižu više cijene. Blizina važnih sadržaja kao što su škole, bolnice, trgovine, javni prijevoz i druge usluge također utječe na vrijednost.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 600 }}>
                    Stanje nekretnine
                  </Typography>
                  <Typography marginBottom={2}>
                    Stanje nekretnine uključuje starost zgrade, kvalitetu gradnje, stanje instalacija i opreme te potrebu za eventualnim renovacijama. 
                    Novije i dobro održavane nekretnine prirodno postižu više cijene na tržištu.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 600 }}>
                    Površina i raspored
                  </Typography>
                  <Typography marginBottom={2}>
                    Veličina nekretnine i raspored prostorija također igraju ključnu ulogu. Prostrane nekretnine s funkcionalnim rasporedom često su privlačnije potencijalnim kupcima. 
                    Dodatne značajke poput balkona, terasa, vrtova ili garaža mogu dodatno povećati vrijednost.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 600 }}>
                    Energetska učinkovitost
                  </Typography>
                  <Typography marginBottom={2}>
                    Energetski certifikat nekretnine također može utjecati na cijenu. Nekretnine s boljim energetskim certifikatom, koje su energetski učinkovitije, 
                    često su privlačnije jer nude dugoročne uštede na troškovima energije.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 600 }}>
                    Tržišni uvjeti
                  </Typography>
                  <Typography marginBottom={2}>
                    Tržišni uvjeti i ekonomska situacija mogu značajno varirati i utjecati na cijene nekretnina. 
                    Visoka potražnja i niska ponuda obično rezultiraju višim cijenama, dok ekonomska nestabilnost može dovesti do pada vrijednosti.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 600, textAlign: 'left' }}>
                    Razlika između oglašenih i realiziranih cijena
                  </Typography>
                  <Typography marginBottom={2}>
                    Važno je napomenuti da postoji razlika između oglašenih cijena nekretnina i stvarno realiziranih cijena. 
                    Oglašene cijene često iznose više od onoga što kupci na kraju plate, što može stvoriti iskrivljenu sliku tržišta.
                  </Typography>
                  <Typography marginBottom={2}>
                    Procjena tržišne vrijednosti nekretnine zahtjeva stručno znanje i iskustvo. 
                    BEFFROI je agencija specijalizirana je za procjene vrijednosti i posredovanje u prometu nekretninama i 
                    može vam pomoći da dobijete točnu i realnu procjenu. Ukoliko želite saznati koliko vrijedi vaša nekretnina, 
                    kontaktirajte nas s povjerenjem. Agent zadužen za vaš upit besplatno će izraditi preliminarnu procjenu vrijednosti vaše nekretnine.
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
              Na nikad dinamičnijem tržištu nekretnina, učiniti ćemo cijeli proces kupoprodaje ugodnim i jednostavnim.
            </Typography>
          </Box>
          <Form />
        </Container>
      </Main>
    </Box>
  );
};

export default Page;