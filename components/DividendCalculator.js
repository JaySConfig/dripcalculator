// components/DividendCalculator.js
'use client';
import { useState } from 'react';
import DividendDetails from './DividendDetails';
import InitialInvestment from './InitialInvestment';
import InvestmentParameters from './InvestmentParameters';

function DividendCalculator() {
  const [calculatorState, setCalculatorState] = useState({
    initialInvestment: 10000,
    recurringAmount: 0,
    recurringFrequency: 'monthly',

    dividendYield: 4,
    paymentFrequency: 'quarterly',
    dividendGrowth: 5,

    timeHorizon: 10,
    capitalAppreciation: 7,
    reinvestDividends: true

  });

  const handleChange = (updates) => {
    setCalculatorState(prev => ({
      ...prev,
      ...updates
    }));
  };

  return (
    <section className='max-w-6xl mx-auto p-4 mt-12 bg-base-100 text-black'>
      <div className='bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-300'>
      <InitialInvestment 
      
      values={calculatorState}
      onChange={handleChange}
    />
      </div>
      
      <div className='bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-300'>
      <DividendDetails
      values={calculatorState}
      onChange={handleChange}
      />
      </div>
      <div className='bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-300'>
      <InvestmentParameters
      values={calculatorState}
      onChange={handleChange}
      />
    
      </div>
      
    </section>
    
  );
}

export default DividendCalculator;