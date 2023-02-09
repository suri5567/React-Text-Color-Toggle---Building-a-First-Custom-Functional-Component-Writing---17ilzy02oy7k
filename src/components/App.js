import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here
  const [change, setChange] = useState(false);
 
  return (
    <div id="main">
       {change?<p className={} style={{color:"blue" fontSize:"30px" fontStyle="italic"}} >Newton School</p>:<p className={}>Newton School</p>}
      
      <button id='button' onClick={()=>setChange = !change}>Change Style</button>
    </div>
  )
}


export default App;
