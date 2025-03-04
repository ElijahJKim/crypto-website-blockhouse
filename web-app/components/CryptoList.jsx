"use client";

import React, { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { useFetchCoin } from "../utils/useFetchCoin";
import { SearchBar } from "./SearchBar";
import { IoMdRefreshCircle } from "react-icons/io";

export const CryptoList = () => {
  const { data: coins, isLoading, error, refetch } = useFetchCoin();
  const [search, setSearch] = useState("");

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (!coins || coins.length === 0) {
    return (
      <div>
        <p>No cryptocurrency data available. </p>
      </div>
    );
  }

  const filterCoin = coins.filter((coin, index) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleRefresh = () => {
    refetch();
  };

  return (
    <div className="cryptolist">
      <div className="cryptolist__container">
        <div className="cryptolist__container__top">
          <SearchBar setSearch={setSearch} />
          <IoMdRefreshCircle
            onClick={() => handleRefresh()}
            className="refresh-icon"
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filterCoin.map((coin, index) => {
              //convert to dollar
              const price = parseFloat(coin.priceUsd);
              const formattedPrice = price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              });

              return (
                <tr key={index}>
                  <td>{coin.rank}</td>
                  <td>{coin.name}</td>
                  <td>{formattedPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
