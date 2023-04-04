import './App.css';
import { Outlet } from 'react-router-dom';

export default  function App() {

  return (
    <>
      <h1>Welcome to our video Store</h1>
      <h2>Current inventory</h2>
      <div className="video-row">
        <Outlet/>
      </div>
    </>
  )
}