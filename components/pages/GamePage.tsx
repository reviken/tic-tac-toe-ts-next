"use client";

import { useGameContext } from "@/store/GameContext";
import GameOver from "@/components/GameOver";
import Score from "@/components/Score";
import Board from "@/components/Board";
import Bar from "@/components/Bar";

export default function GamePage() {
  const context = useGameContext();

  return (
    <main className="flex flex-col w-[400px] gap-250">
      <Bar />
      <Board />
      <Score />
      {context.gameState.mode === "game-over" && <GameOver />}
    </main>
  );
}
