import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../redux/actions/action";

const Properties = () => {
  const propList = useSelector((state) => state.userReducer.List);
  const searchedList = useSelector((state) => state.userReducer.searchedList);
  const currentData = searchedList.length === 0 ? propList : searchedList;

  console.log(currentData);

  return (
    // <Container>
    //   {currentData.map((obj, i) => <PropertyItem {...obj} key={i} />)}
    // </Container>

    // SEMANTIC UI

    <div class="ui link cards">
      {currentData.map((obj, i) => (
        <PropertyItem {...obj} key={i} />
      ))}
    </div>
  );
};

function PropertyItem({ name, id, imgUrl, address, beds, baths, area ,tenantsPreferred , furnishing , amenities }) {
  const [fav, setfav] = useState(false);
  const changeFavButton = () => setfav(!fav);

  const dispatch = useDispatch();
  function handleAddToFav(id) {
    changeFavButton();
    dispatch(addToFav(id));
  }
  function handleRemoveFromFav(id) {
    changeFavButton();
    dispatch(removeFromFav(id));
  }

  function toggleFav() {
    changeFavButton();
    changeFavButton ? dispatch(addToFav(id)) : dispatch(removeFromFav(id));
  }

  return (
    // <PropertyContainer>
    //   <p>{name}</p>
    //   {
    //     fav ?
    //     <button onClick={() => handleRemoveFromFav(id)}>Remove from favourites</button>
    //     :
    //     <button onClick={() => handleAddToFav(id)}>Add to favourites</button>

    //   }

    // </PropertyContainer>

    // SEMANTIC UI
    <div class="ui fluid card">
      <div class="content">
      <img class="right floated medium ui image" src={imgUrl} />
        <div class="header">{name}</div>
        <div class="ui tag labels">
          <a class="ui label">
            {tenantsPreferred}
          </a>
            {amenities.map((item)=>
              (
                <a class="ui label">{item}</a>
              ))}
        </div>
        {fav ? (
            <button
              onClick={() => handleRemoveFromFav(id)}
              class="mini ui button"
            >
              Remove fav.
            </button>
          ) : (
            <button onClick={() => handleAddToFav(id)} class="mini ui inverted orange button">
              Add to fav.
            </button>
          )}
        <div class="description">{address}</div>
      </div>
      <div class="extra content">
        <span class="right floated">Area : {area}</span>
        <span>
          <i class="bed icon"></i>
          {beds} beds &amp; {baths} baths
        </span>
      </div>
    </div>
  );
}

const Container = styled.div`
  /* border: 2px solid red; */
  display: flex;
  grid-template-columns: auto auto auto;
  row-gap: 12px;
  gap: 25px;
  padding: 50px 2px;
`;


const PropertyContainer = styled.div`
  /* border: 1px solid black;
  height: 150px;
  padding: 20px;
  font-size: 30px;
  text-align: center;

  img {
    height: 100px;
    width: inherit;
  } */
`;

export default Properties;
