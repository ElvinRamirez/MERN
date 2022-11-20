
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

//useEffect for getting info when the component loads

const People = (props) => {
    //return <h1>People component</h1>
    const  { id } = useParams();
    //set the response from the api to an object
    const [apiData,setApiData] = useState({});
    const [homeworld, setHomeworld] = useState("");
    const [homeworldId, setHomeworldId] = useState();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/people/${id}`)
        .then((response) => {
            setIsError(false);
            console.log(response.data);
            //set data to state variable
            setApiData(response.data);

            axios
            .get(response.data.homeworld)
            .then((homeworldResponse) =>{
                console.log(homeworldResponse.data.name);
                setHomeworld(homeworldResponse.data.name);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
            console.log(err);
            setIsError(true);
        });
        //pass props variable to force the useEffect callback
        //to also run when the category or id has changed
}, [id]);


    if (!isError){
        //if no errors
        return (
            <div>
                <h1>{apiData.name}</h1>
                <p>Height: {apiData.height} cm</p>
                <p>Eye Color: {apiData.eye_color}</p>
                <p>Skin Color: {apiData.skin_color}</p>
                <p>Homeworld: {homeworld}</p>
            </div>
        );
    } else{
        return (
            <>
            <h2>These aren't the droids you're looking for</h2>
            <img src="https://i.annihil.us/u/prod/marvel/i/mg/c/70/62f3e87ab6da3/clean.jpg" alt="" />
            </>
        )
    }
};

export default People;