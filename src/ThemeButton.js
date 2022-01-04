import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { capitalize } from "./helpers";

export default function ThemeButton() {
  // create a context variable using the useContext hook
  const context = useContext(ThemeContext);
  console.log(context);

  // use the state and method defined in the ThemeContext object
  return (
    <button className="btn-theme" onClick={context.toggleTheme}>
      {capitalize(context.theme)} Mode
    </button>
  );
}

  



