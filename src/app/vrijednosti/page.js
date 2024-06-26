'use client'

import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Typography } from '@mui/material';

const Page = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Container>
          <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
            Vrijednosti
          </Typography>
          <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 600 }}>
            Hrabrost
          </Typography>
          <Typography marginBottom={2}>
            U našem radu, hrabrost je ključna vrijednost. Neustrašivo se suočavamo s izazovima i donosimo odluke koje su u najboljem interesu naših klijenata. 
            Spremni smo preuzeti inicijativu i istražiti nove prilike kako bismo vam pružili vanserijske rezultate.
          </Typography>
          <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 600 }}>
            Istina
          </Typography>
          <Typography marginBottom={2}>
            Poštujemo vašu potrebu za transparentnošću i uvijek ćemo vam pružiti iskrene informacije o tržištu, nekretninama i prilikama 
            da za vaš novac dobijete više od drugih.
          </Typography>
          <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 600 }}>
            Empatija i razumijevanje
          </Typography>
          <Typography marginBottom={2}>
            Razumijemo da iza svake nekretnine stoje osobne priče i osjećaji. Upravo zato s empatijom pristupamo potrebama i 
            željama svakog klijenta a rješenja prilagođavamo specifičnosti svake situacije.
          </Typography>
          <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 600 }}>
            Fokus i strpljenje
          </Typography>
          <Typography marginBottom={2}>
            Fokusirani smo na vaše potrebe i strpljivo ćemo raditi s vama kako biste razumjeli svaki korak u kupoprodajnom procesu. 
            Pazimo na svaki detalj kako bismo osigurali da vaše iskustvo s nama uvijek bude besprijekorno i dosljedno.
          </Typography>
          <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 600 }}>
            Staloženost
          </Typography>
          <Typography marginBottom={2}>
            U svakoj situaciji zadržavamo samokontrolu i profesionalnost kako bismo pomirili interese svih sudionika u procesu kupoprodaje.
          </Typography>
          <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 600 }}>
            Disciplina
          </Typography>
          <Typography marginBottom={2}>
            Vjerujemo da je disciplina temelj našeg uspjeha. Držimo se visokih standarda i očekujemo od svakog člana našeg tima da se pridržava istih. 
            Naš strogi trening osigurava da svaki zaposlenik posjeduje potrebne vještine, znanje i profesionalnost kako bi uspješno obavljao svoje dužnosti i 
            bio fokusiran na isporučivanje kvalitetnih razultata.
          </Typography>
          <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 600 }}>
            Briga za zajednicu
          </Typography>
          <Typography marginBottom={2}>
            Naposljetku, zagovaranjem građanskih vrijednosti i volonterskim radom, BEFFROI pomaže graditi bolju Hrvatsku. 
            Vjerujemo u bolju budućnost i radosno dovodimo za stol kupce, prodavatelje, investitore i 
            sve voljne sudjelovati u uzbudljivoj priči naše mlade republike. 
          </Typography>
        </Container>
      </Main>
    </Box>
  );
};

export default Page;