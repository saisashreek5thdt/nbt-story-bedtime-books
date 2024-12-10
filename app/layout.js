import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";

export const metadata = {
  title: "NBT - Chandrayan 3",
  description: "National Book Trust India, Chandrayan 3 book by Yuvraj Malik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="select-none">
        <RootLayoutClient>
          {children}
          <SpeedInsights />
        </RootLayoutClient>
      </body>
    </html>
  );
}
