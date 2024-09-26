import React, { useMemo, useState,useCallback, useRef, useEffect } from 'react'
import { findNthPrime } from '../utils/helper';

const Demo = () => {

    const [text,setText]=useState("0");
    const[isDark,setisDark]=useState(false);
    const [count, setCount] = useState(0);
    const previousHandleClick = useRef();

    const prime= useMemo(()=> findNthPrime(text),[text]);

    

    // Memoizing the handleClick function so it's not recreated on every render
    const handleClick = useCallback(() => {
      setCount(prevCount => prevCount + 1);
    }, []); // Dependency array is empty, meaning handleClick won't be recreated
  
    console.log('App component re-rendered');


    useEffect(() => {
        if (previousHandleClick.current === handleClick) {
          console.log('handleClick is the same instance');
        } else {
          console.log('handleClick is a new instance');
        }
        // Store the current handleClick function for future comparison
        previousHandleClick.current = handleClick;
      }, [count]);

        console.log(handleClick);

    //console.log("Rendering");
  return (
    <>
<div className={'m-4 p-2 w-96 h-96 border border-black ' + (isDark && "bg-gray-900 text-white")}>

        <div>
            <button className='m-8 p-2 bg-green-600' onClick={()=> setisDark(!isDark)}>Toggle</button>
        </div>

      <div>
        <input className='border border-black w-72 px-3' type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
      </div>

      <div>
        <h1>nth Prime:{prime}</h1>
      </div>
    </div>



    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>

    </>
  )
}

export default Demo
