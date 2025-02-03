const HowToGuide = () => {
    return (
        <section className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">📌 Step-by-Step Guide</h2>
                <h3 className="text-xl font-semibold mb-2">📝 How to Use This Dividend Reinvestment Calculator</h3>
                <p className="text-lg text-gray-700">💡 Follow these steps to see how your dividends can grow over time:</p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
                {/* Step 1 */}
                <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-lg font-bold mb-2">Step 1: Enter Your Investment Details</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">🔹</span>
                            <span><strong>Initial Investment</strong> – The amount you are starting with.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">🔹</span>
                            <span><strong>Recurring Investment</strong> – Additional contributions made <strong>monthly, quarterly, or annually</strong>.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-2">🔹</span>
                            <span><strong>Recurring Frequency</strong> – How often you add money to your portfolio.</span>
                        </li>
                    </ul>
                </div>

                {/* Step 2 */}
                <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="text-lg font-bold mb-2">Step 2: Adjust Your Dividend Settings</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">🔹</span>
                            <span><strong>Dividend Yield</strong> – The expected <strong>annual return from dividends</strong> (e.g., 4% for S&P 500 stocks).</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">🔹</span>
                            <span><strong>Dividend Growth Rate</strong> – How much you expect dividends to grow each year.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">🔹</span>
                            <span><strong>Payment Frequency</strong> – How often dividends are paid <strong>(monthly, quarterly, etc.)</strong>.</span>
                        </li>
                    </ul>
                </div>

                {/* Step 3 */}
                <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-lg font-bold mb-2">Step 3: Set Growth Factors</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-purple-500 mr-2">🔹</span>
                            <span><strong>Time Horizon</strong> – How many years you plan to hold the investment.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-purple-500 mr-2">🔹</span>
                            <span><strong>Stock Price Growth</strong> – The estimated annual growth of your stock's price.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-purple-500 mr-2">🔹</span>
                            <span><strong>Reinvest Dividends?</strong> – Choose <strong>Yes</strong> to maximize compounding or <strong>No</strong> to take dividends as cash.</span>
                        </li>
                    </ul>
                </div>

                {/* Step 4 */}
                <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="text-lg font-bold mb-2">Step 4: View Your Results</h4>
                    <p className="mb-2">Once you've filled in the details, you'll see:</p>
                    <ul className="space-y-2 mb-4">
                        <li className="flex items-start">
                            <span className="text-orange-500 mr-2">✔️</span>
                            <span><strong>Total Portfolio Value</strong></span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-orange-500 mr-2">✔️</span>
                            <span><strong>Total Dividends Earned</strong></span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-orange-500 mr-2">✔️</span>
                            <span><strong>Reinvestment vs. No Reinvestment Comparison</strong></span>
                        </li>
                    </ul>
                </div>

                {/* Final Notes */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="mb-2">📈 <strong>Check the graph</strong> to visually compare reinvested vs. non-reinvested growth! 🚀</p>
                    <p>✅ <strong>Want to learn more?</strong> Scroll down to the FAQ section for common questions!</p>
                </div>
            </div>
        </section>
    );
};

export default HowToGuide;