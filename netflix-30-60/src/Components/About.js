import React from "react";
import ab from "./ab.png";


        function About(){

            return(
                <> <img src={ab} width="1520px" height="480px"/>
                <div className="about-container">
                <h3>Abouts Us</h3>
                <p>IMDb is the world's most popular and authoritative source for movie, TV, and celebrity information. Watch trailers, get showtimes, and buy tickets for upcoming films. Rate and review shows you've seen and track what you want to watch using your Watchlist. IMDb takes you behind the scenes with exclusive IMDb Originals, celebrity interviews, and more. Stay up to date with entertainment news, awards, and events.</p>
                </div>
                </>
            );
        }
export default About;