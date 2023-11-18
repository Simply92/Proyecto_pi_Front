import {GET_POK, GET_ID, GET_NAME, GET_TYPES, FIL_TYPE, CLEAR_DETAIL, FIL_CREATE, ORDER_NAME, ORDER_ATTACK, CLEAR_HOME} from "../actions/types"
//
const initialState = {
    allPokemons: [],
    pokemons: [],
    pokedetail: {},
    types: [],
}
let pokOrder;
let pokSort;
let typeSelected;
let results;



const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_POK:
            return{
                ...state,
                allPokemons: payload,
                pokemons: payload
            }
        case GET_ID:
            return{
                ...state,
                pokedetail: payload
            }
        case GET_NAME:
            return{
                ...state,
                pokemons: payload
            }
        case GET_TYPES:
            return{
                ...state,
                types: payload
            }
        case CLEAR_DETAIL:
            return{
                ...state,
                pokedetail: {}
            }
        case FIL_TYPE:
            typeSelected = state.allPokemons;
            results =
              payload === "type"
                ? typeSelected
                : typeSelected.filter((e) => e.types.includes(payload));
            return {
              ...state,
              pokemons: results,
            };
            
        case ORDER_NAME:
                pokOrder = state.pokemons.slice();
                pokSort = (payload === "ascending"? pokOrder.sort((a, b) =>{
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                }): (payload === "descending")? pokOrder.sort((a, b) =>{
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                }): pokOrder)
                return{
                    ...state,
                    pokemons: pokSort
                }
        case ORDER_ATTACK:
                pokOrder = state.pokemons.slice();
                pokSort = (payload === "ascending"? pokOrder.sort((a, b) =>{
                    if (a.attack < b.attack) return 1;
                    if (a.attack > b.attack) return -1;
                    return 0;
                }): (payload === "descending")? pokOrder.sort((a, b) =>{
                    if (a.attack > b.attack) return 1;
                    if (a.attack < b.attack) return -1;
                    return 0;
                }): pokOrder)
                return{
                    ...state,
                    pokemons: pokSort
                }
        case FIL_CREATE:
            if(payload === "All"){
                return{
                    ...state,
                    pokemons:state.allPokemons
                }
            }
            if(payload === "Created") {
                const pokeDB = state.allPokemons.filter((pok) => typeof pok.id === "string")
                return{
                    ...state,
                    pokemons: pokeDB
                }
            }
            if(payload === "Api") {
                const pokeApi = state.allPokemons.filter((pok) => typeof pok.id === "number")
                return{
                    ...state,
                    pokemons: pokeApi
                }
            }
            break;
        case CLEAR_HOME:
            return{
                ...state,
                pokemons: state.allPokemons
            }

        default: 
        return {...state}
   
    }
}

export default rootReducer;