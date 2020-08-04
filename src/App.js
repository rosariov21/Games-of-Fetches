import React from 'react';
import logo from './logo.svg';
import './App.css';
import JonSnowBorn from './Component/JonSnowBorn';
import HouseTargaryen from './Component/HouseTargaryen';
import HouseLannister from './Component/HouseLannister';
import HouseBaratheon from './Component/HouseBaratheon';
import MargaeryBorn from './Component/MargaryBorn';





function App() {
  return (
    <div className="App">
   <JonSnowBorn/>
   <MargaeryBorn/>
   <HouseTargaryen/>
   <HouseLannister/>
   <HouseBaratheon/>
    </div>
  );
}

export default App;
