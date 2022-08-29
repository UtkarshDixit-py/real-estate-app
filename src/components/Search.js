import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { searchPropertyList } from "../redux/actions/action";

const Search = () => {


  var handleSearch=(e)=>{
    search(e.target.value)
  }

  const propertyList = useSelector((state)=>state.userReducer.List);
  const dispatch = useDispatch();
  const search=(input)=>{
    const filteredPropertyList = propertyList.filter((propertyItem)=>{
      const {name, address } = propertyItem;
      const fullDetail = name + address;
      if(fullDetail.toLowerCase().includes(input.toLowerCase())){
        return true;
      }
      return false;
    });

    dispatch(searchPropertyList(filteredPropertyList));
  }
  return (
  <Container>
    <Heading>
      Search properties for rent
    </Heading>
    <SearchBar>
      <input 
        placeholder="Search Here"
        type="text"
        onChange={(e)=>handleSearch(e)}
        ></input>
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
