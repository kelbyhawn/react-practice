import { useState, useEffect } from "react";
import useFetch from "../useFetch";

export default function Rain() {
  const [rain, setRain] = useState("");
  const { put } = useFetch("https://kh-rain-default-rtdb.firebaseio.com/");

  useEffect(() => {
    if (rain) {
      console.log(rain);

      put("rain.json", { isItRaining: rain })
        .then(data => {
          console.log(data);
        })
        .catch(error => console.error(error))
    }
  }, [put, rain]);

  function handleOptionChange(e) {
    e.preventDefault();

    setRain(e.target.value);
  }
  
  return (
    <>
      <div className="wrapper rain">
        <form>
          <label>Is it currently raining where you are?</label>
          <select onChange={handleOptionChange}>
            <option value="">Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          {rain !== "" && (
            <p className="tiny">
              <strong>
                {rain === "true" ? "☂ It is" : "☀ It is not"} raining.
              </strong>{" "}
              <a
                className="tiny"
                href="https://kh-rain-default-rtdb.firebaseio.com/rain.json"
                target="_blank"
                rel="noreferrer"
              >
                View JSON
              </a>
            </p>
          )}
        </form>
      </div>
    </>
  );
}
