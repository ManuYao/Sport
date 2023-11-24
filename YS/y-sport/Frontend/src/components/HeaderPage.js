import { Stack } from '@mui/material'
import React from 'react'

export default function HeaderPage() {
  return (
    <div className='header_page'>

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
