import React from "react";
import { LetterData } from "./LetterData";

const Writer = ({ match }) => {
  const { writername } = match.params;
  const writer = LetterData[writername];

  return (
    <div>
      <h3>
        {writername}({writer.name}가 지수에게)
      </h3>
      <p>{writer.letter}</p>
    </div>
  );
};

export default Writer;
