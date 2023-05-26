import { FC } from "react";

interface Props {
  text: string;
  icon: JSX.Element;
  //   onclick: () => void;
}

export const SidebarButton: FC<Props> = ({ text, icon }) => {
  return (
    <button
      className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
      //   onClick={onclick}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};
