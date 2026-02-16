import React from "react";

function RollDice() {
  const roleDice = ()=>{
    
  }
  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="cursor-pointer" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>

      <p className="text-[24px]">Click on Dice to roll</p>
    </div>
  );
}

export default RollDice;
