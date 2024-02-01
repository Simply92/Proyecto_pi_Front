import Card from "../Card/Card";
import { getPokemon } from "../../Redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";
import style from "./Cards.module.css";
import ImgLogo from "./logo3.png";

const Cards = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  const cardsPage = 12;

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  const pageCount = Math.ceil(pokemons?.length / cardsPage); //rendondea para arriba

  const paginatedCards = pokemons?.slice(
    current * cardsPage,
    (current + 1) * cardsPage
  );
  const handleNextClick = () => {
    if (!isLoading && current < pageCount - 1) {
      setCurrent(current + 1);
    }
  };

  const handlePrevClick = () => {
    if (!isLoading && current > 0) {
      setCurrent(current - 1);
    }
  };
  return (
    <div>
      <div className={style.navBar}>
        <img className={style.imgLogo} src={ImgLogo} alt="" />
        <Link to={"/create"}>
          <button className={style.linkBtn}>CREATE NEW POKEMON</button>
        </Link>
        <SearchBar setCurrent={setCurrent} />
      </div>
      <div className={style.contenedor}>
        <div className={style.ssss}>
          <Filter setCurrent={setCurrent} />
          <div className={style.paginado}>
            <button
              className={style.btnFlecha}
              disabled={current === 0}
              onClick={handlePrevClick}
            >
              {"<"}
            </button>
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                className={`${
                  current === index ? style.numberActive : style.numberNormal
                }`}
                key={index}
                disabled={current === index}
                onClick={() => setCurrent(index)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className={style.btnFlecha}
              disabled={current === pageCount - 1}
              onClick={handleNextClick}
            >
              {">"}
            </button>
          </div>
          {paginatedCards.length ? (
            <div className={style.cards}>
              {isLoading ? (
                <Loading />
              ) : (
                paginatedCards.map((poke) => (
                  <Card
                    name={poke.name}
                    key={poke.id}
                    id={poke.id}
                    image={poke.image}
                    attack={poke.attack}
                    types={poke.types}
                  />
                ))
              )}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
