import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  text-align: center;
  flex-direction: column;
`;
const Player = styled(ReactPlayer)`
  display: block;
  margin: 0px auto;
  /* text-align: center; */
`;
const CakeGif = styled.img`
  display: block;
  margin: 0px auto;
`;

const Cake = () => {
  return (
    <Container>
      <CakeGif src="/Images/cake.gif" alt="cake_play" width="50%" />
      <Player
        url="https://www.youtube.com/watch?v=42Gtm4-Ax2U"
        width="50vw"
        height="50vh"
        playing="true"
        controls
      />
    </Container>
  );
};

export default Cake;
