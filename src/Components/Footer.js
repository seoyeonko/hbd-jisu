import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
  /* 스크롤상황에서도 하단 고정되도록 수정 */
  margin-top: 100px;
  margin-bottom: 50px;
  font-size: 16px;
  text-align: center;

  div {
    margin: 15px 0px;
  }
`;

const Footer = () => {
  return (
    <FooterBox>
      <div>💜 Happy JISU Day 💜</div>
      #지수의_눈부신_앞날을_응원해 #오늘만큼은_지수천사 #솔직히_감동이지?
      <div>Made by. Seoyeon & Gahee</div>
    </FooterBox>
  );
};

export default Footer;
