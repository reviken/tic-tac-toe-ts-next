"use client";

import { Button } from "@headlessui/react";
import XIcon from "./ui/XIcon";
import OIcon from "./ui/OIcon";
import { useGameContext } from "@/store/GameContext";
import { dropShadow } from "@/lib/util";

export default function Board() {
  const context = useGameContext();

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-250">
      {context.gameState.board.map((row, rowIndex) =>
        row.map((cell, columnIndex) => (
          <Button
            key={`${rowIndex}-${columnIndex}`}
            className={`aspect-square bg-green-light flex items-center justify-center rounded-[16px] ${cell === null ? "cursor-pointer" : null}`}
            style={dropShadow(8)}
            onClick={() => context.selectCell(rowIndex, columnIndex)}
          >
            {cell === "x" ? (
              <XIcon width={64} height={64} />
            ) : cell === "o" ? (
              <OIcon width={64} height={64} />
            ) : null}
          </Button>
        )),
      )}
    </div>
  );
}
