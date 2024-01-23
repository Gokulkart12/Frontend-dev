import React, { useEffect, useState } from 'react'

const Header = () => {

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000);
  })
      
    
    
  return (
    <div> 
        <h4> Time : {date.toLocaleTimeString()} </h4>
        <h4 className='date'> Date : {date.toLocaleDateString()} </h4>
    </div>
  )
}

export default Header