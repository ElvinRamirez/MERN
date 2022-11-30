import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';

import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route element={<Main/>} path="/home" default />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
