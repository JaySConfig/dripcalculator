'use client';

import PortfolioValueChart from "./graphs/PortfolioValueChart";
import DividendIncomeChart from "./graphs/DividendIncomeChart";
import ReinvestmentComparisonChart from "./graphs/ReinvestmentComparisonChart";
import { useState } from "react";

const GraphContainer = ({ data }) => {
    const [activeTab, setActiveTab] = useState('portfolio');

    return (
        <div className="space-y-4">
          {/* Tab buttons */}
          <div className="flex space-x-4 border-b">
            <button 
              onClick={() => setActiveTab('portfolio')}
              className={`p-2 ${activeTab === 'portfolio' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
            >
              Portfolio Value
            </button>
            <button 
              onClick={() => setActiveTab('dividend')}
              className={`p-2 ${activeTab === 'dividend' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
            >
              Dividend Income
            </button>
            <button 
              onClick={() => setActiveTab('comparison')}
              className={`p-2 ${activeTab === 'comparison' ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
            >
              Reinvestment Comparison
            </button>
          </div>
    
          {/* Tab content */}
          <div>
            {activeTab === 'portfolio' && <PortfolioValueChart data={data} />}
            {activeTab === 'dividend' && <DividendIncomeChart data={data} />}
            {activeTab === 'comparison' && <ReinvestmentComparisonChart data={data} />}
          </div>
        </div>
      );
    };
    
    export default GraphContainer;
