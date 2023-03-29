export default function Details({item, onClickReturnOrRent}){
  return (
    <div>
      <div className="movie-desription">
        <h4>Title: {item.title}</h4>
        <h5>Rating: {item.rating}</h5>
        <p>{item.description}</p>
        <p>Copies available {item.copiesAvailable.current}/{item.copiesAvailable.total}</p>
        <div className="rent-return">
          <button disabled = {item.copiesAvailable.current === 0}
                  onClick={()=>onClickReturnOrRent(item.id, "RentOut")}>
                    Rent</button>
          <button disabled = {item.copiesAvailable.current === item.copiesAvailable.total}
                  onClick={()=>onClickReturnOrRent(item.id, "Return")}>Return</button>
        </div>
      </div>
    </div>
  )
}