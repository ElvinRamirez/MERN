
import './App.css';
import { useState,useEffect } from  'react';
import axios from 'axios';

function App() {
  const [list,setList] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
    
        .then((res) => {
          console.log(res)
          //fild name on api is data.results
          setList(res.data.results)
        })

        .catch((err)=>{
          console.log(err)
        })
        
},[])

  return (
    <div className="App">
      {    
      list.map((pokemon)=>(
        <div>
          <p>{pokemon.name}</p>
        </div>
    ))
  }

    </div>
  );
}

export default App;
