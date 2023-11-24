import { Stack } from '@mui/material'
import React from 'react'
import videoBack from '../video/production_id_4065389.mp4'

export default function HeaderPage() {
  return (
    <div className='header_page'>
      <video className='video_header' autoPlay loop muted>
        <source src={videoBack} type='video/mp4'/>
      </video>
        <Stack className='header_typo_img'>
           <Stack>
            <p>
                <span>D</span>écouvre, <span>P</span>lanifie, <span>E</span>xcelle 
                <span>T</span>on fitness, <span>T</span>on workout, <span>T</span>a façon
            </p>
           </Stack>
           <Stack>
            <h1>y<span>sport </span>workout</h1>
           </Stack>
           <img src='#' alt='img_icon_map'/>
        </Stack>

    </div>
  )
}
