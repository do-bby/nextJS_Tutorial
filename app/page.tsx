"use client";

import Image from "next/image";
import { Typography,Button } from '@mui/material';


export default function Home() {
  const fetchData = async () => {
    try {
      const res = await fetch('/api/test2');
      if (!res.ok) throw new Error('Failed to fetch');
      
      const data = await res.json();
      alert(JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Typography variant='body2'>
          Coin Chart                      
        </Typography>
        <Button onClick={fetchData}>
          Button                 
        </Button>
      </main>
    </div>
  );
}

