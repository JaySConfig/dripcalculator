

// components/InitialInvestment.js
const DividendDetails = ({ values, onChange }) => {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      onChange({ [name]: Number(value) });
    };
  
    return (
        <div className='flex flex-wrap gap-4 w-full '>
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="dividendYield" className="block mb-2">  
            Dividend Yield
          </label>
          <input
            type="number"
            id="dividendYield"
            name="dividendYield"           
            value={values.dividendYield}    
            onChange={handleInputChange}
            min="0"
            max="100"
            className="border p-2 rounded text-black w-full"
          />
        </div>
  
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="dividendGrowth" className="block mb-2">
            Dividend Growth Rate
          </label>
          <input
            type="number"
            id="dividendGrowth"
            name="dividendGrowth"
            value={values.dividendGrowth}
            onChange={handleInputChange}
            min="0"
            max="100"
            className="border p-2 rounded text-black w-full"
          />
        </div>
  
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="paymentFrequency" className="block mb-2">
           Payment Frequency
          </label>
          <select
            id="paymentFrequency"
            name="paymentFrequency"
            value={values.paymentFrequency}
            onChange={handleInputChange}
            className="border p-2 rounded text-black w-full"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="semi-annually">Semi-Annually</option>
            <option value="annually">Annually</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default DividendDetails;