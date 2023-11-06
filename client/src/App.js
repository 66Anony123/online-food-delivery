import React from 'react'
import {Route,Routes} from "react-router-dom"

import URL from './utils/Route';

const App = () => {
  
  return (
    <div>
        <div className = "w-screen min-h-screen h-auto flex items-center justify-center">
 <Routes>
    {URL.map((item)=>{
        return(
<Route key ={item.path} path={item.path} element={item.element}/>)
    })}

 </Routes>
 </div>
            </div>    
  )
}

export default App