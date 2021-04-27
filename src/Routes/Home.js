import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  p {
    color: #e6ccff;
    margin: 20px;
  }
  div {
    padding: 8px 0px;
  }
  margin-top: 10px;
  display: flex;
  text-align: center;
  flex-direction: column;
`;
const MsgImg = styled.img`
  display: flex;
  display: block;
  margin: 0px auto;
  padding: 20px 0px;
`;
const Player = styled(ReactPlayer)`
  display: block;
  margin: 0px auto;
  /* text-align: center; */
`;

const Home = () => {
  return (
    <Container>
      <p>Scroll Down!</p>

      <MsgImg src="/Images/surprise.png" alt="logo_lettering" width="50%" />
      <MsgImg src="/Images/thankyou.png" alt="logo_lettering" width="50%" />

      <div>일단 노래 먼저 들어주삼^^</div>

      <Player
        url="https://www.youtube.com/watch?v=Ar5-Yitahp8"
        width="50vw"
        height="50vh"
        playing="true"
        controls
      />

      <div>Sang by. SEVENTEEN</div>
    </Container>
  );
};

export default Home;
