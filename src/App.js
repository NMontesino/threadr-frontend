import React from 'react'
import './App.css'
import Sidebar from './containers/Sidebar'
import Body from './containers/Body'

function App() 
{
  return(

    <div className="App">

      <Sidebar className="sidebar" />
      <Body className="app-body" />

    </div>

  )
}

export default App
