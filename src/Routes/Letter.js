import React from "react";
import { Link, Route } from "react-router-dom";
import Writer from "../Components/Writer";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 40px;
  text-align: center;
  p {
    margin: 20px;
  }
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  margin: 0px 80px;
  font-size: 24px;
  color: #000000;
`;
const SLink = styled(Link)`
  div {
    /* flex-direction: column; */
  }
`;

const Letter = () => {
  return (
    <Container>
      <p>📮 TO. Jisu</p>

      <List>
        <Item>
          <SLink to="/letter/seoyeon">
            <div>
              <img
                src="/Images/msg_blue.png"
                alt="logo_lettering"
                width="25%"
              />
              <span>FROM. Seoyeon</span>
            </div>
          </SLink>
        </Item>

        <Item>
          <SLink to="/letter/gahee">
            <div>
              <img
                src="/Images/msg_yellow.png"
                alt="logo_lettering"
                width="25%"
              />
              <span>FROM. Gahee</span>
            </div>
          </SLink>
        </Item>
      </List>

      <hr />
      <Route path="/letter" exact render={() => <div>편지 선택하세유</div>} />
      <Route path="/letter/:writername" component={Writer} />
    </Container>
  );
};

export default Letter;
