import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { IBeerData } from "@/app/lib/types";

export type APIStatus = "IDLE" | "LOADING" | "SUCCESS" | "FAILED";

// TODO: would use tanstack query in real world
const useBeersApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IBeerData[] | null>(null);
  const [status, setStatus] = useState<APIStatus>("IDLE");

  const [pageNumber, setPageNumber] = useState(1);
  const fetchData = useCallback(async (pageNumber: number) => {
    setIsLoading(true);
    setStatus("LOADING");
    try {
      const _data = await axios.get<IBeerData[]>(
        "https://api.punkapi.com/v2/beers",
        {
          params: {
            page: pageNumber,
            per_page: 10,
          },
        },
      );
      setData((_d) => [...(_d ?? []), ..._data.data]);
      setStatus("SUCCESS");
    } catch (err) {
      setStatus("FAILED");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(pageNumber);
  }, [fetchData, pageNumber]);

  const refetch = () => {
    fetchData(pageNumber);
  };
  const loadMore = () => {
    setPageNumber((_p) => _p + 1);
  };

  return { loadMore, data, isLoading, status, refetch };
};

export default useBeersApi;
