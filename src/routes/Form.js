import React, {useEffect} from "react";
import Button from "../ui-kit/Button";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, formState: {errors}, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  }

  useEffect(() => {
    // Set document title based on component
    document.title = "Basic Form";
  })
  
  return (
    <>
      <h1>Basic Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
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
          Gender*
          <select {...register("gender", {required: true})}>
            <option value="">Select One</option>
            <option value="woman">Woman</option>
            <option value="man">Man</option>
            <option value="nonBinary">Non-binary</option>
            <option value="decline">Prefer not to say</option>
          </select>
        </label>
        {errors.gender?.type === 'required' && <p className="tiny required">Gender is required</p>}

        <Button children={"Submit Form"} />
      </form>

      <p className="tiny">
        Form created using{" "}
        <a href="https://react-hook-form.com/" target="_blank" rel="noreferrer">
          React Hook Form
        </a>
      </p>
    </>
  )
}