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
  }, []);

  return (
    <>
      <Box sx={{ overflowX: 'hidden' }}>
        <Main bgcolor={'background.paper'}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}> 
            <Video
              src={videoLoop}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className={`${styles.video} ${styles.hide}`}
            ></Video>
            {!isMobile && <Typography
              variant='h3'
              sx={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                zIndex: 1,
              }}
            >
              Lokalni eksperti,{isMobile &&<br/>} globalan doseg.
            </Typography>}
          </Box>
          {isMobile && <HomeSectionOne isMobile = {isMobile} padding={2}/>}
          <Container>
            {!isMobile && <HomeSectionOne isMobile = {isMobile} padding={0}/>}
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
                Na nikad dinamičnijem tržištu nekretnina, učiniti ćemo cijeli proces kupoprodaje ugodnim i jednostavnim.
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
