import InventoryItem from "./InventoryItem"

export default function VideoComponent({inventory}){
  return (
    <div className="video-container">
      <h2>Current inventory</h2>
      <div className="video-Inventory">
        {inventory.map((item, index) => <InventoryItem item = {item} key={index}/>)}
      </div>
    </div>
  )
}