const InvestmentParameters = ({ values, onChange }) => {
  const handleInputChange = (e) => {
      const { name, value } = e.target;

      if (name === 'reinvestDividends') {
          onChange({ [name]: value === 'true' });
          return;
      }

      // Handle empty inputs
      if (value === '') {
          onChange({ [name]: 0 });
          return;
      }

      const numValue = Number(value);
      if (!isNaN(numValue)) {
          if (name === 'capitalAppreciation') {
              // Clamp percentage between 0 and 300%
              const percentage = Math.min(Math.max(numValue, 0), 300);
              onChange({ [name]: percentage });
          }
          else if (name === 'timeHorizon') {
              // Clamp the value between 1 and 50
              const timeHorizon = Math.min(Math.max(numValue, 1), 50);
              onChange({ [name]: timeHorizon });
          }
          else {
              onChange({ [name]: numValue });
          }
      }
  };

  return (
      <div className='flex flex-wrap gap-4 w-full'>
          <div className="flex-1 min-w-[200px]">
              <label htmlFor="timeHorizon" className="block mb-2 font-semibold">
                  Time Horizon (Years)
              </label>
              <input
                  type="number"
                  id="timeHorizon"
                  name="timeHorizon"
                  value={values.timeHorizon === 0 ? '' : values.timeHorizon}
                  onChange={handleInputChange}
                  min="1"
                  max="50"
                  className="border p-2 rounded text-black w-full"
              />
          </div>

          <div className="flex-1 min-w-[200px]">
              <label htmlFor="capitalAppreciation" className="block mb-2 font-semibold">
                  Stock Price Growth
              </label>
              <input
                  type="number"
                  id="capitalAppreciation"
                  name="capitalAppreciation"
                  value={values.capitalAppreciation === 0 ? '' : values.capitalAppreciation}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  className="border p-2 rounded text-black w-full"
              />
          </div>

          <div className="flex-1 min-w-[200px]">
              <label htmlFor="reinvestDividends" className="block mb-2 font-semibold">
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