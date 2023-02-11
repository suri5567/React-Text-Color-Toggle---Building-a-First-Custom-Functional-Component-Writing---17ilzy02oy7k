import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here
  const [className, setClassName] = useState("redColor");
  const [value, setValue] = useState(true);
  
  
 const updateOnClick = ()=>{
    setValue(!value);
   }
   
   useEffect(()=>{
       if(value==true){
            setClassName("redColor");
       }
        else{
            setClassName("blueColor");
        }
   })
 
 
 
  return (
    <div id="main">
     
      <h1 className={className}>Newton School</h1>
      <button id='button' onClick={updateOnClick}>Change Style</button>
    </div>
  )
}


export default App;
