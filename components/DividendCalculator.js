// components/DividendCalculator.js
'use client';
import { useState, useEffect } from 'react';
import DividendDetails from './DividendDetails';
import InitialInvestment from './InitialInvestment';
import InvestmentParameters from './InvestmentParameters';
import ResultsDisplay from './ResultsDisplay';
import GraphContainer from './GraphContainer';
import HowToGuide from './HowToGuide';
import FAQ from './FAQ';


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
    annualIncome:0,
    yearlyData: []

  })

  const calculateResults = () => {


    const dividendYieldDecimal = calculatorState.dividendYield / 100;

    const dividendGrowthDecimal = calculatorState.dividendGrowth / 100

    const capitalGrowthDecimal = calculatorState.capitalAppreciation / 100 

    const paymentMultipliers = {
      'weekly': 52,
      'monthly': 12,
      'quarterly': 4,
      'semi-annually': 2,
      'annually': 1
    };

    // dividend requency

    const frequencyMultiplier = paymentMultipliers[calculatorState.paymentFrequency];

    // recurring frequency 

    const recurringMultiplier = paymentMultipliers[calculatorState.recurringFrequency];

    // yearly dividend paymetn

    const yearlyDividendPayment = calculatorState.initialInvestment * dividendYieldDecimal

    let nonReinvestedValue = calculatorState.initialInvestment;


    //  recurring investments 
    let currentValue = calculatorState.initialInvestment;
    let totalDividends = 0;
    let capitalGrowth = 0;

    let yearlyData = []; 
    
    // console.log("Starting with initial investment:", currentValue);
    // console.log("Yearly dividend payment:", yearlyDividendPayment);
    // console.log("Frequency multiplier:", frequencyMultiplier);


    // loops through each year of the time horizon



    // new loop // 


  // Inside your loop
  for (let year = 0; year < calculatorState.timeHorizon; year++) {
    // Calculate dividends for both scenarios
    let currentYearDividend = currentValue * dividendYieldDecimal;
    let nonReinvestedYearDividend = nonReinvestedValue * dividendYieldDecimal;

    // Process dividend payments
    for (let dividendPayment = 0; dividendPayment < frequencyMultiplier; dividendPayment++) {
        let dividendContribution = currentYearDividend / frequencyMultiplier;
        let nonReinvestedDividendPayment = nonReinvestedYearDividend / frequencyMultiplier;
        
        // Only add dividends back to currentValue if reinvesting
        if(calculatorState.reinvestDividends === true) {
            currentValue += dividendContribution;
        }
        // nonReinvestedValue never gets dividends added back
        
        totalDividends += dividendContribution;
    }

    // Add recurring contributions to both scenarios
    for (let contribution = 0; contribution < recurringMultiplier; contribution++) {
        currentValue += calculatorState.recurringAmount;
        nonReinvestedValue += calculatorState.recurringAmount;
    }

    // Apply capital appreciation to both scenarios
    currentValue = currentValue * (1 + capitalGrowthDecimal);
    nonReinvestedValue = nonReinvestedValue * (1 + capitalGrowthDecimal);

    // Store both values in yearlyData
    yearlyData[year] = {
        year: year + 1,
        portfolioValue: Number(currentValue.toFixed(2)),
        dividends: Number(currentYearDividend.toFixed(2)),
        nonReinvestedValue: Number(nonReinvestedValue.toFixed(2))
    };
  }


    setResults({
      totalValue: Number(currentValue.toFixed(2)).toLocaleString(), 
      totalDividends: Number(totalDividends.toFixed(2)).toLocaleString(),
      annualIncome: Number((currentValue * dividendYieldDecimal).toFixed(2)).toLocaleString(),
      yearlyData: yearlyData
  });
  };


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
          <HowToGuide />
    </div>

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

      <div className='bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-300'>
        <GraphContainer data={results.yearlyData} />
      </div>

      <div className='bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-300'>
         <FAQ />
      </div>

      
      
    </section>
    
  );
}

export default DividendCalculator;