import React, { useState } from 'react'
import Hello from './UseEffect/Hello'
import TOdolist from './UseEffect/TOdolist'


const App = () => {
  // const [helo,setHelo]=useState(true)
  // const hello=()=>{
  //   if (helo===true)
  //     setHelo(false);
  //   else
  //   setHelo(true)
  // }
//  const random=Math.floor(Math.random()*100)
//   const [data, setData]=useState(1);
//   const handle=()=>{
// setData(random)
// alert("haha")
  // }
  return (
  <>
  {/* <h1>{data}</h1>
  <button onClick={handle}>click me </button> */}
  {/* {helo?<h1>hahaha</h1>:""}
  <button onClick={hello}>HAHA</button> */}

{/* <Hello/> */}
<TOdolist/>
  </>
  )
}

export default App