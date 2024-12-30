"use client";
import { useEffect, useState } from "react";

export default function useLandscape() {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
    };

    checkOrientation(); // Check on initial render
    window.addEventListener("resize", checkOrientation);

    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  return isLandscape;
}
