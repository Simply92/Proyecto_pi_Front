import {Link} from "react-router-dom"
import imgWel from './welcome.png';

import styles from './Landing.module.css';
import { useEffect, useState } from "react";

const Landing = () => {
    const [btnEnabled, setBtnEnabled] = useState(true);
    const [mostrarSpan, setMostrarSpan] = useState(false);

   useEffect(() => {
    setBtnEnabled(true);
    

    const timeout = setTimeout(() => {
        setBtnEnabled(false)
        setMostrarSpan(true)
    }, 5000)

    return () => clearTimeout(timeout)
   }, [])


    return(
        <div className={styles.lanFon}>
        <div className={styles.todo}>
        <img className={styles.wel} src={imgWel} alt="" />
        <Link to="/home">
        <button disabled={btnEnabled} className={styles.btn}>
        <div className={styles.pokeball}>
      <div className={styles.pokeballTop}></div>
      <div className={styles.pokeballBot}></div>
      <div className={styles.pokeballLine}></div>
      <div className={styles.pokeballCenter}>
        <div className={styles.pokeballCenterBut}>
        {
            mostrarSpan && <span className={styles.go}>GO</span>
        }
        </div>
      </div>
    </div>
        </button>
        </Link>
        </div>
    </div>
    
    )
  
}


export default Landing;