import { Stack } from '@mui/material'
import React from 'react'
import videoBack from '../video/Ysport.mp4'
import { SimpleMenu } from './MenuHeader'
//import  icon_map  from '../images/video/map.gif'

export default function HeaderPage() {
  return (
    <div className='header_page'>
      <video className='video_header' autoPlay loop muted>
        <source src={videoBack} type='video/mp4'/>
      </video>
      <SimpleMenu />
        <Stack className='header_typo_img'>
           <Stack>
            <p>
                <span>D</span>écouvre, <span>P</span>lanifie, <span>E</span>xcelle 
                <span> <br/>T</span>on fitness, <span>T</span>on workout, <span>T</span>a façon
            </p>
           </Stack>
           <Stack>
            <h1>y<span>sport </span>workout</h1>
           </Stack>
           <Stack>
            {/*<img src={icon_map} alt='icon_map' />*/}
           </Stack>
        </Stack>

    </div>
  )
}
