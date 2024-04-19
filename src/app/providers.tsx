"use client";

import { useState, useEffect } from "react";
import { NextUIProvider, Button } from "@nextui-org/react";
import "tailwindcss/tailwind.css";

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <NextUIProvider>
      <div className="mt-2 mx-2">
        <Button
          onClick={toggleTheme}
          color="secondary"
          variant="flat"
          className="mr-2"
        >
          {theme === "light" ? "Dark" : "Light"}
        </Button>
      </div>
      {children}
    </NextUIProvider>
  );
}
