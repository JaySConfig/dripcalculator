'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PortfolioValueChart = ({ data }) => {
  return (
    <div className="h-96 w-full p-4 mb-8">
      <h3 className="text-lg font-semibold mb-2">Portfolio Value Over Time</h3>
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
            className='font-semibold'
            
            dataKey="year"
            label={{ value: 'Year', position: 'bottom', offset: 0 }}
            ticks={Array.from({ length: data.length }, (_, i) => i + 1)}  // Dynamic ticks

          />
          <YAxis 
            tickFormatter={(value) => {
              if (value >= 1000000) {
                return `$${(value/1000000).toFixed(1)}M`;
              } else if (value >= 1000) {
                return `$${(value/1000).toFixed(0)}K`;
              }
              return `$${value}`;
            }}
            className="font-semibold text-black"
            label={{ 
              value: 'Portfolio Value', 
              angle: -90, 
              position: 'left',
              offset: 10,
            }}
          />
          <Tooltip 
            formatter={(value) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
            contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
          />
          <Line 
            type="basis" 
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