import React from "react";

        const IMG_API= "https://image.tmdb.org/t/p/w1280";
        const Movie =({title, poster_path , overview, vote_average,release_date})=>(
        <div className="movie">
            <img src={IMG_API+poster_path} alt={title} />
            <div className="movie-info">
                <h6>{title}</h6>
                <span>{vote_average}</span>
                <div>{release_date}</div>
                <div className="see">
            </div>
            <a href="/details"> <button className="btn btn-danger">See details</button></a>

            </div>
        </div>
        );
export default Movie;