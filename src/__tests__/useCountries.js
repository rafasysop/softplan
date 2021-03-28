import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { countries } from './../config/client-graphql';

export default function useCountries(queryOptions = {}) {
  const { loading, error, data } = useQuery(countries, queryOptions);
  const countriesResult = useMemo(() => {
    if (data) {
      return data
    }
  }, [data]);
  return { loading, error, countriesResult };
}