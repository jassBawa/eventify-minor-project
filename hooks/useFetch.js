import { useCallback, useEffect, useMemo, useState } from "react";

/**
 * Custom hook to fetch data from an API endpoint.
 *
 * @param {string} endPoint - The API endpoint endPoint.
 * @param {object} options - Additional options for the fetch request.
 * @returns {object} - Object containing the fetched data, error, and loading state.
 */

const BASE_URL = "https://jsonplaceholder.typicode.com";

const useFetch = (endPoint, options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchEndPoint = useMemo(() => `${BASE_URL}/${endPoint}`, [endPoint]);

  /**
   * Function to fetch data from the API.
   */
  const fetchData = useCallback(() => {
    setIsLoading(true);

    const localToken = localStorage.getItem("token");

    const headers = {
      "Content-Type": "application/json",
    };

    if (localToken) {
      headers.Authorization = `Bearer ${localToken}`;
    }

    fetch(fetchEndPoint, {
      body: JSON.stringify(options?.body),
      method: options?.method || "GET",
      headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.message);
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fetchEndPoint, options]);

  useEffect(() => {
    // Do nothing if the endPoint is not given
    if (!endPoint) return;

    // Fetch data from the API
    fetchData();
  }, [fetchData, endPoint]);

  // Memoize the data to prevent unnecessary re-renders
  return { data: useMemo(() => data, [data]), error, isLoading };
};

export default useFetch;