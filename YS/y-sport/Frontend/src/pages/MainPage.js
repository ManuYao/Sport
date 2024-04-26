import React from 'react'
import {HeaderPage, ChoiceSport} from '../components/HeaderPage'
import { Fab, Grid, Stack } from '@mui/material'
import '../styles/MainPage.scss'
import imgMap from '../images/maps.png'
import baskets from '../images/baskets.png'
import basketball from '../images/basketball.png'
import athlétisme from '../images/athlétisme.png'
import piscine from '../images/piscine.png'
/**
 * @author Yao
 * @description 
 * 
 */
export default function MainPage() {
  return (
    <div className='main_page'>
      <HeaderPage />
      <Fab className='btn_fixed' variant='contained'>
        <img className='fab_btn_map' src={imgMap}/>
      </Fab>
      <Stack sx={{m:10, flexDirection:'row'}}>
        <ChoiceSport img={baskets} title='Lorem ipsum' subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
        <ChoiceSport img={basketball} title='Lorem ipsum' subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
        <ChoiceSport img={athlétisme} title='Lorem ipsum' subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
        <ChoiceSport img={piscine} title='Lorem ipsum' subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
      </Stack>

    </div>
  )
}
