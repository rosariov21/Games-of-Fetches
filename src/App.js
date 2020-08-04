import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


componentDidMount(){
  axios.get(' http://anapioficeandfire.com/api/characters/583')
  .then(response =>{
    console.log(response.data);
  })
  .catch(error =>{
    console.log(error);
  });
}


function App() {
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
