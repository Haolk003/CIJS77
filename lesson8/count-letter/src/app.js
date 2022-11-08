import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
    const [letter,setLetter]=useState('');
    const [count,setCount]=useState(0);
    const HandleInput=(e)=>{
        setLetter(e.target.value)
    }
    const word=letter.split(' ').filter((e)=> e!=="");
    useEffect(()=>{
      const time=  setTimeout(()=>setCount(word.length),500);
      console.log(word);
      return () => clearTimeout(time);
    },[word]);
  return (
    <div>
        <textarea value={letter} onChange={HandleInput} style={{width:"600px",height:"300px"}}>
        </textarea>
        <p>Word(s):{count}</p>
    </div>
  )
}

export default App