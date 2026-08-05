import { useState } from "react";

type UseFetchReturnType = {
  get: (url: string) => Promise<any>;
  post: (url: string, body: any) => Promise<any>;
  put: (url: string, body: any) => Promise<any>;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export default function useFetch(baseUrl: string): UseFetchReturnType {
  const [isLoading, setIsLoading] = useState(true);

  // GET method - retrieve data from an API
  function get(url: string) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setIsLoading(false);
            return reject(data);
          }
          setIsLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setIsLoading(false);
          reject(error);
        });
    });
  }

  // POST method - send new data to an API
  function post(url: string, body: any) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setIsLoading(false);
            return reject(data);
          }
          setIsLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setIsLoading(false);
          reject(error);
        });
    });
  }

  // PUT method - update existing data in an API
  function put(url: string, body: any) {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setIsLoading(false);
            return reject(data);
          }
          setIsLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setIsLoading(false);
          reject(error);
        });
    });
  }

  return { get, post, put, isLoading, setIsLoading };
}
