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


    //  recurring investments 
    let currentValue = calculatorState.initialInvestment;
    let totalDividends = 0;
    let capitalGrowth = 0;
    
    console.log("Starting with initial investment:", currentValue);
    console.log("Yearly dividend payment:", yearlyDividendPayment);
    console.log("Frequency multiplier:", frequencyMultiplier);


    // loops through each year of the time horizon
    
    for (let year = 0; year < calculatorState.timeHorizon; year++){
        console.log(`\nYear ${year + 1}:`);

        let currentYearDividend = currentValue * dividendYieldDecimal

        console.log("current year dividend", currentYearDividend)

        // shows dividend payments per year based on the frequency 

        for (let dividendPayment = 0; dividendPayment < frequencyMultiplier; dividendPayment++){

            let dividendContribution = currentYearDividend / frequencyMultiplier;

            console.log(`Dividend payment #${dividendPayment + 1}: ${dividendContribution}`);
            
            currentValue += dividendContribution;
            totalDividends += dividendContribution;
            
            console.log(`After dividend payment - Current value: ${currentValue}`);
        }

        currentYearDividend = currentYearDividend * (1 + dividendGrowthDecimal)

       
    
        for (let contribution = 0; contribution < recurringMultiplier; contribution++)
        {
            currentValue += calculatorState.recurringAmount

            console.log(`Added contribution #${contribution + 1}: New value ${currentValue}`);

        }

        currentValue = currentValue * (1 + capitalGrowthDecimal)

    }

    console.log("total dividends: ", totalDividends)
  
    console.log("current value;", currentValue)
    
    
    

    setResults({
      // totalValue: currentValue, 
      // totalDividends: totalDividendsPaid,
      // annualIncome: (currentValue * dividendYieldDecimal)
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