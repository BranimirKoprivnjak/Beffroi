'use client'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import Form from 'components/Form'

const Page = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Container>
          <Grid container spacing={6}>
            <Grid
              item
              container
              xs={12}
              md={6}
            >
              <Box marginBottom={4}>
                <Typography
                  variant={'h3'}
                  sx={{ fontWeight: 700 }}
                  gutterBottom
                >
                  Kontaktirajte nas
                </Typography>
                <Typography color="text.secondary" marginBottom={2}>
                  Vrata se otvaraju onima koji kucaju. Zajedno smo u ovome, spremni stati uz tebe kad postane teško. 
                </Typography>
                <Typography
                  marginBottom={2}
                  sx={{ 
                    fontWeight: 500, 
                    display: 'flex', 
                    alignItems: 'center', 
                  }} 
                >
                  <MailOutlineIcon />
                  <span style={{ marginLeft: 8 }}>info@beffroi.eu</span>
                </Typography>
                <Typography 
                  sx={{ 
                    fontWeight: 500, 
                    display: 'flex', 
                    alignItems: 'center', 
                  }} 
                >
                  <LocationOnIcon />
                  <span style={{ marginLeft: 8 }}>Trg Žrtava Fašizma 2, 10 000 Zagreb</span>
                </Typography>
              </Box>
            </Grid>
            <Grid item container xs={12} md={6} alignItems={'center'}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Main>
    </Box>
  );
};

export default Page;