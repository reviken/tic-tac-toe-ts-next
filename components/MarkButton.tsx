import { Button } from "@headlessui/react";
import XIcon from "./ui/XIcon";
import OIcon from "./ui/OIcon";
import { Mark } from "@/lib/game";

type MarkButtonClickCallback = () => void;

type MarkButtonProps = {
  mark: Mark;
  selected: boolean;
  onClick: MarkButtonClickCallback;
};

export default function MarkButton({
  mark,
  selected,
  onClick,
}: MarkButtonProps) {
  const defaultButtonStyle = "bg-green-dark hover:bg-green-light";
  const selectedButtonStyle = "bg-gray-dark";
  const buttonStyle = selected ? selectedButtonStyle : defaultButtonStyle;
  const defaultIconColor = "var(--color-gray-dark)";
  const selectedIconColor = "var(--color-green-dark)";
  const iconColor = selected ? selectedIconColor : defaultIconColor;

  return (
    <Button
      className={`flex-1 flex items-center justify-center cursor-pointer p-100 rounded-[8px] ${buttonStyle}`}
      onClick={onClick}
    >
      {mark === "x" ? (
        <XIcon fillColor={iconColor} />
      ) : (
        <OIcon fillColor={iconColor} />
      )}
    </Button>
  );
}
