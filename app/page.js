import DividendCalculator from "@/components/DividendCalculator"; // ✅ NO {}

console.log(DividendCalculator); 

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Calculate How Much You Can Make By Reinvesting Your Dividends</h1>
      <div>See how long it will take you to acheive financial freedom
        <DividendCalculator /> 
      </div>
    </main>
  );
}
