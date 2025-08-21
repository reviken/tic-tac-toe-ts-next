export type Mark = "x" | "o";
export type Mode = "play" | "game-over";

export type GameState = {
  mode: Mode;
  winner: Mark | null;
  currentPlayer: Mark;
  board: (Mark | null)[][];
  score: {
    x: number;
    o: number;
    ties: number;
  };
};

export type Input = {
  row: number;
  column: number;
};

export function initializeGameState(): GameState {
  return {
    mode: "play",
    winner: null,
    currentPlayer: "x",
    board: Array(3)
      .fill(null)
      .map(() => Array(3).fill(null)),
    score: {
      x: 0,
      o: 0,
      ties: 0,
    },
  };
}

export function updateGameState(state: GameState, input: Input): GameState {
  if (
    input.row < 0 ||
    input.row >= state.board.length ||
    input.column < 0 ||
    input.column >= state.board[0].length
  ) {
    return state;
  }

  if (state.board[input.row][input.column] !== null) {
    return state;
  }

  const newState: GameState = {
    mode: state.mode,
    winner: null,
    currentPlayer: state.currentPlayer === "x" ? "o" : "x",
    board: state.board.map((row, rowIndex) =>
      row.map((cell, columnIndex) => {
        if (rowIndex === input.row && columnIndex === input.column) {
          return state.currentPlayer;
        } else {
          return cell;
        }
      }),
    ),
    score: { ...state.score },
  };

  const freeCellCount = getFreeCellCount(newState);
  const winner = getWinner(newState);

  if (winner !== null || freeCellCount === 0) {
    newState.mode = "game-over";
    newState.winner = winner;
  }

  return newState;
}

function getFreeCellCount(state: GameState): number {
  return state.board.reduce(
    (acc, row) =>
      acc + row.reduce((acc, cell) => acc + (cell === null ? 1 : 0), 0),
    0,
  );
}

function getWinner(state: GameState): Mark | null {
  const { board } = state;

  // Check rows
  for (let row = 0; row < board.length; row++) {
    if (
      board[row][0] === board[row][1] &&
      board[row][1] === board[row][2] &&
      board[row][0] !== null
    ) {
      return board[row][0];
    }
  }

  // Check columns
  for (let col = 0; col < board[0].length; col++) {
    if (
      board[0][col] === board[1][col] &&
      board[1][col] === board[2][col] &&
      board[0][col] !== null
    ) {
      return board[0][col];
    }
  }

  // Check diagonals
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== null
  ) {
    return board[0][0];
  }

  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] !== null
  ) {
    return board[0][2];
  }

  return null;
}

export function advanceRound(state: GameState): GameState {
  const newScore = {
    ...state.score,
    x: state.winner === "x" ? state.score.x + 1 : state.score.x,
    o: state.winner === "o" ? state.score.o + 1 : state.score.o,
    ties: state.winner === null ? state.score.ties + 1 : state.score.ties,
  };

  return {
    mode: "play",
    winner: null,
    currentPlayer: "x",
    board: Array(3)
      .fill(null)
      .map(() => Array(3).fill(null)),
    score: newScore,
  };
}

export function resetRound(state: GameState): GameState {
  return {
    ...state,
    board: Array(3).fill(Array(3).fill(null)),
  };
}
