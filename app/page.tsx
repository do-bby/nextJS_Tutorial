"use client";

import Image from "next/image";
import { Typography,Button } from '@mui/material';
import { CoinData } from "./api/coin/types";
import { useEffect, useState } from "react";


export default function CoinPrice() {
  const [coinData, setCoinData] = useState<CoinData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/test');
      if(!res.ok) throw new Error('Failed to fetch');
      const result = await res.json();
      console.log(result);
      if(result.data && result.data.length > 0){
        const newPrice = result.data[0].trade_price;

        if(!coinData || coinData.trade_price !== newPrice){
          setCoinData(result.data[0]);
        }
      }      
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>비트코인 가격</h2>
      {coinData ? (
        <p>{coinData.trade_price.toLocaleString()} 원</p>
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
}

