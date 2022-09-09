import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../redux/actions/action";
import styled from "styled-components";

const Fav = () => {
  const favList = useSelector((state) => state.userReducer.Favs);
  console.log(favList);

  return (
    <div>
      <h1>Favourites</h1>
      <Container>
      {favList ? (
        favList.map((obj, i) => <FavItem {...obj} key={i} />)
      ) : (
        <h1>EMPTY</h1>
      )}
      </Container>
      <Link to="/">Back to home</Link>
    </div>
  );
};

function FavItem({ name, id }) {
  const dispatch = useDispatch();
  function handleRemove(id) {
    dispatch(removeFromFav(id));
    console.log(id);
  }
  return (
    <PropertyContainer>
    <p>{name}</p>
    <button onClick={() => handleRemove(id)}>Remove</button>
  </PropertyContainer>
  );
}

const Container = styled.div`
  border: 2px solid red;
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 12px;
  gap: 25px;
`;

const PropertyContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid black;
  height: 150px;
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;

export default Fav;
