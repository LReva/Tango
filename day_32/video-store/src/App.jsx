import './App.css';
import { Outlet } from 'react-router-dom';

export default  function App() {

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <a class="nav-link" href="#">Home </a>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div className="video-row">
        <Outlet/>
      </div>
    </>
  )
}