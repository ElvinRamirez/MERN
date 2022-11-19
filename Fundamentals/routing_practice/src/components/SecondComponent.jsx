import React from 'react';
import { useParams } from 'react-router-dom';

const SecondComponent = (props) =>{
    //destructuring:
    const {word, color, backgroundCol} = useParams();

    return(
        <div>
            {
                isNaN(word)?
                //ternary
                //if the paramater isn't a number do:
                //color? = does color exist?
                //if color doesn't exist = null
                <p style={color?{color: color, backgroundColor: backgroundCol} :null}>
                    The word is: {word}
                </p>
                :
                //or else (if the parameter is a number) do:
                <p>
                    The number is: {word}
                </p>
            }
        </div>
    )
}

export default SecondComponent;