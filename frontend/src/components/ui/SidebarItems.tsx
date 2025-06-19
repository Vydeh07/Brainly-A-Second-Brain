import { ReactElement } from "react";

interface SidebarItemType {
  startIcon: ReactElement;
  text: string;
  onClickFn?: () => void;
}

const SidebarItems = ({ startIcon, text, onClickFn }: SidebarItemType) => {
  return (
    <div
      onClick={onClickFn}
      className="group flex items-center gap-4 px-4 py-2 my-2 rounded-xl bg-white  shadow-sm hover:shadow-md hover:bg-black text-white transition-all duration-300 cursor-pointer"
    >
      <div className="w-10 h-10 flex justify-center items-center rounded-lg bg-gray-100 group-hover:bg-white transition-all duration-300">
        {startIcon}
      </div>
      <span className="text-base font-medium text-gray-700 group-hover:text-white transition-all duration-300">
        {text}
      </span>
    </div>
  );
};

export default SidebarItems;
