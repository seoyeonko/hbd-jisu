import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const MainLogo = styled.div`
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;
const MenuBar = styled.header`
  font-size: 28px;
  color: black;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  z-index: 10;

  /* top: 0;
  left: 0; */
  /* background-color: rgba(20, 20, 20, 0.7); */
  /* box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8); */
`;
const List = styled.ul`
  display: flex;
  border-top: 5px solid #e6ccff;
  border-bottom: 5px solid #e6ccff;
`;
const Item = styled.li`
  margin: 0px 80px;
  /* font-family: "Comic Sans MS", cursive, sans-serif; */
  font-size: 28px;
  letter-spacing: 1.6px;
  color: #000000;
  font-weight: 700;
  padding: 20px 30px;
  text-shadow: 1px 2px 4px
    ${(props) => (props.current ? "#8120A4" : "transparent")};
  transition: text-shadow 0.5s ease-in-out;
`;

const Header = ({ location: { pathname } }) => {
  return (
    <>
      <MainLogo>
        <Link to="/">
          <img
            src="/Images/logo_lettering.png"
            alt="logo_lettering"
            width="384px"
            height="384px"
          />
        </Link>
      </MainLogo>
      <MenuBar>
        <List>
          <Item current={pathname === "/letter"}>
            <Link to="/letter">LETTER</Link>
          </Item>
          <Item current={pathname === "/cake"}>
            <Link to="/cake">CAKE</Link>
          </Item>
          <Item current={pathname === "/photo"}>
            <Link to="/photo">PHOTO</Link>
          </Item>
        </List>
      </MenuBar>
    </>
  );
};

export default withRouter(Header);
