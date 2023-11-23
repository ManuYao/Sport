import React from 'react'
import { motion } from "framer-motion";
import ImgPerso from '../images/perso.png'
import '../styles/MenuHeader.scss'

export default function MenuHeader() {
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
