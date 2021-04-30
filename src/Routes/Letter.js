import React, { useState } from "react";
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
  const [msgClick1, setMsgClick1] = useState(true);
  const [msgClick2, setMsgClick2] = useState(true);
  const [msgClick3, setMsgClick3] = useState(true);
  const [msgClick4, setMsgClick4] = useState(true);

  return (
    <Container>
      <p>📮 TO. Jisu</p>

      <LetterBox>
        {msgClick1 ? (
          <Link to="/letter/abc" onClick={() => setMsgClick1(!msgClick1)}>
            <img
              src="/Images/msg_pink_f.png"
              alt="logo_lettering"
              width="10%"
            />
          </Link>
        ) : (
          <Link to="/letter" onClick={() => setMsgClick1(!msgClick1)}>
            <img
              src="/Images/msg_pink_t.png"
              alt="logo_lettering"
              width="10%"
            />
          </Link>
        )}
        {msgClick2 ? (
          <Link to="/letter/seoyeon" onClick={() => setMsgClick2(!msgClick2)}>
            <img
              src="/Images/msg_yellow_f.png"
              alt="logo_lettering"
              width="10%"
            />
          </Link>
        ) : (
          <Link to="/letter" onClick={() => setMsgClick2(!msgClick2)}>
            <img
              src="/Images/msg_yellow_t.png"
              alt="logo_lettering"
              width="10%"
            />
          </Link>
        )}
        {msgClick3 ? (
          <Link to="/letter/def" onClick={() => setMsgClick3(!msgClick3)}>
            <img
              src="/Images/msg_blue_f.png"
              alt="logo_lettering"
              width="10%"
            />
          </Link>
        ) : (
          <Link to="/letter" onClick={() => setMsgClick3(!msgClick3)}>
            <img
              src="/Images/msg_blue_t.png"
              alt="logo_lettering"
              width="10%"
            />
          </Link>
        )}{" "}
        {msgClick4 ? (
          <Link to="/letter/gahee" onClick={() => setMsgClick4(!msgClick4)}>
            <img
              src="/Images/msg_green_f.png"
              alt="logo_lettering"
              width="10%"
            />
          </Link>
        ) : (
          <Link to="/letter" onClick={() => setMsgClick4(!msgClick4)}>
            <img
              src="/Images/msg_green_t.png"
              alt="logo_lettering"
              width="10%"
            />
          </Link>
        )}
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
