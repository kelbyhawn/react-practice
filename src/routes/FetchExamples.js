import { useEffect } from "react";
import Rain from "./Rain";

export default function FetchExamples() {
  // Set document title based on component
  useEffect(() => {
    document.title = "Fetch Example";
  });

  return (
    <>
      <h1>Fetch Example</h1>
      <Rain />
    </>
  );
}
