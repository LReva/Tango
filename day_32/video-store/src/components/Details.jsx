import { useParams, useLoaderData, useNavigate} from 'react-router-dom';
import inventoryData from './Inventory';
import axios from "axios";
import { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export async function filmLoad({params}) {
  let response = await axios.get(`http://www.omdbapi.com/?apiKey=${import.meta.env.VITE_omdbApiKey}&i=${params.id}`)
  return response.data
}

export default function Details(){
  const navigate = useNavigate();

  const filmDataResponse = useLoaderData()
  let film= {
    "id":filmDataResponse.imdbID,
    "title": filmDataResponse.Title,
    "imdbRating": filmDataResponse.imdbRating,
    "rated":filmDataResponse.Rated,
    "year": filmDataResponse.Year,
    "image":filmDataResponse.Poster,
    "cast":filmDataResponse.Actors,
    "description":filmDataResponse.Plot,
    // "copiesAvailable": {
    //   "current": 6,
    //   "total": 6
    // }
  }
  const [filmData, setFilmData] = useState(film)

//   const onClickReturnOrRent = (type) => {
//     let newFilmData = filmData
//     if (type==="Return") {
//       newFilmData.copiesAvailable.current++
//     }
//     else if(type==="RentOut"){
//       newFilmData.copiesAvailable.current--
//     }
//     setFilmData(newFilmData)
//   }
// console.log(filmData)
  return (
    <div>

      <div className="movie-desription">
        <button className='return' onClick={() => navigate(`/`)}> <ArrowBackIosNewIcon/></button>
        <h4>Title: {filmData.title}</h4>
        <div className="posterDiv">
        <img className="poster"src={filmData.image} alt="" />
        </div>
        <h5>IMDB rating: {filmData.imdbRating}</h5>
        <h5>Rated: {filmData.rated}</h5>
        <h5>Cast: {filmData.cast}</h5>
        <p>{filmData.description}</p>
        {/* <p>Copies available {filmData.copiesAvailable.current}/{filmData.copiesAvailable.total}</p> */}
        <div className="rent-return">
          {/* <button disabled = {filmData.copiesAvailable.current === 0}
                  onClick={()=>onClickReturnOrRent("RentOut")}>
                    Rent</button>
          <button disabled = {filmData.copiesAvailable.current === filmData.copiesAvailable.total}
                  onClick={()=>onClickReturnOrRent("Return")}>Return</button> */}
        </div>
      </div>
    </div>
  )
}