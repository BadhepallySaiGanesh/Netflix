import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme >
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} className="cardgani">
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="ddd" />
                <div className="cards__overlay">
                    <div className="card__title">
                        {movie.original_title}
                        </div>
                    <div className="card__runtime">
                        {movie.release_date}
                        <span className="card__rating">
                            {movie.vote_average}<i className="fas fa-star" />
                            </span>
                    </div>
                    <div className="card__description">
                        { movie.overview.slice(0,110)}
                        </div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards;