import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import useFetch from './useFetch';

export default function CatPics() {
  const [cat, setCat] = useState();
  const [refresh, setRefresh] = useState();
  const { get, isLoading } = useFetch("https://api.thecatapi.com/v1/");

  useEffect(() => {
    get("images/search").then(data => {
      if (data) {
        setCat(data[0]);
      }
    }).catch(error => console.error(error));
  }, [refresh]);

  if (isLoading) {
    return <Loader />
  }

  if (!cat) {
    return null;
  }

  return (
    <>
      <div className="wrapper cat">
        <img src={cat.url} alt='A random cat' />

        {cat.breeds[0] && (
          <p className='tiny'>
            <strong>Cat breed:</strong> {cat.breeds[0].name}
          </p>
        )}

        <button onClick={() => setRefresh([])} disabled={isLoading}>
          Purrress for a new cat
        </button>

        <p className='tiny'>
          Photos from{" "}
          <a href='https://thecatapi.com/' target='_blank' rel='noreferrer'>
            The Cat API
          </a>
        </p>
      </div>
    </>
  );

}