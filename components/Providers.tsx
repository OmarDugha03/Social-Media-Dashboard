"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" storageKey="theme" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
