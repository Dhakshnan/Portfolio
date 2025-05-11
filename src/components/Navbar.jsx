import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <>
      {/* Desktop Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={cn(
          "fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
          "max-sm:hidden"
        )}
        aria-label="Toggle Theme"
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>

      {/* Mobile Theme Toggle */}
      <div className="sm:hidden w-full flex justify-end px-6">
      <button
        onClick={toggleTheme}
        className="sm:hidden text-foreground hover:text-primary transition-colors mt-4"
        aria-label="Toggle Theme"
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      </div>
    </>
  );
};
