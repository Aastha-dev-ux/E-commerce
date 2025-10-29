import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const callApi = async () => {
    try {
      const res = await fetch(url);
      const response = await res.json();
      setData(response);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => { callApi(); }, [url]);
  return [data];
};
