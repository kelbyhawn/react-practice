import { createContext, useEffect, useState } from "react";

// Context is useful to pass down global data to multiple components throughout an app
// - common use cases for Context: dark/light themes, language, currency, user profile details (id, image, bio)

// create the Context for theme
const ThemeContext = createContext();

// create a Theme Provider
// - this wraps components and allows them to use the global data created in the Context
function ThemeProvider(props) {
  // set a theme state
  const [theme, setTheme] = useState("dark");

  // change the className on the body tag
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.toggle("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  // create a method that allows for changing the theme  
  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  // create an object that contains the "theme" state and "toggleTheme" method
  const value = {
    theme: theme,
    toggleTheme: toggleTheme
  }

  // return the Context Provider 
  // - return the value object above with the value attribute
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// export the ThemeContext and ThemeProvider for use throughout the App
export { ThemeContext, ThemeProvider }; 