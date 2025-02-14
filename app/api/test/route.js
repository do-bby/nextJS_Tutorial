// app/api/test/route.js

import { NextApiRequest, NextApiResponse } from "next";
import { NextFetchEvent, NextResponse } from "next/server";
import { getCoinData,CoinData } from '../coin/coin';

export async function GET() {
    try{
      const response = await fetch('https://api.upbit.com/v1/ticker?markets=KRW-BTC');
      if(!response) throw new Error('Failed to fetch coin data');
      
      const data = await response.json();
      return NextResponse.json({ success:true, data});
    } catch(error){
      console.error('error');
      return NextResponse.json({success:false, error:error.message}),{status:500}
    }
  }
  