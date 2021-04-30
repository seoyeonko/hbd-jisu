import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  text-align: center;
  flex-direction: column;
  div {
    padding: 10px 0px;
  }
  span {
    color: #e6ccff;
    margin: 20px;
    font-size: 32px;
    font-weight: bold;
  }
`;
const CakeGif = styled.img`
  display: block;
  margin: 0px auto;
  padding-bottom: 50px;
`;
const Player = styled(ReactPlayer)`
  display: block;
  margin: 0px auto;
  /* text-align: center; */
`;

const Cake = () => {
  return (
    <Container>
      <span>H A P P Y B I R T H D A Y</span>

      <CakeGif src="/Images/cake.gif" alt="cake_play" width="60%" />
      <Player
        url="https://www.youtube.com/watch?v=42Gtm4-Ax2U"
        width="50vw"
        height="50vh"
        playing="true"
        controls
      />
      <div>23rd Birthday Celebration Song 🎶</div>
      <div>Sang by. IU</div>
    </Container>
  );
};

export default Cake;
