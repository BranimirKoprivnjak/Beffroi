'use client'; // This is a client component 👈🏽

/* eslint-disable react/display-name */
import React from 'react';
// import Document, { Html, Head, Main, NextScript } from 'next/document';
// import createCache from '@emotion/cache';
// import createEmotionServer from '@emotion/server/create-instance';

import Page from '../components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import '../../styles/globals.css'

/* eslint-disable react/prop-types */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          href="favicon.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="A modern design system for your new landing and web pages."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="LogoHR.png"
        />
        <meta
          property="og:title"
          content="BEFFROI Nekretnine"
        />
        <meta
          property="og:description"
          content="BEFFROI Nekretnine nudi širok izbor nekretnina različitih vrsta, uključujući stanove, kuće, zemljišta i poslovne prostore."
        />
        <meta
          property="og:url"
          content="https://beffroi.eu"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body>
        <Page>
          {children}
        </Page>
      </body>
    </html>
  );
}
  