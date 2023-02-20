import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [headings, setHeadings] = useState("");

  const themeChange = () => {
    if (theme === "light") {
      setTheme("dark");
      setHeadings("");
    } else {
      setTheme("light");
      setHeadings("darkHeading");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, headings, themeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
