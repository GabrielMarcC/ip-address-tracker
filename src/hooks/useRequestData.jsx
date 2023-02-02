import { useEffect } from "react";
import axios from "axios";
import { useData } from "../context/Context";

export function useRequestData(url) {
  const data = useData((state) => state.data);
  const setData = useData((state) => state.setData);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return [data];
}
