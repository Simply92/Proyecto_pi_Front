import { useState, useEffect } from "react";
import { orderName, filterCreate, filterType, orderAttack, clearHome, getTypes } from "../../Redux/actions";
import {useDispatch, useSelector} from 'react-redux'
import style from './Filter.module.css'



// eslint-disable-next-line react/prop-types
const Filter = ({setCurrent}) => {
    const types = useSelector((state) => state.types);
    const dispatch = useDispatch()
    const [op1, setOp1] = useState('');
    const [op2, setOp2] = useState('');
    const [op3, setOp3] = useState("All");
    const [op4, setOp4] = useState('');
    
    useEffect(() => {
        dispatch(getTypes());
      }, []);

    const handleName = (event) => {
        dispatch(orderName(event.target.value))
        setOp1(event.target.value)
        setOp2('')
        setCurrent(0)
    }

    const handleAttack = (event) => {
        dispatch(orderAttack(event.target.value))
        setOp2(event.target.value)
        setOp1('')
        setCurrent(0)
    }

    const handleCreated = (event) => {
        dispatch(filterCreate(event.target.value))
        setOp1('');
        setOp2('');
        setOp4("");
        setOp3(event.target.value)
        setCurrent(0)
    }

    const handleType = (event) => {
        dispatch(filterType(event.target.value))
        setOp4(event.target.value)
        setOp3('')
        setOp1('')
        setOp2('')
        setCurrent(0)
    }

    const clearFilters = () =>{
        dispatch(clearHome())
        setOp1('');
        setOp2('');
        setOp3("All");
        setOp4('');
        setCurrent(0)
    }

    return(
        <div className={style.bloq}>
        <div className={style.contenedor}>
            <select className={style.sel} value={op1} onChange={handleName}>
                <option value="" disabled>Order by name</option>
                <option value="ascending">A-Z</option>
                <option value="descending">Z-A</option>
            </select>
            <select className={style.sel} value={op2} onChange={handleAttack}>
                <option value="" disabled>Order by attack</option>
                <option value="ascending">+ Attack</option>
                <option value="descending">- Attack</option>
            </select>
            <select className={style.sel} value={op3} onChange={handleCreated}>
                <option value="All">All pokemons</option>
                <option value="Created">Created pokemons</option>
                <option value="Api">Existing pokemons</option>
            </select>
            <select className={style.sel} value={op4} onChange={handleType}>
                <option value="" disabled>Select type</option>
                <option value="type">All</option>
                {types.map((type) => (
                    <option key={type.id} value={type.name}>
                        {type.name.charAt(0).toUpperCase() + type.name.slice(1)}</option>
                ))}
            </select>
            <button className={style.btn} onClick={clearFilters}>Clear!</button>
        </div>
        </div>
    )


}

export default Filter;
