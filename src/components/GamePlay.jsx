import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";

function GamePlay() {
  return (
    <mainContainer>
      <div className="flex justify-around items-end">
        <TotalScore />
        <NumberSelector />
      </div>
      <RollDice />
    </mainContainer>
  );
}

export default GamePlay;
