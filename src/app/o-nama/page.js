'use client'

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

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Container>
          <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
            O nama
          </Typography>
          <Grid container spacing={6}>
            <Grid item container xs={12} md={6}>
                <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
                  <Box>
                    <Typography variant="h6" component="p" color="text.secondary">
                      Hrvatska je zemlja nevjerojatne ljepote i ogomnih potencijala. Barem tako vjerujemo mi u BEFFROI. 
                      Nakon obrazovnih i profesionalnih iskustava diljem svijeta, naši osnivači uvjerili su se da je doma najljepše. 
                      Naoružani znanjem, strpljenjem i željom za napretkom, odlučili smo našim klijentima pružiti besprijekornu uslugu, i putem izgraditi bolju Hrvatsku. 
                      Naš tim stručnjaka pruža sveobuhvatnu podršku, od početnog savjetovanja i procjene vrijednosti nekretnine, do marketinških aktivnosti, 
                      organizacije razgledavanja i vođenja pregovora. Naši pravni stručnjaci jamče da će svi pravni aspekti biti adresirani s posebnom pažnjom 
                      kako bi se zaštitili vaši interesi i uklonili svi rizici.
                      Na nikad dinamičnijem tržištu nekretnina, učiniti ćemo cijeli proces kupoprodaje ugodnim i jednostavnim.
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
    </Box>
  );
};

export default Page;