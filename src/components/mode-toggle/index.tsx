import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_KEY = "theme";

export default function ModeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // init logic
  useEffect(() => {
    const foundTheme = localStorage.getItem(THEME_KEY);
    if (foundTheme) {
      setTheme(foundTheme as Theme);
    }
  }, []);

  // change logic
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 text-yellow-500 dark:text-purple-300 dark:bg-gray-700 hover:opacity-50 transition-all hover:cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}
