import DividendCalculator from "@/components/DividendCalculator"; // ✅ NO {}

console.log(DividendCalculator); 

import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center bg-white text-black p-8">
      <h1 className="font-bold text-2xl">Calculate How Much You Can Make By Reinvesting Your Dividends</h1>
      <div>
        <h2 className="font-bold p-4">See how long it will take you to acheive financial freedom</h2>
        <DividendCalculator /> 
        
      </div>
    </main>
  );
}
