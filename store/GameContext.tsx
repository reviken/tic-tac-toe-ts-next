"use client";

import {
  advanceRound,
  GameState,
  initializeGameState,
  Mark,
  resetRound,
  updateGameState,
} from "@/lib/game";

import { redirect } from "next/navigation";
import { createContext, useContext, useState } from "react";

type GameContextType = {
  player1Mark: Mark;
  setPlayer1Mark: (mark: Mark) => void;
  gameState: GameState;
  selectCell: (row: number, column: number) => void;
  nextRound: () => void;
  restartRound: () => void;
  quitGame: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

type GameContextProviderProps = {
  children: React.ReactNode;
};

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [player1Mark, setPlayer1Mark] = useState<Mark>("x");
  const [gameState, setGameState] = useState<GameState>(initializeGameState());

  function selectCell(row: number, column: number) {
    setGameState((state) => updateGameState(state, { row, column }));
  }

  function nextRound() {
    setGameState((state) => advanceRound(state));
  }

  function restartRound() {
    setGameState((state) => resetRound(state));
  }

  function quitGame() {
    setGameState(initializeGameState());
    redirect("/");
  }

  const value = {
    player1Mark,
    setPlayer1Mark,
    gameState,
    selectCell,
    nextRound,
    restartRound,
    quitGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameContextProvider");
  }
  return context;
}
