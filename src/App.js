import logo from './logo.svg';
import kanye from './assets/images/kanye.png'
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const[quote, setQuote]= useState([])
  const [refresh, setReFresh]= useState(false)
  const getQuote = useEffect(()=>{
    axios.get('https://api.kanye.rest/')
    .then(res=>{
      console.log(res.data)
      setQuote(res.data.quote)
    
    })
    .catch(err=>console.log(err))
  },[refresh])
  return (
    <div className="App">
      <h1>Random Kanye Quote</h1>
    <p>" {quote} "</p>
      <button onClick={()=> setReFresh(!refresh)}>New Quote</button>
  
    </div>
  );
}

export default App;
