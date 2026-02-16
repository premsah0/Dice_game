const StartGame = ({ toggle }) => {
  return (
    <div className="max-w-[1180px] h-screen flex mx-auto items-center">
      <div>
        <img src="/images/dices.png" alt="dice" />
      </div>

      <div className="ml-5">
        <h1 className="text-[96px] whitespace-nowrap">Dice Game</h1>

        <button
          onClick={toggle}
          className="bg-black text-white px-6 py-3 rounded-lg mt-4 hover:opacity-90 transition"
        >
          Play Now
        </button>
      </div>
    </div>
  );
};
export default StartGame