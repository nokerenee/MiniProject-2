// can use this hook to fetch data and access the resulting data, loading state, and potential error messages

import { useState, useEffect } from "react";     // React hook used for handling side effects in functional components
import axios from "axios";                       // library for making HTTP requests

export function useData(url) {                   // useData hook takes a URL as a parameter
  // defines three state variables:
  const [data, setData] = useState([]);            // array to store the fetched data
  const [loading, setLoading] = useState(true);    // boolean flag to indicate whether data is currently being loaded
  const [error, setError] = useState(null);        // variable to store any error that might occur, or null if there are none

  const fetchInfo = () => { // function makes an HTTP GET request to provided URL using Axios and returning response data
    return axios.get(url).then((response) => response.data);
  };

  // useEffect Hook for Data Fetching
  useEffect(() => { 
    if (url) {                    // checks if a url is provided to avoid unnecessary requests
      let ignore = false;

      
      fetchInfo(url)             // Inside the fetchInfo promise
        .then((result) => {      // If the request is successful... 
          if (!ignore) {
            setData(result);     // updates data state with the fetched data 
            setLoading(false);   // sets loading to false (data loading is complete)
          }
        })

        .catch((error) => {      // If an error occurs during the request...
          console.error("Error fetching user data:", error);         // logs the error to the console,
          setError("Failed to load data. Please try again later.");  // sets the error state to display error message,
          setLoading(false);                                         // sets loading to false (data loading failure)
        });

      // cleanup function to cancel request, in case url changes before complete
      return () => {
        ignore = true;
      };
    }
  }, [url]);      // re-run effect if url changes

  return { data, loading, error };   // state variables fetched from the given url
}
