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
            Razumijevanje hrvatskog tržišta nekretnina: Ključne statistike
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
                width={1}
                src={'blog3.jpg'}
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
                    Dobrodošli u svijet hrvatskog tržišta nekretnina. {isMobile && <br/>}Ako razmišljate o kupnji, prodaji ili iznajmljivanju nekretnine u Hrvatskoj, 
                    važno je razumjeti specifičnosti ovog jedinstvenog tržišta. {isMobile && <br/>}U ovom članku ćemo podijeliti ključne statistike koje će vam pomoći 
                    da donesete informiranu odluku.
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Smještena uz Jadransko more, Hrvatska se može pohvaliti slikovitom ljepotom, kulturnim bogatstvom i živahnim urbanim središtima. {isMobile && <br/>}
                    Svojom povijesnim zanimljivostima i raznolikim atrakcijama, Hrvatska predstavlja atraktivan izbor za turiste ali i investitore. {isMobile && <br/>}
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Prosječna cijena kvadratnog metra stambenog prostora u Hrvatskoj značajno varira ovisno o regiji. {isMobile && <br/>}
                    Cijene su najviše u gradovima poput Zagreba i Dubrovnika, gdje je potražnja za nekretninama uvijek visoka. {isMobile && <br/>}
                    S druge strane, manji gradovi i ruralna područja nude pristupačnije opcije. {isMobile && <br/>}
                    Cijene po kvadratu jako variraju ovisno o starosti nekretnine i vrsti nekretnine. {isMobile && <br/>}
                    Najviše cijene po kvadratu dostižu stanovi/apartmani na atraktivnim lokacijama u urbanim središtima i mjestima s visokim turističkim potencijalom. {isMobile && <br/>}
                    Prosječna cijena prodanih stanova u Zagrebu iznosila je 2.762 eura po kvadratu (2023.).
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Tržište iznajmljivanja također je vrlo aktivno, s velikim brojem turista koji svake godine posjećuju Hrvatsku. {isMobile && <br/>}
                    Dugoročni najam je popularan u većim gradovima, dok kratkoročni najam dominira u turističkim destinacijama. {isMobile && <br/>}
                    Važno je napomenuti da je tržište nekretnina u Hrvatskoj podložno sezonskim fluktuacijama. {isMobile && <br/>}
                    Ljetni mjeseci su vrhunac sezone kada su cijene najma na svom vrhuncu, dok zimski mjeseci mogu donijeti niže cijene i manju potražnju.
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Strani investitori
                  </Typography>
                  <ul style={{ paddingLeft: 16 }}>
                    <li style={{ fontWeight: 300 }}>Strani kupci sudjelovali su u ca. 40% svih nekretninskih transakcija u 2023. (taj je omjer bio 14% u 2010.)</li>
                    <li style={{ fontWeight: 300 }}>Tržištem dominiraju kupci iz Njemačke, Austrije i Slovenije</li>
                    <li style={{ fontWeight: 300 }}>Državljani  SAD-a preferiraju regije Istre (Pula) i južne Dalmacije (Split i Dubrovnik)</li>
                    <li style={{ fontWeight: 300 }}>Strani državljani uključeni su u ca. 77% svih transakcija nekretninama na obali</li>
                    <li style={{ fontWeight: 300 }}>Ulazak u EU i uvođenje eura znatno su povećali privlačnost domaćeg nekretninskog tržišta.</li>
                  </ul>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Ca. <span style={{ fontWeight: 500 }}>90%</span> ukupne transakcijske vrijednosti ostvaruje se u regiji priobalja i glavnog grada (Zagreb).
                  </Typography>
                  <ul style={{ paddingLeft: 16 }}>
                    <li style={{ fontWeight: 300 }}>U primorskoj Hrvatskoj godišnje se proda ca. 6.5 tisuća kuća i 13,6 tisuća stanova/apartmana</li>
                    <li style={{ fontWeight: 300 }}>U Zagrebačkoj regiji godišnje se proda ca. 3,4 tisuće kuća i 11,6 tisuća stanova/apartmana</li>
                  </ul>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    U 2022. godini razlika između traženih i realiziranih cijena u prosjeku je porasla na <span style={{ fontWeight: 500 }}>15%-20%.</span>
                  </Typography>
                  <Typography variant={'h5'} gutterBottom sx={{ fontWeight: 500 }}>
                    Zaključak:
                  </Typography>
                  <Typography marginBottom={2} sx={{ fontWeight: 300 }}>
                    Hrvatsko tržište nekretnina nudi raznolike mogućnosti za kupce i investitore. {isMobile && <br/>}
                    Razumijevanje ključnih statistika i trendova može vam pomoći da donesete razborite odluke i maksimizirate svoj investicijski potencijal. {isMobile && <br/>}
                    Bilo da tražite obiteljski dom, ljetnikovac na obali ili investicijsku nekretninu, informiranost je ključ uspjeha na ovom tržištu. {isMobile && <br/>}
                    Za više informacija i savjeta, pratite naš blog ili se obratite našim stručnjacima u agenciji. {isMobile && <br/>}
                    Ukoliko želite saznati koliko vrijedi vaša nekretnina, kontaktirajte nas s povjerenjem. {isMobile && <br/>}
                    Agent zadužen za vaš upit besplatno će izraditi preliminarnu procjenu vrijednosti vaše nekretnine. {isMobile && <br/>}
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