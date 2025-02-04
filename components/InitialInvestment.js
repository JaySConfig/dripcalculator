// components/InitialInvestment.js
const InitialInvestment = ({ values, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'recurringFrequency') {
      onChange({ [name]: value });  // Keep as string for dropdowns
    } else {
      // For number inputs (initialInvestment and recurringAmount)
      if (value === '') {
        // Allow empty value temporarily
        onChange({ [name]: 0 });  // or whatever minimum value you want
      } else {
        const numValue = Number(value);
        if (!isNaN(numValue)) {
          onChange({ [name]: numValue });
        }
      }
    }

  };

 

  return (
    <div className='flex flex-wrap gap-4 w-full'>
      <div className="flex-1 min-w-[200px]">
        <label htmlFor="initialInvestment" className="block mb-2 font-semibold">
          Initial Investment ($)
        </label>
        <input
          type="number"
          id="initialInvestment"
          name="initialInvestment"
          value={values.initialInvestment === 0 ? '' : values.initialInvestment}  // Show empty string if 0

          onChange={handleInputChange}
          className="border p-2 rounded text-black w-full"
        />
      </div>

      <div className="flex-1 min-w-[200px]">
        <label htmlFor="recurringAmount" className="block mb-2 font-semibold">
          Recurring Investment ($)
        </label>
        <input
          type="number"
          id="recurringAmount"
          name="recurringAmount"
          value={values.recurringAmount === 0 ? '' : values.recurringAmount}  // Show empty string if 0

          onChange={handleInputChange}
          // min="0"
          className="border p-2 rounded text-black w-full"
        />
      </div>

      <div className="flex-1 min-w-[200px]">
        <label htmlFor="recurringFrequency" className="block mb-2 font-semibold">
          Recurring Frequency
        </label>
        <select
          id="recurringFrequency"
          name="recurringFrequency"
          value={values.recurringFrequency}
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

export default InitialInvestment;