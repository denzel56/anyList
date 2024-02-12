import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IPage } from "../types/IPage";

export const useFetch = (url: string, params: any = {}) => {
  const [data, setData] = useState<IPage | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const controller = new AbortController();

  async function getFetch(url: string, params: any) {
    try {
      const items = await axios({
        method: "get",
        url,
        headers: {
          "Content-Type": "application/json",
        },
        params,
      }).then((res) => {
        if (res.headers["content-type"].includes("application/json")) {
          return res.data;
        }

        throw Error("This is html page");
      });

      setData(items);
    } catch (e) {
      const err = e as AxiosError;
      setData(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getFetch(url, params);
    return () => {
      controller.abort();
    };
  }, []);

  function refetch(params: any = {}) {
    getFetch(url, params);
  }

  return {
    data,
    error,
    loading,
    refetch,
  };
};
