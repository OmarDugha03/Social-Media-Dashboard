"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

const themeToggle = ({}) => {
  const { theme, setTheme } = useTheme();
  const [isToggle, setToggle] = useState(theme === "dark");

  function handleChange() {
    setTheme(theme === "dark" ? "light" : "dark");
    setToggle(!isToggle);
  }

  useEffect(() => {
    const data = window.localStorage.getItem("theme");

    data === "dark" && setToggle(!isToggle);
  }, []);
  useEffect(() => {
    const data = window.localStorage.getItem("theme");

    data === "light" && setToggle(!isToggle);
  }, []);

  /*   useEffect(() => {
    const data = window.localStorage.getItem("theme");
  }, [isToggle]); */

  return (
    <>
      <div className="flex items-center justify-between px-4 lg:pb-36">
        <Switch.Group>
          <Switch.Label className="px-4 m-1 mb-3 text-lg font-bold lg:text-2xl">
            Dark Mode :
          </Switch.Label>

          <div onClick={handleChange} className="px-2 py-10 m-1 mx-2">
            <Switch
              checked={isToggle}
              onChange={handleChange}
              className={`${isToggle ? "bg-slate-400" : "bg-cyan-500"} 
            relative inline-flex lg:h-[32px] lg:w-[57px] pr-4 h-[17px] :w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
              <span className="sr-only">Dark Mode</span>
              <span
                aria-hidden="true"
                className={`${
                  isToggle ? "lg:translate-x-6 translate-x-4" : "translate-x-0"
                }
              pointer-events-none inline-block lg:h-[28px] lg:w-[28px]  h-[12px] w-[12px] transform rounded-full bg-white dark: shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>
        </Switch.Group>
      </div>
    </>
  );
};

export default themeToggle;
/* v   */
