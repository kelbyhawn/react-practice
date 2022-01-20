import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Button from "./ui-kit/Button";

export default function ThemeButton() {
  // create a context variable using the useContext hook
  const context = useContext(ThemeContext);
  console.log(context);

  // use the state and method defined in the ThemeContext object
  return (
    <Button
      className="btn-theme"
      onClick={context.toggleTheme}
    >
      {context.theme === "dark" ? "Light" : "Dark"} Mode
    </Button>
  );
}

  



