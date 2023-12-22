//TitileEffect
import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import '../styles/StyleTitleAnim.css'

//Icon Effect
import GitImg from '../images/GitImg.png'
import {motion} from 'framer-motion'

//TitileEffect
export function TitleEffect() {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, { //Move Effect 🌌
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#2dd4bf",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80},
      { transform: "perspective(600px) rotateX(180deg)", color: "#34d399" },
      { transform: "perspective(600px) rotateX(0deg)" }
    ],
    leave: [
      { color: "#e11d48" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 }
    ],
    update: { color: "#1f2937" }
  });

  //
  const reset = useCallback(() => { //Non réexécuté pour chaque rendu "Callback"
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(["y", "street", "workout"]), 1500) //"setTimeout" lance ma fonction & "set" mes à jour les données
      );
      ref.current.push(setTimeout(() => set(["y", "workout"]), 7000));
      ref.current.push(
      setTimeout(() => set(["y", "sport", "workout"]), 10000)
    );
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <div className="container">
      <div className="main">
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            className="transitionsItem"
            style={rest}
            onClick={reset}
          >
            <animated.div style={{ overflow: "hidden", height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

//Effect icon Zoom & transition
export function IconEffect() {
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