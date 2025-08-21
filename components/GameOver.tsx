import { useGameContext } from "@/store/GameContext";
import {
  Button,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import OIcon from "./ui/OIcon";
import XIcon from "./ui/XIcon";
import { dropShadow } from "@/lib/util";
import { redirect } from "next/navigation";

export default function GameOver() {
  const context = useGameContext();

  let title;

  if (context.gameState.winner === null) {
    title = <span />;
  } else if (context.gameState.winner === context.player1Mark) {
    title = <span>Player 1 wins!</span>;
  } else {
    title = <span>Player 2 wins!</span>;
  }

  let description;
  let descriptionColor;

  if (context.gameState.winner === null) {
    description = <span>Round tied</span>;
    descriptionColor = "text-gray-dark";
  } else if (context.gameState.winner === "x") {
    description = (
      <>
        <XIcon />
        <span>takes the round</span>
      </>
    );
    descriptionColor = "text-teal-dark";
  } else {
    description = (
      <>
        <OIcon />
        <span>takes the round</span>
      </>
    );
    descriptionColor = "text-orange-dark";
  }

  return (
    <Dialog open={true} onClose={() => {}} className="relative z-50">
      <div className="fixed inset-0 w-screen bg-black/50">
        <DialogPanel className="fixed top-1/2 -translate-y-1/2 w-screen h-fit bg-green-dark flex flex-col gap-200 items-center py-550">
          <DialogTitle className="text-heading-xs text-gray-dark uppercase">
            {title}
          </DialogTitle>
          <Description
            className={`flex items-center gap-300 text-heading-l ${descriptionColor} uppercase`}
          >
            {description}
          </Description>
          <div className="flex gap-200">
            <Button
              className="bg-gray-dark hover:bg-gray-light p-200 rounded-[8px] text-heading-s text-black uppercase cursor-pointer"
              style={dropShadow(8)}
              onClick={() => context.quitGame()}
            >
              Quit
            </Button>
            <Button
              className="bg-orange-dark hover:bg-orange-light p-200 rounded-[8px] text-heading-s text-black uppercase cursor-pointer"
              style={dropShadow(8)}
              onClick={() => context.nextRound()}
            >
              Next round
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
