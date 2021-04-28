import React from "react";
import { LetterData } from "./LetterData";
import styled from "styled-components";

const LetterPaper = styled.div`
  display: block;
  margin: 0 auto;
  width: 50%;

  font-size: 20px;
  /* border: 5px solid #b8b4a5; */
  border-radius: 10px;
  padding: 50px;
  background-color: #e6ccff;

  .to {
    text-align: left;
    font-weight: bold;
    padding-bottom: 20px;
  }
  .from {
    text-align: right;
    padding-top: 10px;
  }
  .letter {
    text-align: left;
    line-height: 1.6;
  }
`;

const Writer = ({ match }) => {
  const { writername } = match.params;
  const writer = LetterData[writername];

  return (
    <LetterPaper>
      <div className="to">TO. JISU</div>
      <p className="letter">{writer.letter}</p>
      <div className="from">FROM. {writer.name_eng}</div>
    </LetterPaper>
  );
};

export default Writer;
