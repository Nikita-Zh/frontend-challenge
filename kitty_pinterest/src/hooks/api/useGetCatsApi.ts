import { useState } from "react";

const baseUrl = "https://api.thecatapi.com/v1/images/search";

export type CatResponseItem = {
  id: string;
  url: string;
  breeds: Array<{ alt_names: string }>;
};

export const useGetCatsApi = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = async ({
    limit = 15,
  }: {
    limit?: number;
  }): Promise<CatResponseItem[]> => {
    setIsLoading(true);
    setIsError(false);

    return fetch(`${baseUrl}?limit=${limit}`, {
      method: "GET",
      headers: { "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY || "" },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject))
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        return [];
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { isLoading, isError, fetchData };
};
