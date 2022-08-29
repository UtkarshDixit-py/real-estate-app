import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../redux/actions/action";

const Properties = () => {
  const PropList = useSelector((state) => state.userReducer.List);

  return (
    <Container>
      {PropList.map((obj, i) => (
        <PropertyItem {...obj} key={i} />
      ))}
    </Container>

    // SEMANTIC UI
    // <Container>
    //   <div class="ui three link cards">
    //     {PropList.map((obj, i) => (
    //       <PropertyItem {...obj} key={i} />
    //     ))}
    //   </div>
    // </Container>
  );
};

function PropertyItem({ name, id, imgUrl, address, beds, baths, area }) {
  const dispatch = useDispatch();
  function handleAddToFav(id) {
    dispatch(addToFav(id));
  }

  return (
    <PropertyContainer>
      <p>{name}</p>
      {/* <img src={imgUrl} /> */}
      <button onClick={() => handleAddToFav(id)}>Add to favourites</button>
    </PropertyContainer>

    // SEMANTIC UI
    // <div class="card">
    //   <div class="image">
    //     <img src={imgUrl} />
    //   </div>
    //   <div class="content">
    //     <div class="header">{name}</div>
    //     <div class="meta">
    //       <i class="right floated like big icon"></i>
    //     </div>
    //     <div class="description">M{address}</div>
    //   </div>
    //   <div class="extra content">
    //     <span class="right floated">Area : {area}</span>
    //     <span>
    //       <i class="bed icon"></i>
    //       {beds} beds &amp; {baths} baths
    //     </span>
    //   </div>
    // </div>
  );
}

const Container = styled.div`
  border: 2px solid red;
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
