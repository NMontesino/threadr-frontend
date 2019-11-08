import React from 'react'
import './App.css'
import Sidebar from './containers/Sidebar'
import Body from './containers/Body'

function App() 
{
  return(

    <div className="App" style={{'width': '100%', 'height': '100vh', 'border': '1px solid black', 'padding': '16px'}}>

      <Sidebar className="sidebar" />
      <Body className="app-body" />

    </div>

  )
}

export default App
