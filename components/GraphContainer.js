'use client';

import PortfolioValueChart from "./graphs/PortfolioValueChart";

const GraphContainer = ({ data }) => {
  return (
    <div className="space-y-6">
      <PortfolioValueChart data={data} />
    </div>
  );
};

export default GraphContainer;