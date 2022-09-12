import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { searchPropertyList } from "../redux/actions/action";

const Search = () => {
  var handleSearch = (e) => {
    search(e.target.value);
  };

  const propertyList = useSelector((state) => state.userReducer.List);
  const dispatch = useDispatch();

  const search = (input) => {
    const filteredPropertyList = propertyList.filter((propertyItem) => {
      const { name, address } = propertyItem;
      const fullDetail = name + address;
      if (fullDetail.toLowerCase().includes(input.toLowerCase())) {
        return true;
      }
      return false;
    });

    dispatch(searchPropertyList(filteredPropertyList));
  };
  return (
    <Container>
      <Heading>Search properties for rent</Heading>
      {/* <SearchBar>
      <input 
        placeholder="Search Here"
        type="text"
        onChange={(e)=>handleSearch(e)}
        ></input>
    </SearchBar> */}
      <div class="ui search">
        <div class="ui icon input">
          <input class="prompt" type="text" placeholder="Search" onChange={(e)=>handleSearch(e)}/>
          <i class="search icon"></i>
        </div>
        <div class="results"></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const Heading = styled.h1`
color: #0E6EB8;
font-size: 45px;
`;



export default Search;
