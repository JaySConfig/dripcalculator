import DividendCalculator from "@/components/DividendCalculator"; // ✅ NO {
import Footer from "@/components/Footer";

console.log(DividendCalculator); 

import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center bg-white text-black p-8">
      <h1 className="font-bold text-3xl mb-6 mt-6">💰 Dividend Reinvestment Calculator – See How Your Wealth Grows</h1>
      <div>
        <h2 className="font-bold text-xl p-4">Calculate how much your investments can grow by reinvesting dividends and compounding returns.</h2>
        <DividendCalculator /> 
        <Footer />
        
      </div>
    </main>
  );
}
