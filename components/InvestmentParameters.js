// components/InitialInvestment.js
const InvestmentParameters = ({ values, onChange }) => {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      onChange({ [name]: Number(value) });

      if (name === 'reinvestDividends'){
        onChange({ [name]: value === 'true'});
      } else {
        onChange({ [name]: Number(value)});
      }
    };
  
    return (
      <div className='flex flex-wrap gap-4 w-full'>
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="timeHorizon" className="block mb-2">
            Time Horizon (Years)
          </label>
          <input
            type="number"
            id="timeHorizon"
            name="timeHorizon"
            value={values.timeHorizon}
            onChange={handleInputChange}
            min="0"
            max="100"
            className="border p-2 rounded text-black w-full"
          />
        </div>
  
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="capitalAppreciation" className="block mb-2">
            Stock Price Growth
          </label>
          <input
            type="number"
            id="capitalAppreciation"
            name="capitalAppreciation"
            value={values.capitalAppreciation}
            onChange={handleInputChange}
            min="0"
            max="100"
            className="border p-2 rounded text-black w-full"
          />
        </div>
  
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="reinvestDividends" className="block mb-2">
            Reinvest Dividends
          </label>
          <select
            id="reinvestDividends"
            name="reinvestDividends"
            value={values.reinvestDividends}
            onChange={handleInputChange}
            className="border p-2 rounded text-black w-full"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
            
          </select>
        </div>
      </div>
    );
  };
  
  export default InvestmentParameters;