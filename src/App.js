
import React, { useState } from "react"; 
  
import "./App.css"; 
  
const App = () => { 

  const [counter, setCounter] = useState(0) 
  
  const handleClick1 = () => { 
    setCounter(counter + 1) 
  } 
  
  const handleClick2 = () => { 
    setCounter(counter - 1) 
  } 
  
  return ( 
    <div style={{ 
      color: 'blue',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontSize: '300%', 
      position: 'absolute', 
      width: '100%', 
      height: '100%', 
      top: '-15%', 
    }}> 
      Just a Counter App 
      <div style={{ 
        fontSize: '120%', 
        position: 'relative', 
        top: '10vh', 
        color: 'purple'
      
      }}> 
        {counter} 
      </div> 
      <div className="buttons"> 
        <button style={{ 
          fontSize: '60%', 
          position: 'relative', 
          top: '20vh', 
          marginRight: '5px', 
          borderRadius: '8%', 
          color: 'black', 
        }} 
          onClick={handleClick1}>Number go up</button> 
        <button style={{ 
          fontSize: '60%', 
          position: 'relative', 
          top: '20vh', 
          marginLeft: '5px', 
          borderRadius: '8%', 
          color: 'black', 
        }} 
          onClick={handleClick2}>Number go down</button> 
      </div> 
    </div> 
  ) 
} 
  
export default App
