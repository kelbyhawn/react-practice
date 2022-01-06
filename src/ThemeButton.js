import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeButton() {
  // create a context variable using the useContext hook
  const context = useContext(ThemeContext);
  console.log(context);

  // use the state and method defined in the ThemeContext object
  return (
    <button className="btn-theme" onClick={context.toggleTheme}>
      {context.theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}

  



