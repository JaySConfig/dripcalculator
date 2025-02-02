

'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ReinvestmentComparisonChart = ({ data }) => {
  return (
    <div className="h-96 w-full p-4">
      <h3 className="text-lg font-semibold mb-2">Comparison Chart</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={data}
          margin={{ top: 20, right: 30, left: 70, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
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
                className="font-semibold"
                label={{ 
                    value: 'Portfolio Value', 
                    angle: -90, 
                    position: 'left',
                    offset: 10,
                    }}
                
            />
          <YAxis />
          <Tooltip 
                formatter={(value) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
            />
            <Legend 
                align="right"  // Position horizontally: "left", "center", "right"
                verticalAlign="top"  // Position vertically: "top", "middle", "bottom"
                layout="horizontal"  // "horizontal" or "vertical"
            />
          <Line 
                type="basis" 
                dataKey="portfolioValue" 
                stroke="#2563eb"  // Blue color you had before
                strokeWidth={3}
                dot={false}
                name="With Reinvestment"
            />
            <Line 
                type="basis" 
                dataKey="nonReinvestedValue" 
                stroke="#d54d4d"  // Blue color you had before
                strokeWidth={3}
                dot={false}
                name="Without Reinvestment"
            />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReinvestmentComparisonChart;