"use client";

import { useQuery } from "@tanstack/react-query";

const fetchCoinData = async () => {
  const response = await fetch("https://api.coincap.io/v2/assets?limit=5");
  const result = await response.json();
  return result.data;
};

export function useFetchCoin() {
  return useQuery({ queryKey: ["crypto"], queryFn: fetchCoinData });
}
