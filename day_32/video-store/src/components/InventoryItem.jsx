import { useNavigate } from "react-router-dom";

export default function InventoryItem({item}){
  const navigate = useNavigate()
  return (
    <div className="video">
    <h4 className="itemTitle">{item.title}</h4>
    <img src={item.image} alt="Oops" onClick={() => navigate(`/film/${item.id}`)}/>   
    {/* <p>Available copies: {item.copiesAvailable.current}</p> */}
    </div>
  )
}