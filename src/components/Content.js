import React from "react";
import styled from "styled-components";
import Search from "./Search";
import Filters from "./Filters";
import Properties from "./Properties";

import { useEffect , useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { setProperty } from "../redux/actions/action";

const Content = () => {

   const propertyList = useSelector((state)=>state.userReducer.List);
   const dispatch = useDispatch();

  useEffect(()=>{
    fetch(``)
      .then((res)=>res.json())
      .then((actualData)=>setProperty(actualData));
  },[])

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
