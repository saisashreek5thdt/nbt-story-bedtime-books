"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";

export default function RootLayoutClient({ children }) {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
    };

    checkOrientation(); // Check on initial render
    window.addEventListener("resize", checkOrientation);

    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  // React.useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/service-worker.js")
  //       .then((registration) => {
  //         console.log(
  //           "Service Worker registered with scope:",
  //           registration.scope
  //         );
  //       })
  //       .catch((error) => {
  //         console.error("Service Worker registration failed:", error);
  //       });
  //   }
  // }, []);

  return (
    <>
      {isLandscape ? (
        <div className="landscape:block">
          { children }
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-center text-rose-600">
            Please rotate your device to Landscape.
          </h1>
        </>
      )}
    </>
  );
}
