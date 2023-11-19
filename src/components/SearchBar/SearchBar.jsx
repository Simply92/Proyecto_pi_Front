import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonName } from "../../Redux/actions";
import style from './SearchBar.module.css'


// eslint-disable-next-line react/prop-types
const SearchBar = ({setCurrent}) => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    

    const handleChange = (event) => {
        setInput(event.target.value);
          
    };
    
     const handleSubmit = (event) => {
       event.preventDefault()
       dispatch(getPokemonName(input))
       setInput('')
       setCurrent(0)
     };


    return(
        <div className={style.contenedor}>
        <form className={style.form} onSubmit={handleSubmit} action="">
            <input className={style.input} 
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Search pokemon"
                    />
            <button className={style.btn} type="submit">Search</button>
        </form>
        </div>
    )

}

export default SearchBar;