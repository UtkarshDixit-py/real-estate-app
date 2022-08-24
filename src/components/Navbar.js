import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Conatiner>
      <Logo></Logo>
      <NavListWrapper>
        <Navitem href="#">Buy</Navitem>
        <Navitem href="#">Rent</Navitem>
        <Navitem href="#">Manage Property</Navitem>
        <Navitem href="#">Resources</Navitem>
      </NavListWrapper>
      <User>
        <button>Login</button>
      </User>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  border: 2px solid red;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Logo = styled.div`
  border: 2px solid green;
  height: 15px;
  width: 15px;
`;
const NavListWrapper = styled.nav`
  border: 2px solid yellow;
  display: flex;
`;

const User = styled.div`
  border: 2px solid blue;
`;
const Navitem = styled.a`
  margin: 10px;
  text-decoration: none;
  color: inherit;
`;

export default Navbar;
