import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import Writer from "../Components/Writer";
import styled from "styled-components";
import msg_pink_f from "../Components/Images/msg_pink_f.PNG";
import msg_pink_t from "../Components/Images/msg_pink_t.PNG";
import msg_yellow_f from "../Components/Images/msg_yellow_f.PNG";
import msg_yellow_t from "../Components/Images/msg_yellow_t.PNG";
import msg_green_f from "../Components/Images/msg_green_f.PNG";
import msg_green_t from "../Components/Images/msg_green_t.PNG";
import msg_blue_f from "../Components/Images/msg_blue_f.PNG";
import msg_blue_t from "../Components/Images/msg_blue_t.PNG";

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
  img {
    margin: 0px 15px;
  }
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
            <img src={msg_pink_f} alt="logo_lettering" width="10%" />
          </Link>
        ) : (
          <Link to="/letter" onClick={() => setMsgClick1(!msgClick1)}>
            <img src={msg_pink_t} alt="logo_lettering" width="10%" />
          </Link>
        )}
        {msgClick2 ? (
          <Link to="/letter/seoyeon" onClick={() => setMsgClick2(!msgClick2)}>
            <img src={msg_yellow_f} alt="logo_lettering" width="10%" />
          </Link>
        ) : (
          <Link to="/letter" onClick={() => setMsgClick2(!msgClick2)}>
            <img src={msg_yellow_t} alt="logo_lettering" width="10%" />
          </Link>
        )}
        {msgClick3 ? (
          <Link to="/letter/def" onClick={() => setMsgClick3(!msgClick3)}>
            <img src={msg_green_f} alt="logo_lettering" width="10%" />
          </Link>
        ) : (
          <Link to="/letter" onClick={() => setMsgClick3(!msgClick3)}>
            <img src={msg_green_t} alt="logo_lettering" width="10%" />
          </Link>
        )}
        {msgClick4 ? (
          <Link to="/letter/gahee" onClick={() => setMsgClick4(!msgClick4)}>
            <img src={msg_blue_f} alt="logo_lettering" width="10%" />
          </Link>
        ) : (
          <Link to="/letter" onClick={() => setMsgClick4(!msgClick4)}>
            <img src={msg_blue_t} alt="logo_lettering" width="10%" />
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
