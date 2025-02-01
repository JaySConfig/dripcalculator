'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PortfolioValueChart = ({ data }) => {
  return (
    <div className="h-96 w-full p-4">
      <h3 className="text-lg font-semibold mb-4">Portfolio Value Over Time</h3>
      <ResponsiveContainer>
        <LineChart 
          data={data}
          margin={{ top: 20, right: 30, left: 70, bottom: 20 }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#374151" 
            opacity={0.2}
          />
          <XAxis 
            dataKey="year"
            label={{ value: 'Year', position: 'bottom', offset: 0 }}
            ticks={[1,2,3,4,5,6,7,8,9,10]}  // Force specific year ticks
          />
          <YAxis 
            tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`}  // Format as $Xk
            label={{ 
              value: 'Portfolio Value', 
              angle: -90, 
              position: 'left',
              offset: 10
            }}
          />
          <Tooltip 
            formatter={(value) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
            contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
          />
          <Line 
            type="monotone" 
            dataKey="portfolioValue" 
            stroke="#2563eb" 
            strokeWidth={3}
            dot={false}
            name="Portfolio Value"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default PortfolioValueChart;