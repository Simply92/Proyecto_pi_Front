import { useDispatch, useSelector } from "react-redux"
import { clearDetail, getPokemonId } from "../../Redux/actions"
import { useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import Loading from "../Loading/Loading";
import style from "./Detail.module.css"
import pokeImg from '../Card/pokeimg.webp'

const Detail = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    useEffect(() =>{
       dispatch(getPokemonId(id))
    },[dispatch, id])
    const pokemon = useSelector((state) => state.pokedetail)

    const handleBack = () => {
        dispatch(clearDetail())
    }

    return (
        <div className={style.contenedor}>
        <Link to="/home">
            <button className={style.btn} onClick={handleBack}>Go Home</button>
        </Link>
        {pokemon.length? (
            <div>
            <div className={style.name}>
            <h1>Name: {pokemon[0].name.toUpperCase()}</h1>
            </div>
            <div className={style.info}>
            <div className={style.conImg}>
            <img className={style.Img} src={pokemon[0].image ? pokemon[0].image : pokeImg} alt="" />
            </div>
            <div className={style.datos}>
            <h2>Types: {pokemon[0].types.join(" - ").toUpperCase()}</h2>
            <h3>ID: {pokemon[0].id}</h3>
            <h3>Hp: {pokemon[0].hp}</h3>
            <h3>Attack: {pokemon[0].attack}</h3>
            <h3>Defense: {pokemon[0].defense}</h3>
            <h3>Speed: {pokemon[0].speed}</h3>
            <h3>Height: {pokemon[0].height}</h3>
            <h3>Weight: {pokemon[0].weight}</h3>
            </div>
            
            </div>
            </div>
        ): (
            <Loading/>
        )}
        </div>
    )
}


export default Detail;