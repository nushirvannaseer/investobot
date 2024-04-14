"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [balances, setBalances] = useState([]);
  
  useEffect(() => {
    const fetchBalances = async () => {
      const response = await fetch("http://localhost:3000/api/user-assets", {
        cache: "no-store",
      });
      const { balances } = await response.json();
      setBalances(balances);
    }    
    fetchBalances();
  }, [])
  
  return (
    <div className="mx-auto w-full flex flex-col">
      {balances.map(({ asset, free, locked }:any) => {
        return (
						<span key={asset} className="text-white font-bold">
							{asset}
							{"\t"}{free}
							{"\t"}{locked}
					</span>
				);
      })}
    </div>
    
  );
}
