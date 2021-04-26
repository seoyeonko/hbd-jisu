import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 40px;
  p {
    margin: 20px;
  }
  text-align: center;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  margin: 0px 80px;
  font-size: 24px;
  color: #000000;
  img {
    display: block;
  }
`;
const SLink = styled(Link)``;

const Letter = () => {
  return (
    <Container>
      <p>📮 TO. Jisu</p>

      <List>
        <Item>
          <img src="/Images/msg_blue.png" alt="logo_lettering" width="25%" />
          <SLink to="/letter/seoyeon">FROM. Seoyeon</SLink>
        </Item>
        <Item>
          <img src="/Images/msg_yellow.png" alt="logo_lettering" width="25%" />
          <SLink to="/letter/gahee">FROM. Gahee</SLink>
        </Item>
      </List>
    </Container>
  );
};

export default Letter;
