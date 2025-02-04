const FAQ = () => {
    return (
        <section className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">📌 FAQ Section</h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
                {/* Question 1 */}
                <details className="bg-white rounded-lg shadow">
                    <summary className="text-lg font-bold p-4 cursor-pointer hover:bg-gray-50">
                        What is dividend reinvestment?
                    </summary>
                    <div className="p-4 border-t">
                        <p className="text-black">
                            Dividend reinvestment means <strong>using dividends to buy more shares</strong> instead of taking them as cash. This helps grow your investment <strong>faster through compounding</strong>.
                        </p>
                    </div>
                </details>

                {/* Question 2 */}
                <details className="bg-white rounded-lg shadow">
                    <summary className="text-lg font-bold p-4 cursor-pointer hover:bg-gray-50">
                        How is this different from a DRIP (Dividend Reinvestment Plan)?
                    </summary>
                    <div className="p-4 border-t">
                        <p className="text-black">
                            A <strong>DRIP</strong> is an automated reinvestment program offered by brokerages. This calculator simulates <strong>both manual reinvestment and DRIP strategies</strong>.
                        </p>
                    </div>
                </details>

                {/* Question 3 */}
                <details className="bg-white rounded-lg shadow">
                    <summary className="text-lg font-bold p-4 cursor-pointer hover:bg-gray-50">
                        What's a good dividend yield?
                    </summary>
                    <div className="p-4 border-t">
                        <p className="text-black">
                            A typical range is <strong>3-6%</strong>, but higher yields don't always mean better returns. <strong>Growth stocks</strong> may have lower yields but better <strong>capital appreciation</strong>.
                        </p>
                    </div>
                </details>

                {/* Question 4 */}
                <details className="bg-white rounded-lg shadow">
                    <summary className="text-lg font-bold p-4 cursor-pointer hover:bg-gray-50">
                        Should I reinvest dividends or take them as cash?
                    </summary>
                    <div className="p-4 border-t">
                        <p className="text-black mb-2 font-semibold">It depends on your goal:</p>
                        <ul className="list-disc ml-6 text-black">
                            <li className="mb-1"><strong>Reinvest</strong> if you want maximum long-term growth.</li>
                            <li><strong>Take cash</strong> if you need passive income.</li>
                        </ul>
                    </div>
                </details>

                {/* Question 5 */}
                <details className="bg-white rounded-lg shadow">
                    <summary className="text-lg font-bold p-4 cursor-pointer hover:bg-gray-50">
                        How does payment frequency affect my returns?
                    </summary>
                    <div className="p-4 border-t">
                        <p className="text-black">
                            <strong>More frequent payments (monthly vs. annual) lead to slightly better compounding</strong>. However, the <strong>total dividend earned remains the same</strong>, only the reinvestment timing changes.
                        </p>
                    </div>
                </details>

                {/* Question 6 */}
                <details className="bg-white rounded-lg shadow">
                    <summary className="text-lg font-bold p-4 cursor-pointer hover:bg-gray-50">
                        What's the difference between dividend yield and dividend growth rate?
                    </summary>
                    <div className="p-4 border-t">
                        <ul className="list-disc ml-6 text-black">
                            <li className="mb-1"><strong>Dividend Yield (%)</strong> = How much a stock pays in dividends yearly.</li>
                            <li><strong>Dividend Growth Rate (%)</strong> = How much dividends increase annually.</li>
                        </ul>
                    </div>
                </details>

                {/* Question 7 */}
                <details className="bg-white rounded-lg shadow">
                    <summary className="text-lg font-bold p-4 cursor-pointer hover:bg-gray-50">
                        Can I use this calculator for real stocks?
                    </summary>
                    <div className="p-4 border-t">
                        <p className="text-black">
                            Yes! Just enter real stock data from Yahoo Finance, Dividend.com, or your brokerage.
                        </p>
                    </div>
                </details>

                {/* Question 8 */}
                <details className="bg-white rounded-lg shadow">
                    <summary className="text-lg font-bold p-4 cursor-pointer hover:bg-gray-50">
                        Why is my final value different from other calculators?
                    </summary>
                    <div className="p-4 border-t">
                        <p className="text-black">
                            Some calculators <strong>don't adjust for exact payment frequency or reinvestment timing</strong>. Ours factors in <strong>realistic reinvestment schedules</strong> for accuracy.
                        </p>
                    </div>
                </details>
            </div>
        </section>
    );
};

export default FAQ;