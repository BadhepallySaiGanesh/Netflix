import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/Home"><img className="headericon" src="https://logospng.org/download/netflix/logo-netflix-4096.png" alt="logo" /></Link>
                <Link to="/movies/popular" className="link"><span>Popular</span></Link>
                <Link to="/movies/top_rated" className="link" ><span>Top Rated</span></Link>
                <Link to="/movies/upcoming"className="link"><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header