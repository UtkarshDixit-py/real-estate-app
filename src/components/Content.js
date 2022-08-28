import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Filters from "./Filters";
import Properties from "./Properties";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProperty } from "../redux/actions/action";

const Content = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://mocki.io/v1/0066c442-504c-4972-bbba-1b96603d2ad6`)
      .then((res) => res.json())
      .then((actualData) => dispatch(setProperty(actualData)));
  }, []);

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
