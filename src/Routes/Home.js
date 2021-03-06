import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  span {
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
      <span>Scroll Down!</span>

      <MsgImg
        src={require("../Components/Poster/main_img2.png").default}
        alt="main_img2"
        width="75%"
      />
      <MsgImg
        src={require("../Components/Poster/main_img1.png").default}
        alt="main_img1"
        width="75%"
      />

      <Player
        url="https://www.youtube.com/watch?v=Ar5-Yitahp8"
        width="50vw"
        height="50vh"
        playing="true"
        controls
      />
      <div>일단 노래 먼저 들어주겠니...?</div>
      <div>Sang by. SEVENTEEN</div>
    </Container>
  );
};

export default Home;
