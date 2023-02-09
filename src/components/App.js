import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here
  const [change, setChange] = useState(false);
 
  return (
    <div id="main">
       {change?<p className="blueColor" style={{display:"block"}} >Newton School</p>:<p className="redColor" >Newton School</p>}
      
      <button id='button' onClick={()=>setChange = !change}>Change Style</button>
    </div>
  )
}


export default App;
