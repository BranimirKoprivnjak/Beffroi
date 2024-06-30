'use client'

import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Typography } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Page = () => {
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
          <Box sx={{ minHeight: '59vh' }}>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Česta pitanja
            </Typography>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontWeight: 500 }}
              >
                Koliki je porez na promet nekretnina u RH?
              </AccordionSummary>
              <AccordionDetails sx={{ fontWeight: 300 }}>
                Porez na kupovinu nekretnine je 3% od dogovorene cijene ili tržišne vrijednosti nekretnine prema procjeni porezne uprave. 
                {isMobile && <br/>} Osoba koja kupuje kuću može biti oslobođena plaćanja poreza ako ispuni određene uvjete.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontWeight: 500 }}
              >
                Tko treba prijaviti porez na kupovinu nekretnine?
              </AccordionSummary>
              <AccordionDetails sx={{ fontWeight: 300 }}>
                Prijavu poreza smatra se obavljenom kada se dokumenti dostave javnom bilježniku ili sudu. {isMobile && <br/>}
                Osoba koja kupuje nekretninu mora podnijeti obrazac samo ako dokumente nije ovjerio javni bilježnik ili ih nije izdao sud ili javno tijelo. {isMobile && <br/>}
                Porezna ispostava donosi privremeno ili konačno rješenje o plaćanju poreza na kupovinu nekretnina. {isMobile && <br/>}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontWeight: 500 }}
              >
                Koji su uvjeti za kupnju nekretnine u Hrvatskoj stranim državljanima?
              </AccordionSummary>
              <AccordionDetails sx={{ fontWeight: 300 }}>
                Državljani ili pravna osoba iz država članica Europske unije stječu pravo vlasništva nad nekretninama u 
                Republici Hrvatskoj pod pretpostavkama koje vrijede za stjecanje prava vlasništva za državljane Republike Hrvatske i 
                pravne osobe sa sjedištem u Republici Hrvatskoj, izuzev nekretnina u izuzetim područjima kao što je poljoprivredno zemljište te za 
                stjecanje prava vlasništva nije potrebna suglasnost ministarstva pravosuđa. {isMobile && <br/>}Državljanima ili pravnim osobama izvan država članica Europske unije 
                za stjecanje prava vlasništva nad nekretninama u Republici Hrvatskoj potrebna je suglasnost ministarstva pravosuđa,
                a istu mogu dobiti samo ako postoji uzajamnost za stjecanje prava vlasništva na nekretninama u Republici Hrvatskoj između države državljanina 
                i Republike Hrvatske, a popis država s kojima postoji uzajamnost možete provjeriti u rubrici Informacije o uzajamnosti 
                u stjecanju prava vlasništva nekretnina između Republike Hrvatske 
                i država izvan Europske unije, Republike Island, Kneževine Lihtenštajn, Kraljevine Norveške te Švicarske Konfederacije.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontWeight: 500 }}
              >
                Tko priprema ugovore o kupovini ili najmu nekretnina i gdje se ovjeravaju?
              </AccordionSummary>
              <AccordionDetails sx={{ fontWeight: 300 }}>
               Naš pravni tim priprema ugovore. {isMobile && <br/>}Ugovore o kupovini ovjerava javni bilježnik uz prisutnost agenta, 
               dok se ugovori o najmu mogu ovjeriti na zahtjev stranaka. {isMobile && <br/>}Ovjera se obavlja kod javnog bilježnika u Hrvatskoj ili u inozemstvu uz Apostille.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontWeight: 500 }}
              >
                Što je formalizacija ugovora o najmu?
              </AccordionSummary>
              <AccordionDetails sx={{ fontWeight: 300 }}>
                Formalizirani ugovor o najmu je ugovor koji potpisuju najmodavac i najmoprimac pred javnim bilježnikom. 
                {isMobile && <br/>} Javni bilježnik, osim što provjerava ispravnu formu ugovora, potvrđuje i njegov sadržaj. 
                {isMobile && <br/>} Takav ugovor sadrži i ovršnu klauzulu koja štiti najmodavca u slučaju da najmoprimac ne ispuni svoje obveze. 
                {isMobile && <br/>} Iako nije obavezno, formalizirani ugovor o najmu nosi određene prednosti. Ovršna klauzula štiti najmodavca od neplaćenih najamnina, 
                režijskih troškova ili oštećenja na nekretnini. {isMobile && <br/>}U slučaju da najmoprimac ne preda nekretninu nakon isteka ugovora, 
                javni bilježnik može na zahtjev najmodavca potvrditi ovršnost ugovora.
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontWeight: 500 }}
              >
                Kako se dodjeljuje osobni identifikacijski broj (OIB) stranim državljanima u RH?
              </AccordionSummary>
              <AccordionDetails sx={{ fontWeight: 300 }}>
                Strani državljanin za ishođenje OIB-a u Hrvatskoj mora otići u poreznu ispostavu te ispuniti Zahtjev za određivanjem i 
                dodjeljivanjem osobnoga identifikacijskog broja te istome mora priložiti kopiju putovnice ili 
                ako je državljanin Europske unije europsku osobnu iskaznicu. {isMobile && <br/>}Ako se radi o stranoj pravnoj osobi potrebno je otići u poreznu ispostavu 
                te uz Zahtjev za određivanjem i dodjeljivanjem OIB-a mora priložiti Akt o osnivanju 
                (rješenje ili izvadak iz nadležnog registra koji mora biti na hrvatskom jeziku ili preveden na hrvatski jezik od strane ovlaštenog sudskog tumača).
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontWeight: 500 }}
              >
                Koja je razlika između prebivališta i boravišta?
              </AccordionSummary>
              <AccordionDetails sx={{ fontWeight: 300 }}>
                Prebivalište je adresa na kojoj osoba stalno živi u Hrvatskoj radi ostvarivanja svojih prava i obveza, dok je boravište adresa na kojoj osoba privremeno boravi, 
                ali nije tamo stalno nastanjena. {isMobile && <br/>}Boravište se prijavljuje ako će trajati više od tri mjeseca. 
                {isMobile && <br/>} Prijavu prebivališta ili boravišta osoba obavlja u policijskoj upravi ili policijskoj postaji nadležnoj za to područje.
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Main>
  );
};

export default Page;