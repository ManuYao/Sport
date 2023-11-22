import React from 'react'
import { motion } from "framer-motion";
import '../styles/MenuHeader.scss'

export default function MenuHeader() {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
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
   
        <motion.ul className='menu_header' variants={container} initial='hidden' animate='visible'>
            
            <motion.li variants={item}>
                <nav>
                    <p>acceuil</p>
                    <p>apropos</p>
                    <p>map</p>     
                </nav>
            </motion.li>
            <motion.li className='title_img' variants={item}>
                <p>Y</p>
                <img src='#' alt='Logo Img'/>
            </motion.li>
            
        </motion.ul>

    
  )
}
