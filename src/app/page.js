'use client'

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Main from 'layouts/Main';
import Container from 'components/Container';
import HomeSectionOne from 'components/HomeSectionOne';
import HomeSectionTwo from 'components/HomeSectionTwo';
import Form from 'components/Form';

import Video from 'next-video';
import videoLoop from '../../videos/homevideo.mp4';

import styles from './page.module.css';

const IndexView = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Box sx={{ overflowX: 'hidden' }}>
        <Main bgcolor={'background.paper'}>
          {<Video
            src={videoLoop}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className={`${styles.video} ${styles.hide}`}
          ></Video>}
          <Container>
            <HomeSectionOne />
            <HomeSectionTwo />
            <Box marginBottom={4}>
              <Typography
                variant={'h3'}
                sx={{ fontWeight: 700 }}
                align={'center'}
                gutterBottom
              >
                Kontaktirajte nas
              </Typography>
              <Typography color="text.secondary" align={'center'} marginBottom={4}>
                Vrata se otvaraju onima koji kucaju. Zajedno smo u ovome, spremni stati uz tebe kad postane teško. 
              </Typography>
            </Box>
            <Form />
          </Container>
        </Main>
      </Box>
    </>
  );
};

export default IndexView;
