import React from "react";
import styled from "styled-components";
// import PropertyItem from './PropertyItem';
import data from "../database/data.json";

const Properties = () => {
  console.log(data.map((obj) => obj));
  return (
    <Container>
     {
      data.map((obj,i)=><PropertyItem {...obj} key={i}/>)
     }
    </Container>
  );
};

function PropertyItem({ name }) {
  return (
    <PropertyContainer>
      <p>{name}</p>
      <button>Add to favourites</button>
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

export default Properties;
