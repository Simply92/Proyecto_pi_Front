import ImageError from "./psyduck_error.png"
import Page from "./PageNotFound.png"
import style from "./Error.module.css"
import { Link } from "react-router-dom"
import Return from "./Return.png"

const ErrorPage = () => {


    return(
        <div className={style.contenedor}>
            <div className={style.fondo}>
            <img className={style.imgError} src={ImageError} alt="" />
            <img src={Page} alt="" />
        
           </div>
        <Link to="/home">
            <button className={style.button}><img src={Return} alt="" /></button>
        </Link>
        </div>
    )
}


export default ErrorPage;