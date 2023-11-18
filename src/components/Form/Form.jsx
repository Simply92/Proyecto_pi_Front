import { useEffect, useState } from "react";
import { postPokemon, getTypes } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validate from "./validate";
import style from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const pokemons = useSelector((state) => state.allPokemons)

  const [input, setInput] = useState({
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    image: "",
    types: [],
  });
  const [error, setError] = useState({
    name: "",
    stats: "",
    types: []
  });

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setError(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      }, pokemons)
    );
  };

  const handleCheck = (e) => {
    if (e.target.checked){
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
    setError(
      validate({ ...input, types: [...input.types, e.target.value] })
    );
  }else{
    setInput({
      ...input,
      types: input.types.filter( // Filtra los tipos para mantener solo aquellos que no son el tipo deseleccionado
        (c) => input.types.indexOf(c) !== input.types.indexOf(e.target.value)
      ),
    });
    setError(
      validate(
        {
          ...input,
          types: input.types.filter(
            (c) =>
              input.types.indexOf(c) !== input.types.indexOf(e.target.value)
          ),
        }
      )
    );
  }
  };

  const handleReset = () => {
    setInput({
      name: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      image: "",
      types: [],
    });
    setError({
      name: "",
      stats: "",
      types: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPokemon(input));
    alert("Successfully created character");
    setInput({
      name: "",
      types: [],
      image: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
    });
  };


  return (
    <div className={style.contenedor}>
      <div className={style.btnTop}>
      <Link to={"/home"}>
        <button className={style.btnHome}>Go home</button>
      </Link>
      <button className={style.btnReset} 
           onClick={handleReset}>Reset</button>
           </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.conTypes}>
          <div className={style.types}>
            {types.map((type) => (
              <label className={style.labelType} key={type.id}>
                <input
                  className={style.inputType}
                  type="checkbox"
                  value={type.name}
                  name="type"
                  checked={input.types.includes(type.name)}
                  onChange={handleCheck}
                />
                {type.name}
              </label>
            ))}
          </div>
        </div>
        <div className={style.inputs}>
          <input
            className={style.inputName}
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Enter name"
            value={input.name}
          />
          <div className={style.range}>
            <label className={style.label}>Hp: {input.hp}</label>
            <input
              className={style.inputRange}
              value={input.hp}
              type="range"
              min="0"
              max="100"
              name="hp"
              onChange={handleChange}
            />

            <label className={style.label}>Attack: {input.attack}</label>
            <input
            className={style.inputRange}
              value={input.attack}
              onChange={handleChange}
              type="range"
              min="0"
              max="200"
              name="attack"
            />

            <label className={style.label}>Defense: {input.defense}</label>
            <input
            className={style.inputRange}
              value={input.defense}
              onChange={handleChange}
              type="range"
              min="0"
              max="200"
              name="defense"
            />

            <label className={style.label}>Speed: {input.speed}</label>
            <input
            className={style.inputRange}
              value={input.speed}
              onChange={handleChange}
              type="range"
              min="0"
              max="200"
              name="speed"
            />

            <label className={style.label}>Height: {input.height}</label>
            <input
            className={style.inputRange}
              value={input.height}
              onChange={handleChange}
              type="range"
              min="0"
              max="200"
              name="height"
            />

            <label className={style.label}>Weight: {input.weight}</label>
            <input
            className={style.inputRange}
              value={input.weight}
              onChange={handleChange}
              type="range"
              min="0"
              max="2000"
              name="weight"
            />
          </div>
        </div>
        <div className={style.imga}>
          <label className={style.label}>IMAGE</label>
          <input
          className={style.inputImg}
            type="text"
            value={input.image}
            name="image"
            placeholder="URL image"
            onChange={handleChange}
          />
          <div className={style.errors}>
            {error.name && <p>{error.name}</p>}
            {error.types && <p>{error.types}</p>}
            {error.stats && <p>{error.stats}</p>}
          </div>
          <button
          className={style.btnCreate}
          type="submit"
          disabled={
            error.name ||
            error.types ||
            error.stats
          }>Create</button>
        </div> 
      </form>
    </div>
  );
};

export default Form;
