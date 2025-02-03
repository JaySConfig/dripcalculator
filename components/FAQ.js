const FAQ = () => {
    return (
        <section className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300">
            {/* Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">📌 FAQ Section</h2>
                <h3 className="text-xl font-semibold">❓ Frequently Asked Questions</h3>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
                {/* Question 1 */}
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                    <h4 className="text-lg font-bold mb-2">1. What is dividend reinvestment?</h4>
                    <p className="text-gray-700">
                        Dividend reinvestment means <strong>using dividends to buy more shares</strong> instead of taking them as cash. This helps grow your investment <strong>faster through compounding</strong>.
                    </p>
                </div>

                {/* Question 2 */}
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                    <h4 className="text-lg font-bold mb-2">2. How is this different from a DRIP (Dividend Reinvestment Plan)?</h4>
                    <p className="text-gray-700">
                        A <strong>DRIP</strong> is an automated reinvestment program offered by brokerages. This calculator simulates <strong>both manual reinvestment and DRIP strategies</strong>.
                    </p>
                </div>

                {/* Question 3 */}
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                    <h4 className="text-lg font-bold mb-2">3. What's a good dividend yield?</h4>
                    <p className="text-gray-700">
                        A typical range is <strong>3-6%</strong>, but higher yields don't always mean better returns. <strong>Growth stocks</strong> may have lower yields but better <strong>capital appreciation</strong>.
                    </p>
                </div>

                {/* Question 4 */}
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                    <h4 className="text-lg font-bold mb-2">4. Should I reinvest dividends or take them as cash?</h4>
                    <p className="text-gray-700 mb-2">It depends on your goal:</p>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li className="mb-1"><strong>Reinvest</strong> if you want maximum long-term growth.</li>
                        <li><strong>Take cash</strong> if you need passive income.</li>
                    </ul>
                </div>

                {/* Question 5 */}
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                    <h4 className="text-lg font-bold mb-2">5. How does payment frequency affect my returns?</h4>
                    <p className="text-gray-700">
                        <strong>More frequent payments (monthly vs. annual) lead to slightly better compounding</strong>. However, the <strong>total dividend earned remains the same</strong>, only the reinvestment timing changes.
                    </p>
                </div>

                {/* Question 6 */}
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                    <h4 className="text-lg font-bold mb-2">6. What's the difference between dividend yield and dividend growth rate?</h4>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li className="mb-1"><strong>Dividend Yield (%)</strong> = How much a stock pays in dividends yearly.</li>
                        <li><strong>Dividend Growth Rate (%)</strong> = How much dividends increase annually.</li>
                    </ul>
                </div>

                {/* Question 7 */}
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                    <h4 className="text-lg font-bold mb-2">7. Can I use this calculator for real stocks?</h4>
                    <p className="text-gray-700">
                        Yes! Just enter real stock data from Yahoo Finance, Dividend.com, or your brokerage.
                    </p>
                </div>

                {/* Question 8 */}
                <div className="border-l-4 border-indigo-500 pl-4 py-2">
                    <h4 className="text-lg font-bold mb-2">8. Why is my final value different from other calculators?</h4>
                    <p className="text-gray-700">
                        Some calculators <strong>don't adjust for exact payment frequency or reinvestment timing</strong>. Ours factors in <strong>realistic reinvestment schedules</strong> for accuracy.
                    </p>
                </div>

                {/* Footer */}
                {/* <div className="bg-gray-50 p-4 rounded-lg mt-6">
                    <p className="text-gray-700">
                        ✅ <strong>Still have questions?</strong> <span className="text-blue-600 cursor-pointer">Contact us</span> or check our <span className="text-blue-600 cursor-pointer">Dividend Investing Guide</span>!
                    </p>
                </div> */}
            </div>
        </section>
    );
};

export default FAQ;