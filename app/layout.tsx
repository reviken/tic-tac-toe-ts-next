import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import favicon from "@/assets/favicon-32x32.png";
import { GameContextProvider } from "@/store/GameContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tic-Tac-Toe",
  description: "Frontend Mentor exercise",
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable}} antialiased w-screen h-screen grid items-center justify-center bg-green-dark`}
      >
        <GameContextProvider>{children}</GameContextProvider>
      </body>
    </html>
  );
}
