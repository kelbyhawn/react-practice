import { useEffect } from "react";
import FavColor from "./FavColor";
import Rain from "./Rain";

export default function FetchExamples() {
  
  // Set document title based on component
  useEffect(() => {
    document.title = "Fetch Examples";
  })

  return (
    <>
      <h1>Fetch Examples</h1>
      <FavColor />
      <hr />
      <Rain />
    </>
  )
}