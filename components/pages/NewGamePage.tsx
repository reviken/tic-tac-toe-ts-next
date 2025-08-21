"use client";

import XIcon from "@/components/ui/XIcon";
import OIcon from "@/components/ui/OIcon";
import { Button } from "@headlessui/react";
import MarkButton from "@/components/MarkButton";
import { useGameContext } from "@/store/GameContext";
import { redirect } from "next/navigation";
import { dropShadow } from "@/lib/util";

export default function NewGamePage() {
  const context = useGameContext();

  return (
    <main className="w-[400px] flex flex-col gap-400 items-center">
      <div className="flex gap-100">
        <XIcon />
        <OIcon />
      </div>
      <div
        className="w-full bg-green-light rounded-[16px] p-300 flex flex-col gap-300 items-center"
        style={dropShadow(8)}
      >
        <h2 className="text-heading-xs text-gray-dark uppercase">
          Pick player 1&apos;s mark
        </h2>
        <div className="w-full bg-green-dark rounded-[8px] p-100 flex gap-100">
          <MarkButton
            mark="x"
            selected={context.player1Mark === "x"}
            onClick={() => context.setPlayer1Mark("x")}
          />
          <MarkButton
            mark="o"
            selected={context.player1Mark === "o"}
            onClick={() => context.setPlayer1Mark("o")}
          />
        </div>
        <p className="text-body text-gray-dark uppercase">
          Remember: X goes first
        </p>
      </div>
      <div className="flex flex-col gap-200 w-full">
        <Button
          className="text-heading-s text-green-dark uppercase bg-orange-dark hover:bg-orange-light py-200 w-full rounded-[16px] cursor-pointer"
          style={dropShadow(8)}
        >
          New game (vs CPU)
        </Button>
        <Button
          className="text-heading-s text-green-dark uppercase bg-teal-dark hover:bg-teal-light py-200 w-full rounded-[16px] cursor-pointer"
          style={dropShadow(8)}
          onClick={() => redirect("/game")}
        >
          New game (vs player)
        </Button>
      </div>
    </main>
  );
}
