// components/DividendCalculator.js
'use client';
import { useState, useEffect } from 'react';
import DividendDetails from './DividendDetails';
import InitialInvestment from './InitialInvestment';
import InvestmentParameters from './InvestmentParameters';
import ResultsDisplay from './ResultsDisplay';



function DividendCalculator() {
  const [calculatorState, setCalculatorState] = useState({

    // default values 

    initialInvestment: 10000,
    recurringAmount: 100,
    recurringFrequency: 'monthly',

    dividendYield: 4,
    paymentFrequency: 'quarterly',
    dividendGrowth: 5,

    timeHorizon: 10,
    capitalAppreciation: 7,
    reinvestDividends: true,

  });

  // initial count

  const [ results, setResults] = useState({
    totalValue: 0,
    totalDividends: 0,
    annualIncome:0

  })

  const calculateResults = () => {
    const dividendYieldDecimal = calculatorState.dividendYield / 100;
    const paymentMultipliers = {
      'weekly': 52,
      'monthly': 12,
      'quarterly': 4,
      'semi-annually': 2,
      'annually': 1
    };
  
    const frequencyMultiplier = paymentMultipliers[calculatorState.paymentFrequency];
    const recurringMultiplier = paymentMultipliers[calculatorState.recurringFrequency];
  
    let currentValue = calculatorState.initialInvestment;
    let totalDividendsPaid = 0;
  
    for (let period = 0; period < calculatorState.timeHorizon * frequencyMultiplier; period++) {
      // Add recurring investment based on frequency
      if (period % (frequencyMultiplier / recurringMultiplier) === 0) {
        currentValue += calculatorState.recurringAmount;
      }
      
      // Calculate dividend
      const periodDividend = (currentValue * dividendYieldDecimal) / frequencyMultiplier;
      totalDividendsPaid += periodDividend;
      
      // Add dividend if reinvesting
      if (calculatorState.reinvestDividends) {
        currentValue += periodDividend;
      }
    }
  
    setResults({
      totalValue: currentValue, 
      totalDividends: totalDividendsPaid,
      annualIncome: (currentValue * dividendYieldDecimal)
    });
  };


  
  // const calculateResults = () => {
  //   const dividendYieldDecimal = calculatorState.dividendYield / 100;
  //   const dividendGrowthDecimal = calculatorState.dividendGrowth / 100;
  //   const capitalAppreciationDecimal = calculatorState.capitalAppreciation / 100;

  //   // converts time to numbers 

  //   const paymentMultipliers = {
  //     'weekly': 52,
  //     'monthly': 12,
  //     'quarterly': 4,
  //     'semi-annually': 2,
  //     'annually': 1
  //   };

  //   // calculates dividend payments
  //   const frequencyMultiplier = paymentMultipliers[calculatorState.paymentFrequency]
  //   const DividendPayment = (calculatorState.initialInvestment * dividendYieldDecimal) / frequencyMultiplier

  //   // calcualtes recurring payments

  //   const recurringMultiplier = paymentMultipliers[calculatorState.recurringFrequency]
  //   const recurringPayment = calculatorState.recurringAmount * recurringMultiplier

  //   //  compounding calculations

  //   let currentValue = calculatorState.initialInvestment;
  //   let totalDividendsPaid = 0;

  //   // for (let period = 0; period < calculatorState.timeHorizon * frequencyMultiplier; period++) {
  //   //   // Add recurring investment if frequencies match
  //   //   if (period % (frequencyMultiplier / recurringFrequency) === 0) {
  //   //     currentValue += calculatorState.recurringAmount;
  //   //   }
  
  //   //   // Calculate and reinvest dividend
  //   //   const periodDividend = (currentValue * dividendYieldDecimal) / frequencyMultiplier;
  //   //   totalDividendsPaid += periodDividend;
  //   //   currentValue += periodDividend;
  //   // }

  //   console.log('Selected frequencies:', {
  //     paymentFrequency: calculatorState.paymentFrequency,
  //     recurringFrequency: calculatorState.recurringFrequency,
  //     paymentMultiplier: frequencyMultiplier,
  //     recurringMultiplier: recurringFrequency
  //   });
  

  //   // console.log('Starting calculation with:', {
  //   //   initialValue: currentValue,
  //   //   recurringAmount: calculatorState.recurringAmount,
  //   //   dividendFreq: frequencyMultiplier,
  //   //   recurringFreq: recurringFrequency
  //   // });

  //   for (let period = 0; period < calculatorState.timeHorizon * frequencyMultiplier; period++) {
  //     // Add recurring investment
  //     currentValue += calculatorState.recurringAmount;
      
  //     // Calculate dividend
  //     const periodDividend = (currentValue * dividendYieldDecimal) / frequencyMultiplier;
  //     totalDividendsPaid += periodDividend;
  //     currentValue += periodDividend;
  //   }

  //   console.log('Final values:', {
  //     totalValue: currentValue,
  //     totalDividends: totalDividendsPaid
  //   });



  //   //  calculates results

  //   setResults({
  //     totalValue: currentValue, 
  //     totalDividends: totalDividendsPaid,
  //     annualIncome: (currentValue * dividendYieldDecimal)
  //   })

    

  // }

  useEffect(() => {
    calculateResults();
  }, [calculatorState]);

  


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

      <div className='bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-300'>
      <ResultsDisplay values={results} />
      </div>

      
      
    </section>
    
  );
}

export default DividendCalculator;