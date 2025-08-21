"use client";

import { useGameContext } from "@/store/GameContext";
import TurnIndicator from "./TurnIndicator";
import OIcon from "./ui/OIcon";
import XIcon from "./ui/XIcon";
import { Button } from "@headlessui/react";
import RestartIcon from "./ui/RestartIcon";
import { dropShadow } from "@/lib/util";

export default function Bar() {
  const context = useGameContext();

  return (
    <div className="grid grid-cols-3 gap-300 items-center">
      <div className="flex gap-100">
        <XIcon />
        <OIcon />
      </div>
      <TurnIndicator mark={context.gameState.currentPlayer} />
      <Button
        className="flex justify-center items-center p-200 bg-gray-dark rounded-[8px] cursor-pointer"
        style={dropShadow(4)}
        onClick={() => context.restartRound()}
      >
        <RestartIcon />
      </Button>
    </div>
  );
}
