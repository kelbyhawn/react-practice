import React from "react";

export default function UploadCatPic() {
  const [catPhoto, setCatPhoto] = React.useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch("https://api.thecatapi.com/v1/images/upload", {
      method: "POST",
      headers: {
        "x-api-key": "37bd18a4-fa02-4014-af5b-60aad0dce729",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        file: catPhoto,
        sub_id: "string",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    console.log(catPhoto);
  }

  return (
    <>
      <h3>Upload a photo to The Cat API</h3>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor='photo'>Select a file: </label>
        <input
          type='file'
          id='photo'
          name='photo'
          onChange={(e) => setCatPhoto(e.target.value)}
        />

        <button type='submit' disabled={!catPhoto}>
          Upload
        </button>
      </form>
    </>
  );
};

