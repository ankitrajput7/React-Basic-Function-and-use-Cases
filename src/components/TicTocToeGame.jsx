import { useState } from "react";

function Box({ value, onSquareClick }) {
  return (
    <button
      style={{
        width: "80px",
        height: "80px",
        fontSize: "larger",
        fontWeight: "normal",
        backgroundColor: "red",
        color: "white",
      }}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ nextMove, square, onPlay }) {
  const [result, setResult] = useState("");

  const handleClick = (i) => {
    nextMove ? (square[i] = "X") : (square[i] = "O");
    
    setResult(checkResult(square));
    onPlay(square);
  };

  const handleReset = () => {
    onPlay(["", "", "", "", "", "", "", "", ""]);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "240px",
          margin: "auto",
        }}
      >
        <h1 style={{ margin: "auto" }}>Tic Toc Toe</h1>
        <div
          style={{
            display: "flex",
          }}
        >
          <Box value={square[0]} onSquareClick={() => handleClick(0)} />
          <Box value={square[1]} onSquareClick={() => handleClick(1)} />
          <Box value={square[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <Box value={square[3]} onSquareClick={() => handleClick(3)} />
          <Box value={square[4]} onSquareClick={() => handleClick(4)} />
          <Box value={square[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <Box value={square[6]} onSquareClick={() => handleClick(6)} />
          <Box value={square[7]} onSquareClick={() => handleClick(7)} />
          <Box value={square[8]} onSquareClick={() => handleClick(8)} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
            padding: "10px",
          }}
        >
          <button
            style={{
              padding: "2px",
              width: "100px",
              fontSize: "1rem",
              backgroundColor: "green",
              border: "none",
              color: "white",
              borderRadius:"4px"
            }}
            onClick={handleReset}
          >
            Reset
          </button>
          <div style={{
            fontSize:"1.25rem",
            fontWeight:"bold"
          }}>{result} </div>
        </div>
      </div>
    </>
  );
}

function TicTocToeGame() {
  let [boardArr, setBoardArr] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentMove, setCurrentMove] = useState(0);
  let nextMove = currentMove % 2 === 0;

  const handlePlay = (nextSquares) => {
    setBoardArr(nextSquares);

    let count = 0;
    for (let i = 0; i < 9; i++) {
      if (nextSquares[i].length > 0) count++;
    }
    setCurrentMove(count);
  };

  return (
    <div
      style={{
        width: "full",
      }}
    >
      <Board nextMove={nextMove} square={boardArr} onPlay={handlePlay} />
    </div>
  );
}

function checkResult(arr) {
  let results = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < results.length; i++) {
    let r = arr[results[i][0]];
    let count = 0;

    for (j = 0; j < 3; j++) {
      if (r.length > 0 && r == arr[results[i][j]]) count++;
    }

    if (count == 3) return `Winner = ${r}`;
  }

  return "No result.";
}

export default TicTocToeGame;
