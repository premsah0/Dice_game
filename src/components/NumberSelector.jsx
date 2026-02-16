import { useState } from "react";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div className="flex flex-col items-end pt-17">
      <p className="text-red-500">{error}</p>

      <div className="flex gap-6">
        {arrNumber.map((value, i) => (
          <div
            key={i}
            onClick={() => numberSelectorHandler(value)}
            className={`
              h-[72px] w-[72px] border border-black grid place-items-center
              text-[24px] font-bold cursor-pointer
              ${
                value === selectedNumber
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }
            `}
          >
            {value} 
          </div>
        ))}
      </div>

      <p className="text-[24px] pt-5 font-bold">Select Number</p>
    </div>
  );
};

export default NumberSelector;
