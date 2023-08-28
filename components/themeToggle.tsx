"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Switch } from "@headlessui/react";

const themeToggle = ({}) => {
  const [isToggle, setToggle] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  function handleClick() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setToggle(!isToggle);
  }
  return (
    <>
      <div className="flex items-center justify-between px-4 ">
        <p className="px-4 m-1 mb-3 text-lg font-bold lg:text-2xl">
          Dark Mode :
        </p>

        <div className="py-10 m-1">
          <Switch
            onClick={handleClick}
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-slate-400" : "bg-cyan-500"} 
          relative inline-flex h-[38px] w-[74px]  shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
            <span className="sr-only">Dark Mode</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white dark: shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default themeToggle;
