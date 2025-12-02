function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage > 80) emoji = "🥇";
  if (percentage <= 80 && percentage > 60) emoji = "🥈";
  if (percentage <= 60 && percentage > 40) emoji = "🥉";
  if (percentage <= 40) emoji = "😞";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        ({Math.ceil(percentage)} %)
      </p>
      <p className="highscore">(highscore : {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
