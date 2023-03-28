import React from 'react'
import './App.css'
import VideoComponent from "./components/VideoComponent.jsx" 
import inventory from "./data/inventory.json"

function App() {

  return (
    <div>
      <h1>Welcome to our video store</h1>
      <VideoComponent inventory={inventory}/>
    </div>
  )
}

export default App