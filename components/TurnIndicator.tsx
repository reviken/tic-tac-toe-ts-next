import OIcon from "@/components/ui/OIcon";
import XIcon from "@/components/ui/XIcon";
import { Mark } from "@/lib/game";

type TurnIndicatorProps = {
  mark: Mark;
};

export default function TurnIndicator({ mark }: TurnIndicatorProps) {
  return (
    <div
      className="flex py-150 px-350 bg-green-light rounded-[8px] gap-150 items-center justify-center select-none"
      style={{ boxShadow: "0 4px 0 rgba(0, 0, 0, 0.2)" }}
    >
      {mark === "x" ? (
        <XIcon
          fillColor="var(--color-gray-dark)"
          width={20}
          height={20}
          className="shrink-0"
        />
      ) : (
        <OIcon
          fillColor="var(--color-gray-dark)"
          width={20}
          height={20}
          className="shrink-0"
        />
      )}
      <span className="text-heading-xs text-gray-dark uppercase">Turn</span>
    </div>
  );
}
