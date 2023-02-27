import React,{useState , useEffect} from 'react'
import '../styles/App.css';
const App = () => {
 const [counter , setCounter] = useState(false);
 const [text , setText] = useState('');

 
 

 const handleDoubleClick = (event) =>{
  switch(event.detail){
    case 1: console.log("I was not double clicked"); break;
    case 2: console.log("I was double clicked"); break;
  }
}

  return (
    <div id="main">
      <button id="dblclick-btn" onClick={handleDoubleClick}>Double click me</button>
    </div>
  )
}


export default App;
