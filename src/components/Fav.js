import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFav } from '../redux/actions/action'

const Fav = () => {

  const favList = useSelector((state=>state.userReducer.Favs))
  console.log(favList)

  return (
    <div>
      <h1>Favourites</h1>
          {
            favList ? favList.map((obj,i)=><FavItem {...obj} key={i}/>) : <h1>EMPTY</h1>
          }
        <Link to = "/">Back to home</Link>
    </div>
    
  )
}

function FavItem({name , id}){
  const dispatch = useDispatch();

  function handleRemove(id){
    dispatch(removeFromFav(id))
    console.log(id)
  }
  return(
    <div>
      <p>{name}</p>
      <button onClick={()=>handleRemove(id)}>remove</button>
    </div>
  )
}

export default Fav