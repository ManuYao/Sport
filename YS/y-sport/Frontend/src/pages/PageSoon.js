import React, { useState } from 'react';
import { Alert, Stack } from '@mui/material';
import {TitleEffect, IconEffect} from '../components/EffectMotionPage';


import '../styles/PageSoon.scss'

export default function PageSoon() {
  const [isAlertVisible, setAlertVisible] = useState(false);

  const showAlert = (e) => {
    console.log("Ok!");

    // Vérifie si l'href contient #
    if (e.currentTarget.href.includes('#')) {
      setAlertVisible(true);
      e.preventDefault();
    }
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  return (
    <div className='header_page_soon'>

      <Stack alignItems='center' gap="150px">
        <TitleEffect />
        <a href='#' onClick={showAlert}><IconEffect /></a>
      </Stack>
      
      {isAlertVisible && (
        <Alert className='alter_not_valid' style={{marginTop:'20px'}}
           severity='warning' onClose={hideAlert}>
            Repositories privé
        </Alert>
      )}
    </div>
  );
}