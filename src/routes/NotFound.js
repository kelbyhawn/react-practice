import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section>
        <h1>404!</h1>
        <p><Link to="/">Go back to the home page</Link></p>
      </section>
      
    </>
  ); 
}