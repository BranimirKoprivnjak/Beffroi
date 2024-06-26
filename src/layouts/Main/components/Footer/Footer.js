import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="BEFFROI"
            width={80}
          >
            <Box
              component={'img'}
              src={'LogoHR.png'}
              height={1}
              width={1}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; 2024, Beffroi. Sva prava pridržana
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          Kada posjetite ili komunicirate s našim stranicama, uslugama ili alatima, mi ili naši ovlašteni pružatelji usluga 
          možemo koristiti kolačiće za pohranjivanje informacija kako bismo vam pružili bolje, brže i sigurnije iskustvo te u marketinške svrhe.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
