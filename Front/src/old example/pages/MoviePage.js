import React, {useContext} from 'react';
import MainContext from "../context/MainContext";
import {useParams} from "react-router-dom";
import SingleMovie from "../components/SingleMovie";
import Reservations from "../components/Reservations";

const MoviePage = () => {
    const {id} = useParams()
    const {movies} = useContext(MainContext)

    console.log(movies[id])
    return (
        <div className="d-flex">
            <div className="grow1">
                <SingleMovie movie={movies[id]}/>
            </div>
            <div className="grow3">
                <Reservations arr={movies[id].seats}/>
            </div>
        </div>
    );
};

export default MoviePage;