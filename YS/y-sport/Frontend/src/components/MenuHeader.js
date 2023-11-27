import React from 'react'
import { motion } from "framer-motion";
import ImgPerso from '../images/perso.webp'
import { Avatar, Badge, Divider } from '@mui/material';
import '../styles/MenuHeader.scss'
import imgMap from '../images/icons8-carte-50.png'

export function MenuHeader() {
    const container = {
        hidden: { opacity: 1, scale: 0},
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.4
          }
        }
      }
        
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }
  return (
   
        <motion.div className='menu_header' variants={container} initial='hidden' animate='visible' >
           
            <nav> {/*System de navigation soon*/}
              <motion.div variants={item}>
                  <p>acceuil</p>
                </motion.div>
                <motion.div variants={item}>
                  <p>apropos</p>
                </motion.div>
                <motion.div variants={item}>
                  <p>map</p>     
                </motion.div>
            </nav>
            
            <motion.div className='title_img' variants={item}>
              <motion.div variants={item}>
                 <p className='logoT'>Y</p>
              </motion.div>
              <motion.div variants={item}>
                  <img src={ImgPerso} alt='Logo Img'/>
              </motion.div>
            </motion.div>

        </motion.div>

    
  )
}

//Test !! en cours !!
export function SimpleMenu (props) {

  const onMouse = () =>{
    onMouse ?  <p>ok</p> : <p>Oups !</p>
    console.log('ok')
  }


  return(
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        padding: 32}}>

        <img src={imgMap} alt='imgMap' onM={() => onMouse()}/>
        <Avatar />
       
      </div>
  );
}