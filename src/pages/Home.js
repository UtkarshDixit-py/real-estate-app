import React from "react";
import styled from "styled-components";
import Search from "../components/Search";
import Filters from "../components/Filters";
import Properties from "../components/Properties";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProperty } from "../redux/actions/action";

const Home = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch(`https://mocki.io/v1/0066c442-504c-4972-bbba-1b96603d2ad6`)
  //     .then((res) => res.json())
  //     .then((actualData) => dispatch(setProperty(actualData)));
  // }, []);

  useEffect(() => {
    fetch(`https://mocki.io/v1/f18f2f92-d960-4b72-b41e-7d9b237a50c0`)
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
  margin-top: 25px;
  margin-right: 15rem;
  margin-left: 15rem;
`;

export default Home;
