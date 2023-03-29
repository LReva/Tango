import './App.css';
import Inventory from './components/Inventory';
import inventory from './data/inventory.json'


function App() {

  return (
    <>
      <h1>Welcome to our video Store</h1>
      <h2>Current inventory</h2>
      <div className="video-row">
        <Inventory inventory = {inventory}/>
      </div>
    </>
  )
}

export default App