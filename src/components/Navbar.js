import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const favList = useSelector((state) => state.userReducer.Favs);

  return (
    // <Conatiner>
    //   <Logo></Logo>
    //   <NavListWrapper>
    //     <Navitem href="#">Buy</Navitem>
    //     <Navitem href="#">Rent</Navitem>
    //     <Navitem href="#">Manage Property</Navitem>
    //     <Navitem href="#">Resources</Navitem>
    //   </NavListWrapper>
    //   <User>
    //     <FavLink to="/fav">
    //       Favourites<sup>{favList.length}</sup>
    //     </FavLink>
    //     <button>Login</button>
    //   </User>
    // </Conatiner>
    <Conatiner>
    <div class="ui huge menu">
      <a class="active item">Home</a>

      <Link to="/fav" class="item">
        Favourites<sup>{favList.length}</sup>
        </Link>
      <div class="right menu">
        
        <div class="item">
          <div class="ui primary button">Log In</div>
        </div>
      </div>
    </div>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  padding-left:10%;
  padding-right: 10%;
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
  display: flex;
  align-items: center;

  button {
    margin: 10px;
  }
`;

const FavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Navitem = styled.a`
  margin: 10px;
  text-decoration: none;
  color: inherit;
`;

export default Navbar;
