/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import emailjs from '@emailjs/browser';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Molimo unesite važeće ime')
    .max(50, 'Molimo unesite važeće ime')
    .required('Molimo navedite svoje ime'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Molimo unesite važeće prezime')
    .max(50, 'Molimo unesite važeće prezime')
    .required('Molimo navedite svoje prezime'),
  email: yup
    .string()
    .trim()
    .email('Molimo unesite važeću email adresu')
    .required('Email je obavezan'),
  message: yup
    .string()
    .trim()
    .required('Molimo navedite svoju poruku'),
});

const Contact = () => {
  const theme = useTheme();

  const [isSuccess, setIsSuccess] = useState(false);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phone: '',
    honey: ''
  };

  const onSubmit = async (values) => {
    if (values['honey'] !== '') return;

    try {
      await emailjs.send('service_yfbglqr', 'template_y7acog9', values, 'ggRkLd__o9aAoEzjD');
      setIsSuccess(true);
    } catch (error) {}
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box maxWidth={600} margin={'0 auto'}>
      <Box>
        {!isSuccess && <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="Ime*"
                variant="outlined"
                color="primary"
                size="medium"
                name="firstName"
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="Prezime*"
                variant="outlined"
                color="primary"
                size="medium"
                name="lastName"
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Email*"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                name="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Telefon"
                variant="outlined"
                color="primary"
                size="medium"
                name="phone"
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Vaša poruka*"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                name="message"
                fullWidth
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Button
                sx={{ height: 54, minWidth: 150 }}
                variant="contained"
                color="primary"
                size="medium"
                type="submit"
              >
                Pošalji
              </Button>
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Typography color="text.secondary">
                Odgovoriti ćemo vam u roku od 1-2 radna dana.
              </Typography>
            </Grid>
          </Grid>
        </form>}
        {isSuccess && <Typography>Hvala vam na upitu. Primili smo vašu poruku i odgovoriti ćemo vam u roku od 1-2 radna dana.</Typography>}
      </Box>
    </Box>
  );
};

export default Contact;
