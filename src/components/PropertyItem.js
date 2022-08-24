import React from "react";
import styled from "styled-components";
const PropertyItem = () => {
  return <Container>
    <p>PropertyItem</p>
    <button>Add to favourites</button>
  </Container>;
};

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid black;
  height: 150px;
  padding: 20px;
  font-size: 30px;
  text-align: center;
`;

export default PropertyItem;
