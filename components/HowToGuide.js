
const HowToGuide = () => {
    return (
        <section className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">📌 Step-by-Step Guide</h2>
                <h3 className="text-xl font-semibold mb-2">📝 How to Use This Dividend Reinvestment Calculator</h3>
                <p className="text-lg">💡 Follow these steps to see how your dividends can grow over time:</p>
            </div>

            {/* Steps as Dropdowns */}
            <div className="space-y-4">
                {/* Step 1 */}
                <details className="bg-white rounded-lg shadow" open>
                    <summary className="text-lg font-bold p-4 cursor-pointer hover:bg-gray-50">
                        Step 1: Enter Your Investment Details
                    </summary>
                    <div className="p-4 border-t">
                        <ul className="space-y-2 ">
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
                </details>

                {/* Step 2 */}
                <details className="bg-white rounded-lg shadow">
                    <summary className="text-lg font-bold p-4 cursor-pointer hover:bg-gray-50">
                        Step 2: Adjust Your Dividend Settings
                    </summary>
                    <div className="p-4 border-t">
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
                </details>

                {/* Step 3 */}
                <details className="bg-white rounded-lg shadow">
                    <summary className="text-lg font-bold p-4 cursor-pointer hover:bg-gray-50">
                        Step 3: Set Growth Factors
                    </summary>
                    <div className="p-4 border-t">
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
                </details>

                {/* Step 4 */}
                <details className="bg-white rounded-lg shadow">
                    <summary className="text-lg font-bold p-4 cursor-pointer hover:bg-gray-50">
                        Step 4: View Your Results
                    </summary>
                    <div className="p-4 border-t">
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
                </details>

                {/* Final Notes */}
                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                    <p className="mb-2">📈 <strong>Check the graph</strong> to visually compare reinvested vs. non-reinvested growth! 🚀</p>
                    <p>✅ <strong>Want to learn more?</strong> Scroll down to the FAQ section for common questions!</p>
                </div>
            </div>
        </section>
    );
};

export default HowToGuide;