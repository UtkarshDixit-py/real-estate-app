import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Filters from "./Filters";
import Properties from "./Properties";

const Content = () => {
  return (
    <Container>
      <Search />
      <Filters />
      <Properties />
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid green;
  margin-top: 25px;
  margin-right: 15rem;
  margin-left: 15rem;
`;

export default Content;
