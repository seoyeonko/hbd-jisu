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

const LetterBox = styled(Link)`
  display: block;
  margin: 40px 0px;
`;

const Letter = () => {
  return (
    <Container>
      <p>📮 TO. Jisu</p>

      <LetterBox>
        <Link to="/letter/seoyeon">
          <img src="/Images/msg_blue.png" alt="logo_lettering" width="10%" />
        </Link>
        <Link to="/letter/gahee">
          <img src="/Images/msg_yellow.png" alt="logo_lettering" width="10%" />
        </Link>
      </LetterBox>

      <Route
        path="/letter"
        exact
        render={() => <div>과연 누구의 편지일까요오옹? 🤔</div>}
      />
      <Route path="/letter/:writername" component={Writer} />
    </Container>
  );
};

export default Letter;
