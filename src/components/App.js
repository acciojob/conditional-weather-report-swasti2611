
import React from "react";
import './../styles/App.css';
import { useState,useEffect } from "react";
const App = () => {
  const [weatherInput, setWeatherInput] =useState({ temperature: 25, conditions: "Sunny" });
   const [textColor, setTextColor] = useState();
   console.log("11111")
 useEffect(()=>{
  weatherInput.temperature > 20 ? setTextColor("red") : setTextColor("blue");
  console.log("222222")
 },[weatherInput.temperature])
   
     
  return (
    <div>
        {/* Do not remove the main div */}
       <div style ={{color:textColor}}>
        <p>Temperature: {weatherInput.temperature}</p>
        <p>Conditions: {weatherInput.conditions}</p>
       </div>
    </div>
  )
}

export default App
