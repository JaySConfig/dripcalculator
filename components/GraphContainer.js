'use client';

import PortfolioValueChart from "./graphs/PortfolioValueChart";
import DividendIncomeChart from "./graphs/DividendIncomeChart";
import ReinvestmentComparisonChart from "./graphs/ReinvestmentComparisonChart";

const GraphContainer = ({ data }) => {

console.log("Graph Container data:", data);
  return (
    <div className="space-y-6">
      <PortfolioValueChart data={data} />

      <DividendIncomeChart data={data} />

      <ReinvestmentComparisonChart data={data} />

    </div>

    
  );
};

export default GraphContainer;