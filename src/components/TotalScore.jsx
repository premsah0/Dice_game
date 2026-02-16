const TotalScore = ({ score }) => {
  return (
    <div className="max-w-50 text-center">
      <h1 className="text-[100px] leading-25">{score} </h1>
      <p className="text-[24px] font-medium">Total Score</p>
    </div>
  );
};

export default TotalScore;
