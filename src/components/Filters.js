import React from 'react'
import styled from 'styled-components';

const Filters = () => {
  return (
    <Container>
      <Location>
          <p>Location</p>
          <input></input>
      </Location>
      <Price>
      <p>Price</p>
      <input></input>
      </Price>
      <PropertyType>
      <p>Property Type</p>
      <p>//dropdown</p>
      </PropertyType>
      <Apply>
        <button>Apply</button>
      </Apply>
    </Container>
    );
  };
  
  const Container = styled.div`
    border: 2px solid yellow;
    display: flex;
    justify-content: space-between;

  `;

  const Location = styled.div`
      border: 2px solid yellow;

  `

  const Price = styled.div`
      border: 2px solid yellow;

  `
  const PropertyType = styled.div`
      border: 2px solid yellow;

  `
  const Apply = styled.div`
      border: 2px solid yellow;
      display: flex;
      align-items: center;

  `

export default Filters