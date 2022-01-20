import {useState} from "react";
import useFetch from "../useFetch";
import Button from "../ui-kit/Button";
import Input from "../ui-kit/Input";

export default function Color() {
  const [color, setColor] = useState("");
  const [success, setSuccess] = useState(false);
  const { post } = useFetch("https://kh-colors-default-rtdb.firebaseio.com/");

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
          <Input 
            label={"What's your favorite color?"}
            value={color}
            onChange={handleInputChange}
            autoFocus
          />
          <Button
            type="submit"
            disabled={!color}
            children={'Add color to database'} 
          />
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
