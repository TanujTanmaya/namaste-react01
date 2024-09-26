import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate=useNavigate();


  const handleNav=()=>{
    navigate('/about');
  }


  return (
    <div>
       <h1>Contact Us page</h1>

       <button onClick={handleNav}>About</button>
    </div>
  )
}

export default Contact
