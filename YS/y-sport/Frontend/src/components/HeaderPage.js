import { Grid, Stack } from '@mui/material'
import '../styles/MainPage.scss'
import React from 'react'
import videoBack from '../video/Ysport.mp4'

/**
 * @author Yao
 * @description 
 * 
*/

export function HeaderPage() {
  return (
    <div className='header_page'>
      <video className='video_header' autoPlay loop muted>
        <source src={videoBack} type='video/mp4'/>
    </video>
      
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
        </Stack>

    </div>
  )
}

export function ChoiceSport(props) {
  return (
    <div className='section_one'>
      <img src={props.img} alt={props.img}/>
      <p>{props.title}</p>
      <p>{props.subTitle}</p>
    </div>
  )
}

