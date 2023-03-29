import InventoryItem from "../components/InventoryItem";
import Details from "../components/Details"
import { useState } from "react";

export default function Inventory({inventory}){

  const [filmDetails, setfilmDetails] = useState(false);
  const[inventoryData, setInventoryData] = useState(inventory)

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
    <div className="video-Inventory">
      {inventoryData.map((item, key) => <InventoryItem 
                                    item = {item} 
                                    key={item.id} 
                                    filmDetails = {filmDetails} 
                                    onClickShowDetails = {onClickShowDetails}/>)}
    </div>
    <button onClick={()=>onClickShowDetails(null)}>Clear out</button>
    {filmDetails && <Details item={filmDetails} onClickReturnOrRent = {onClickReturnOrRent} />}
    </>
  )
}