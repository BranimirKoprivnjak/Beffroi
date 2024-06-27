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
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Container>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Česta pitanja
            </Typography>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontWeight: 700 }}
              >
                Što je formalizacija ugovora o najmu?
              </AccordionSummary>
              <AccordionDetails>
                Formalizirani ugovor o najmu je ugovor koji potpisuju najmodavac i najmoprimac pred javnim bilježnikom. 
                Javni bilježnik, osim što provjerava ispravnu formu ugovora, potvrđuje i njegov sadržaj. 
                Takav ugovor sadrži i ovršnu klauzulu koja štiti najmodavca u slučaju da najmoprimac ne ispuni svoje obveze. 
                Iako nije obavezno, formalizirani ugovor o najmu nosi određene prednosti. Ovršna klauzula štiti najmodavca od neplaćenih najamnina, 
                režijskih troškova ili oštećenja na nekretnini. U slučaju da najmoprimac ne preda nekretninu nakon isteka ugovora, 
                javni bilježnik može na zahtjev najmodavca potvrditi ovršnost ugovora.
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontWeight: 700 }}
              >
                Kako se dodjeljuje osobni identifikacijski broj (OIB) stranim državljanima u RH?
              </AccordionSummary>
              <AccordionDetails>
                Strani državljanin za ishođenje OIB-a u Hrvatskoj mora otići u poreznu ispostavu te ispuniti Zahtjev za određivanjem i 
                dodjeljivanjem osobnoga identifikacijskog broja te istome mora priložiti kopiju putovnice ili 
                ako je državljanin Europske unije europsku osobnu iskaznicu. Ako se radi o stranoj pravnoj osobi potrebno je otići u poreznu ispostavu 
                te uz Zahtjev za određivanjem i dodjeljivanjem OIB-a mora priložiti Akt o osnivanju 
                (rješenje ili izvadak iz nadležnog registra koji mora biti na hrvatskom jeziku ili preveden na hrvatski jezik od strane ovlaštenog sudskog tumača).
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontWeight: 700 }}
              >
                Koja je razlika između prebivališta i boravišta?
              </AccordionSummary>
              <AccordionDetails>
                Prebivalište je adresa na kojoj osoba stalno živi u Hrvatskoj radi ostvarivanja svojih prava i obveza, dok je boravište adresa na kojoj osoba privremeno boravi, 
                ali nije tamo stalno nastanjena. Boravište se prijavljuje ako će trajati više od tri mjeseca. 
                Prijavu prebivališta ili boravišta osoba obavlja u policijskoj upravi ili policijskoj postaji nadležnoj za to područje.
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Main>
    </Box>
  );
};

export default Page;