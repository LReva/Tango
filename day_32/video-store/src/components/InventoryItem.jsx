export default function InventoryItem({item}){
  const {title, imgUrl, copiesAvailable} = item;
  return (
      <div className="video">
        <h4>{title}</h4>
        <img src={imgUrl} alt="Opps" />
        <p>Copies available: {copiesAvailable}</p>

        <button 
            disabled={copiesAvailable ===0} 
            onClick= {()=> alert(`You checked out ${title}.`)}
        >Check Out</button>
        <button 
            disabled={copiesAvailable ===6} 
            onClick= {()=> alert(`You checked out ${title}.`)}
        >Return</button>
      </div>
  )
}