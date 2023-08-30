import "./globals.css";
/* import { Montserrat } from "next/font/google"; */
import Providers from "@components/Providers";
/* const montserrat = Montserrat({ subsets: ["latin"] }); */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={
          "w-full bg-slate-50 bg-opacity-5 dark:bg-slate-950 text-slate-950 dark:text-slate-100"
        }>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
