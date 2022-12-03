import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';

//import ProductList from './components/ProductList';
//import ProductForm from './components/ProductForm';


function App() {
  return (
    <div className="App d-flex justify-content-center">
      <BrowserRouter> 
        <Routes>
          <Route element={<Main/>} path="/home" default />
          <Route element={<Detail/>} path="/product/:id" />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
