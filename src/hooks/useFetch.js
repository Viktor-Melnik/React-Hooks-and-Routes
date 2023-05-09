import { useEffect, useState } from "react";

export function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setData(data);
    };
    fetchData().catch((error) => {
      setLoading(false);
      setError(error);
    });
  }, [url]);

  return { data, error, loading };
}