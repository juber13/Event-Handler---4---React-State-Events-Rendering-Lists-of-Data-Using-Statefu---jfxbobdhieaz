import React,{useState} from 'react'
import '../styles/App.css';
const App = () => {
 const [isTrue , setTrue] = useState(false);

 
 const handleDoubleClick = (event) =>{
   if(event.detail === 2) console.log("I was double clicked" );
   else if(event.detail === 1)
    console.log("I was not double cliked");
}

  return (
    <div id="main">
      <button id="dblclick-btn" onClick={handleDoubleClick}>Double click me</button>
    </div>
  )
}


export default App;
