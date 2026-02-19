import type { Metadata } from "next";
import {ReactNode} from "react";
import "./globals.css";



export const metadata: Metadata = {
  title: "Movie Tracker",
  description: "An app where you can search for movies, add them to a personal watchlist, mark the ones you've seen, and leave ratings/reviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
