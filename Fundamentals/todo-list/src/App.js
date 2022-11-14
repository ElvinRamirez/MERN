import './App.css';
import React, {useState} from "react";
import Display from './components/Display';
import Form from './components/Form';

function App() {
  const arr = [
    {content: 'Discussion questions', complete: false},
    {content: 'Core assignments', complete: false},
  ]
  const [list, setList] = useState(arr);
  return (
    <>
    <header className="d-flex justify-content-center bd-highlight mb-2 ">
      <h1>To Do List</h1>
    </header>
    <main className="d-flex flex-row bd-highlight justify-content-evenly">  
      <Form list={list} setList={setList}/>
      <Display list={list} setList={setList}/>
    </main>
    </>
  );
}

export default App;
