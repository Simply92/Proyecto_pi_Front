import axios from  "axios";
import { GET_ID, GET_NAME, GET_POK, GET_TYPES, POST_POK,
FIL_CREATE, FIL_TYPE, ORDER_NAME, ORDER_ATTACK, CLEAR_HOME, CLEAR_DETAIL, SET_LOADING } from "./types";
const url = import.meta.env.VITE_BACK_URL
import Swal from "sweetalert2";


export const getPokemon = () => {
    return async (dispatch) => {
        try {
            const pokemon = await axios.get(`${url}/pokemons`);
            return dispatch({
                type: GET_POK,
                payload: pokemon.data,
              });
        } catch (error) {
            alert("Error connect")} 
    }
}

export const getPokemonId = (id) => {
    return async (dispatch) => {
        try {
            const pokemonID = await axios.get(`${url}/pokemons/${id}`);
            return dispatch({
                type: GET_ID,
                payload: pokemonID.data
            });
        } catch (error) {
            alert("this pokemon does not exist or error in the back")
        }
    }
}

export const getPokemonName = (name) =>{
    return async (dispatch) => {
        try {
            dispatch({ type: SET_LOADING, payload: true })
            const pokemonName = await axios.get(`${url}/pokemons/?name=${name}`);
            return dispatch({
                type: GET_NAME,
                payload: pokemonName.data
            })
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "this pokemon does not exist!",
                icon: "error",
              });   
        }
        finally {
            dispatch({ type: SET_LOADING, payload: false }); // Establece isLoading a false independientemente de si hay un error o no
          }
    }
}

export const getTypes = () => {
    return async (dispatch) => {
        try {
            const pokemonTypes = await axios.get(`${url}/types`)
            return dispatch({
                type: GET_TYPES,
                payload: pokemonTypes.data
            })
        } catch (error) {
            alert("Error al traer types")
        }
    }
}

export const postPokemon = (data) => {
    return async (dispatch) => {
        const pokemonNew = await axios.post(`${url}/pokemons`, data)
        return dispatch({
            type: POST_POK,
            payload: pokemonNew
        })
    }
}

export const filterCreate = (payload) => {
    return{
        type:FIL_CREATE,
        payload
    }
}

export const filterType = (payload) => {
    return{
        type:FIL_TYPE,
        payload: payload
    }
}

export const orderName = (payload) => {
    return{
        type:ORDER_NAME,
        payload
    }
}

export const orderAttack = (payload) => {
    return{
        type:ORDER_ATTACK,
        payload
    }
}

export const clearHome = () => {
    return{
        type:CLEAR_HOME,
    }
}

export const clearDetail = () => {
    return{
        type:CLEAR_DETAIL,
    }
}
