import { Link } from "react-router-dom";
import style from './Card.module.css'
import POKImg from './pokeimg.webp'

const Card = (poke) =>{
    
    return(
        <div className={poke.types.includes("normal")? style.contenedor : 
        poke.types.includes("rock")? style.rock : poke.types.includes("fire")? style.fire : 
        poke.types.includes("water")? style.water : poke.types.includes("electric")? style.electric :
        poke.types.includes("grass")? style.grass : poke.types.includes("ghost")? style.ghost : 
        poke.types.includes("ground")? style.ground : poke.types.includes("bug")? style.bug : style.demas}>
        <h3 >{poke.name.toUpperCase()}</h3>
        <Link to={`/detail/${poke.id}`}>
        <img className={style.ima} src={poke.image ? poke.image : POKImg} alt={poke.name}/>
        </Link>
        <h4>Attack: {poke.attack}</h4>
        <h4>{  
            poke.types.join(' - ').toUpperCase()
            }
            </h4>
        </div>
    )
}

export default Card;