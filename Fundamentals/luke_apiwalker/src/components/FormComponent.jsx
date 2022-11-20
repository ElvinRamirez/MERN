import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";

//anything that changes need to be a State variable
const FormComponent = () =>{
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //to selected category on submit
        navigate(`/${category}/${id}`)
    };

    return(
            <form onSubmit={handleSubmit}>
                Search For: {" "}
                <select onChange={ (e) => setCategory(e.target.value)}>
                    <option value="">---</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                ID: <input type="text" onChange={ (e) => setId(e.target.value)} />
                <input type="submit" value="Search" />
            </form>
    )
}

export default FormComponent;