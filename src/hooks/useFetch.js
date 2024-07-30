import { useEffect, useState } from "react";

export function useFetch(fetchFunction, initialValue) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFunction();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "failed to fetch data" });
      }
      setIsLoading(false);
    }
    fetchData();
  }, [fetchFunction]);

  return {
    isLoading,
    error,
    fetchedData,
    setFetchedData,
    setError,
    setIsLoading,
  };
}
