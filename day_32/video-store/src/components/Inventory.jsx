import InventoryItem from "../components/InventoryItem";
import Details from "../components/Details"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Inventory(){

  const [filmDetails, setfilmDetails] = useState(false);
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
        "imdbRating": response.data.imdbRating,
        "rated":response.data.Rated,
        "year": response.data.Year,
        "image":response.data.Poster,
        "cast":response.data.Actors,
        "description":response.data.Plot,
        "copiesAvailable": {
          "current": 6,
          "total": 6
        }
      }
      newInventory.push(filmData)
    }
    setInventoryData(newInventory)
  }

  useEffect(()=> {
    fetchData()
  },[])

  const onClickShowDetails = (id) => {
    if(id) {
      setfilmDetails(inventoryData.find(film => film.id === id))
    }
    else {
      setfilmDetails(false)
    }
  }

  const onClickReturnOrRent = (id, type) => {
    let newInventory = [...inventoryData]
    let selectedItem = newInventory.find(film => film.id === id)
    if (type==="Return") {
      selectedItem.copiesAvailable.current++
    }
    else if(type==="RentOut"){
      selectedItem.copiesAvailable.current--
    }
    setInventoryData(newInventory)
  }
  
  return(
    <>      
    {inventoryData.length > 0 ? (
    <div className="video-Inventory">

      {inventoryData.map((item) => <InventoryItem 
                                    item = {item} 
                                    key={item.id} 
                                    filmDetails = {filmDetails} 
                                    onClickShowDetails = {onClickShowDetails}/>)}

    <button onClick={()=>onClickShowDetails(null)}>Clear out</button>
    {filmDetails && <Details item={filmDetails} onClickReturnOrRent = {onClickReturnOrRent} />}   
     </div>) : (
      <div>Loading...</div>
    )}
    </>
  )
}