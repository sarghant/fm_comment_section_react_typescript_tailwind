import { useState, useEffect } from "react";
import { Data } from "../App";

export function useFetchedData() {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error(
            "There's been a problem loading the comments. Please, try again."
          );
        }
        const json = await response.json();
        if (!ignore) {
          setData(json);
          setError("");
        }
      } catch (e) {
        if (!ignore) {
          let message;
          if (e instanceof Error) message = e.message;
          setData(null);
          setError(message);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);
  return [data, error, isLoading];
}
