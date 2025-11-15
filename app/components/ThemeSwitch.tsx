"use client";

import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeSwitch() {
  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <div
      suppressHydrationWarning
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </div>
  );
}

export { ThemeSwitch };
