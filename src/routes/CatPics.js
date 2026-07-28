import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import Button from "../ui-kit/Button";

export default function CatPics() {
  const [cat, setCat] = useState();
  const [refresh, setRefresh] = useState();
  const { get, isLoading } = useFetch("https://api.thecatapi.com/v1/");

  useEffect(() => {
    // Set document title based on component
    document.title = "Cats";

    get("images/search")
      .then((data) => {
        if (data) {
          setCat(data[0]);
        }
      })
      .catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  if (isLoading) {
    return <Loader />;
  }

  if (!cat) {
    return null;
  }

  return (
    <>
      <h1>Cats!</h1>
      <div className="wrapper cat">
        <figure>
          <Image
            src={cat.url}
            alt="A random cat"
            width={400}
            height={500}
            loading="lazy"
          />
        </figure>

        {cat.breeds && (
          <p className="tiny">
            <strong>Cat breed:</strong> {cat.breeds.name}
          </p>
        )}

        <Button onClick={() => setRefresh([])} disabled={isLoading}>
          Purrress for a new cat
        </Button>

        <p className="tiny">
          Photos from{" "}
          <a href="https://thecatapi.com/" target="_blank" rel="noreferrer">
            The Cat API
          </a>
        </p>
      </div>
    </>
  );
}
