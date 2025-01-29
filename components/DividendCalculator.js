"use client";

import { useState } from 'react';

const DividendCalculator = () => {
  const [calculatorState, setCalculatorState] = useState({
    initialInvestment: 10000,
    dividendYield: 4,
    paymentFrequency: 'weekly',
    timeHorizon: 10,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCalculatorState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section className='flex flex-wrap gap-x-4 gap-y-4 max-w-6xl mx-auto p-4 mt-12'>
      <form className='flex flex-wrap gap-4 w-full'>
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="initialInvestment" className="block mb-2">
            Initial Investment ($)
          </label>
          <input
            type="number"
            id="initialInvestment"
            name="initialInvestment"
            value={calculatorState.initialInvestment}
            onChange={handleInputChange}
            min="0"
            className="border p-2 rounded text-black w-full"
          />
        </div>

       <div>
          <label htmlFor="Dividend Yield" className="block mb-2">
            Dividend Yield %
          </label>
          <input
            type="number"
            id="dividendYield"
            name="dividendYield"
            value={calculatorState.dividendYield}
            onChange={handleInputChange}
            min="0"
            max="100"
            className="border p-2 rounded text-black w-full"
          />
        </div>

        <div>
          <label htmlFor="Payment Frequency" className="block mb-2">
            Payment Frequency
          </label>
          <select
            
            id="paymentFrequency"
            name="paymentFrequency"
            value={calculatorState.paymentFrequency}
            onChange={handleInputChange}
            className="border p-2 rounded text-black w-full"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="semi-annually">Semi-Annually</option>
            <option value="annually">Annually</option>
            </select>
        </div>
        {console.log(calculatorState.paymentFrequency)}

        <div>
          <label htmlFor="Time Horizon" className="block mb-2">
            Time Horizon (Years)
          </label>
          <input
            type="number"
            id="timeHorizon"
            name="timeHorizon"
            value={calculatorState.timeHorizon}
            onChange={handleInputChange}
            min="5"
            max="50"
            className="border p-2 rounded text-black w-full"
          />
        </div>
      </form>
    </section>
  );
};

export default DividendCalculator;