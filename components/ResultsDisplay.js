import { Result } from "postcss";

const ResultsDisplay = ({ values }) => {
    return (
        <div className='w-full mt-8'>
            <h2 className="text-xl font-bold mb-4">Investment Results</h2>

            <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200]px p-4 border rounded">
                    <h3 className="font-semibold">Total Portfolio Value</h3>
                    <p className="text-2xl">${values.totalValue || 0}</p>
                </div>
            </div>

            <div className="flex-1 min-w-[200]px p-4 border rounded">
                <h3 className="font-semibold">Total Dividends Earned</h3>
                <p className="text-2xl">${values.totalDividends || 0}</p>
            </div> 

            <div className="flex-1 min-w-[200]px p-4 border rounded">
                <h3 className="font-semibold">Annual Dividend Income</h3>
                <p className="text-2xl">${values.annualIncome || 0}</p>
            </div> 

        </div>
    );
};

export default ResultsDisplay; 
