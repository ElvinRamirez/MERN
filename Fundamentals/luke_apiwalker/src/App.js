import logo from './logo.svg';
import './App.css';
import FormComponent from './components/FormComponent';
import People from './components/People';
import Planets from './components/Planets';

import {BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <FormComponent />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/" />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
