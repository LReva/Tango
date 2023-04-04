import InventoryItem from "../components/InventoryItem";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Inventory(){

  const[inventoryData, setInventoryData] = useState([])

  const topTen = ['The Shawshank Redemption', 
  'The Godfather', 
  'The Dark Knight',
  'The Godfather Part II', 
  '12 Angry Men', 
  "Schindler's List",
  'The Lord of the Rings: The Return of the King',
  'Pulp Fiction',
  'The Lord of the Rings: The Fellowship of the Ring',
  'The Good, the Bad and the Ugly'
  ]
  
  async function fetchData() {
    let newInventory = []
    for (let film of topTen) {
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
    {inventoryData.length > 0 ? (
    <div className="video-Inventory">

      {inventoryData.map((item) => <InventoryItem 
                                    item = {item} 
                                    key={item.id}/>)} 
     </div>) : (
      <div>Loading...</div>
    )}
    </>
  )
}