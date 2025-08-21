import { useGameContext } from "@/store/GameContext";

export default function Score() {
  const context = useGameContext();

  const xPlayer = context.player1Mark === "x" ? "P1" : "P2";
  const oPlayer = context.player1Mark === "o" ? "P1" : "P2";

  return (
    <div className="w-full grid grid-cols-3 gap-300">
      <div className="flex flex-col items-center bg-teal-dark rounded-[16px] py-150">
        <span className="text-body text-green-dark uppercase">
          X ({xPlayer})
        </span>
        <span className="text-heading-m text-green-dark">
          {context.gameState.score.x}
        </span>
      </div>
      <div className="flex flex-col items-center bg-gray-dark rounded-[16px] py-150">
        <span className="text-body text-green-dark uppercase">Ties</span>
        <span className="text-heading-m text-green-dark">
          {context.gameState.score.ties}
        </span>
      </div>
      <div className="flex flex-col items-center bg-orange-dark rounded-[16px] py-150">
        <span className="text-body text-green-dark uppercase">
          O ({oPlayer})
        </span>
        <span className="text-heading-m text-green-dark">
          {context.gameState.score.o}
        </span>
      </div>
    </div>
  );
}
