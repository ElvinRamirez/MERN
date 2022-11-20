import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Planets = (props) =>{
    const  { id } = useParams();
    const [apiData,setApiData] = useState({});
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/planets/${id}`)
        .then((response) =>{
            setIsError(false);
            console.log(response.data)
            setApiData(response.data);
        })
        .catch((err) => {
            console.log(err)
            setIsError(true);
        });
        //when [variable] changes, recall useEffect
    }, [id]);
    if (!isError){
        return (
            <div>
                <h1>{apiData.name}</h1>
                <p>Terrain: {apiData.terrain}</p>
                <p>Surface Water: {apiData.surface_water}</p>
                <p>Pupulation: {apiData.population}</p>
            </div>
        );
    }else{
        return (
            <>
            <h2>These aren't the droids you're looking for</h2>
            <img src="https://i.annihil.us/u/prod/marvel/i/mg/c/70/62f3e87ab6da3/clean.jpg" alt="" />
            </>
        )
    }
}

export default Planets;