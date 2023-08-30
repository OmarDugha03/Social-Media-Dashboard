import { FC } from "react";
import { ThemeToggle } from "./index";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className=" lg:flex lg:justify-between lg:bg-slate-200 lg:dark:bg-slate-800">
      <header className="items-center justify-between pt-12 pb-4 rounded-md rounded-t-none lg:pb-56 bg-slate-200 lg:px-24 px-7 dark:bg-slate-800 lg:flex">
        <div>
          <h1 className="pb-2 text-xl font-bold">Social Media Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Total Followers: 23,004
          </p>
        </div>
      </header>
      <div className="mx-auto border-b-[0.01px] flex justify-center items-center w-[90%] border-gray-400 dark:border-gray-300 lg:hidden" />
      <ThemeToggle />
    </div>
  );
};

export default Header;
