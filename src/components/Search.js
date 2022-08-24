import React from "react";
import styled from "styled-components";

const Search = () => {
  return (
  <Container>
    <Heading>
      Search properties for rent
    </Heading>
    <SearchBar>
      <input placeholder="Search Here"></input>
    </SearchBar>
  </Container>
  );
};

const Container = styled.div`
  border: 2px solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h1`

`

const SearchBar = styled.div`

`

export default Search;
