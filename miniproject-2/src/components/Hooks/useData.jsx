import { useState, useEffect } from "react";
import axios from "axios";

export function useData(url) {
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => res.data);
  };

  useEffect(() => {
    fetchInfo()
      .then((data) => {
        console.log('data',data); // Log the data to check if it's as expected
        setData(data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return data;
}
