import React from 'react'
import {motion} from 'framer-motion'
import GitImg from '../images/GitImg.png'

export default function IconEffect() {
  return (
    <div>
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 4.8,
                delay: 1.5,
                ease: [0, 0.71, 0.2, 1.01]
      }}
        >
        <motion.div 
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
        >
        <img src={GitImg} alt='Error-img-git' 
        style={{width: '32px',height: '32px'}}     
            />
        </motion.div>
        </motion.div> 
    </div>
  )
}