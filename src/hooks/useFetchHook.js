import { useState, useEffect } from "react";

export const useFetchHook = (uri) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri) return; 
    setLoading(true);
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError); 
  }, [uri]);

  return { data, loading, error };
};
