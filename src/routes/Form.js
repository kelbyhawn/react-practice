import React, {useEffect, useState} from "react";
import Button from "../ui-kit/Button";
import { useForm } from "react-hook-form";

export default function Form() {
  const [btnCopy, setBtnCopy] = useState("Submit Form");
  const { register, formState: {errors}, handleSubmit } = useForm();

  useEffect(() => {
    // Set document title based on component
    document.title = "Basic Form";
  })

  function onSubmit(data, e) {
    console.log(data);
    e.target.reset();
    // change button copy on submit
    setBtnCopy("Success!");
    // set button copy back
    setTimeout(() => {
      setBtnCopy("Submit Form");
    }, 1500)
  }
  
  return (
    <>
      <h1 style={{marginBottom: "0"}}>Basic Form</h1>
      <p className="tiny">
        Form created using{" "}
        <a href="https://react-hook-form.com/" target="_blank" rel="noreferrer">
          React Hook Form
        </a>
      </p>

      <form onSubmit={handleSubmit(onSubmit)} style={{marginTop: "2em"}}>
        <label>First Name*
          <input {...register("firstName", {required: true, minLength: 2})} />
        </label>
        {errors.firstName?.type === 'required' && <p className="tiny required">First name is required</p>}

        <label>Last Name*
          <input {...register("lastName", {required: true, minLength: 2})} />
        </label>
        {errors.lastName?.type === 'required' && <p className="tiny required">Last name is required</p>}

        <label>ZIP Code*
          <input {...register("zipCode", {required: true, minLength: 5})} />
        </label>
        {errors.zipCode?.type === 'required' && <p className="tiny required">ZIP Code is required</p>}

        <label>
          Choose an animal:
          <select {...register("animal")}>
            <option value="">Select One</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="rabbit">Rabbit</option>
            <option value="koala">Koala</option>
            <option value="flamingo">Flamingo</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Tell a short story:
          <textarea {...register("story")}></textarea>
        </label>

        <Button children={btnCopy} />
      </form>
      <p className="tiny">Check the console to see inputted data.</p>
    </>
  )
}