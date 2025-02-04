

'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DividendIncomeChart = ({ data }) => {
  return (
    <div className="h-96 w-full p-4 mb-8 overflow-x-auto">
      <h3 className="text-lg font-semibold mb-2">Yearly Dividend Over Time</h3>
      <div className='min-w-[320] h-full'>
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
                className="font-semibold text-black"
                label={{ 
                    value: 'Yearly Dividend', 
                    angle: -90, 
                    position: 'left',
                    offset: 10,
                    }}
                
            />
          <YAxis />
          <Tooltip 
                formatter={(value) => [`$${value.toLocaleString()}`, 'Yearly Dividend']}
                contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }}
            />
          <Line 
                type="basis" 
                dataKey="dividends" 
                stroke="#2563eb"  // Blue color you had before
                strokeWidth={3}
                dot={false}
                name="Yearly Dividend"
            />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default DividendIncomeChart;