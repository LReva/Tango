import InventoryItem from "../components/InventoryItem";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from '@mui/material/Pagination';


export default function Inventory(){

  const[inventoryData, setInventoryData] = useState([])
  const[page, setPage] = useState(1);
  const filmsPerPage = 4

  const topTwelve = ['The Shawshank Redemption', 
  'The Godfather', 
  'The Dark Knight',
  'The Godfather Part II', 
  '12 Angry Men', 
  "Schindler's List",
  'The Lord of the Rings: The Return of the King',
  'Pulp Fiction',
  'The Lord of the Rings: The Fellowship of the Ring',
  'The Good, the Bad and the Ugly',
  'Forrest Gump',
  'Fight Club'
  ]

  const pageCount = Math.ceil(topTwelve.length / filmsPerPage)

  const changePage = (event, value) => {
    setPage(value)
  }

  const startIndex = (page - 1) * 4;
  const endIndex = startIndex + 4;
  const pageItems = inventoryData.slice(startIndex, endIndex);

  async function fetchData() {
    let newInventory = []
    for (let film of topTwelve) {
      let response = await axios.get(`http://www.omdbapi.com/?apiKey=${import.meta.env.VITE_omdbApiKey}&t=${film}`)
      let filmData = {
        "id":response.data.imdbID,
        "title": response.data.Title,
        "image":response.data.Poster,
        // "copiesAvailable": {
        //   "current": 6,
        //   "total": 6
        // }
      }
      newInventory.push(filmData)
    }
    setInventoryData(newInventory)
  }

  useEffect(()=> {
    fetchData()
  },[])
  
  return(
    <> 
      <h1>Welcome to our video Store</h1>
      <h2>Current inventory</h2>     
    {inventoryData.length > 0 ? (
    <div className="video-Inventory">
      {pageItems.map((item) => <InventoryItem 
                                    item = {item} 
                                    key={item.id}/>)} 
     </div>) : (
      <div>Loading...</div>
    )}
      <Pagination count={pageCount}
      page = {page}
      onChange={changePage}/>
    </>
  )
}