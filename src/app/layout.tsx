import "./globals.css";

import Providers from "@components/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={
          "w-full transition-colors duration-200 bg-slate-50 bg-opacity-5 dark:bg-slate-950 text-slate-950 dark:text-slate-100"
        }>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
