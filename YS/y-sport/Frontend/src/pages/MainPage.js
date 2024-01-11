import React from 'react'
import HeaderPage from '../components/HeaderPage'
import { Fab } from '@mui/material'
import '../styles/MainPage.scss'
import imgMap from '../images/maps.png'
/**
 * @author Yao
 * @description 
 * 
 */
export default function MainPage() {
  return (
    <div className='main_page'>
      <HeaderPage />
      <Fab className='btn_fixed' variant='contained'><img className='fab_btn_map' src={imgMap}/></Fab>
    </div>
  )
}
