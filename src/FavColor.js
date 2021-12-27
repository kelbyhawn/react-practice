import React from "react";
import useFetch from "./useFetch";

export default function Color() {
  const [color, setColor] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const { post, isLoading } = useFetch("https://kh-colors-default-rtdb.firebaseio.com/");

  function handleFormSubmit(e) {
    e.preventDefault();

    post("colors.json", { favColor: color })
      .then((data) => {
        console.log(data);
      })
      .catch(error => console.error(error))
      .finally(() => setSuccess(true));
  }
  
  function handleInputChange(e) {
    e.preventDefault();

    setColor(e.target.value);
    setSuccess(false);
  }

  // return color form
  return (
    <>
      <div className="wrapper favColor">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="color">What's your favorite color?</label>
          {/* use color state to get input value */}
          <input
            type="text"
            id="color"
            name="color"
            value={color}
            onChange={handleInputChange}
          />
          <button type="submit" disabled={!color}>
            {isLoading ? 'Loading...' : 'Add color to database'}
          </button>
        </form>

        {/* show Success message after submitting a color */}
        {success && (
          <p className="tiny">
            <strong>Success! </strong> 
            <a
              className="tiny"
              href="https://kh-colors-default-rtdb.firebaseio.com/colors.json"
              target="_blank"
              rel="noreferrer"
            >
              View JSON
            </a>
          </p>
        )}
      </div>
    </>
  );
}
