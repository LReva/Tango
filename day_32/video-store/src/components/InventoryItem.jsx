export default function InventoryItem({item, onClickShowDetails}){
  return (
    <div className="video">
    <h4>{item.title}</h4>
    <img src={item.image} alt="Oops" onClick={event=> {
      event.stopPropagation()
      onClickShowDetails(item.id)}}/>   
    <p>Available copies: {item.copiesAvailable.current}</p>
    </div>
  )
}