import React from 'react'
import styled from 'styled-components';
import PropertyItem from './PropertyItem';

const Properties = () => {
  return (
    <Container>
      <PropertyItem />
      <PropertyItem />
      <PropertyItem />
      <PropertyItem />
      <PropertyItem />
      <PropertyItem />
    </Container>
    );
  };
  
  const Container = styled.div`
    border: 2px solid red;
    display: grid;
    grid-template-columns: auto auto auto;
    row-gap: 12px;
    gap: 25px;
  `;

export default Properties