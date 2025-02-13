'use client';

import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-base-100 mt-auto">
            <div className="max-w-6xl mx-auto p-8">
                {/* Navigation Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-black">
                    {/* Investment Tools */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Investment Tools</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-blue-600">Dividend Reinvestment Calculator</Link></li>
                            <li><Link href="/how-it-works" className="hover:text-blue-600">How It Works</Link></li>
                        </ul>
                    </div>

                    {/* Property Tools */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Property Tools</h3>
                        <ul className="space-y-2">
                            <li><a href="https://ukbuyvsrentcalculator.net" className="hover:text-blue-600">Buy vs Rent Calculator</a></li>
                        </ul>
                    </div>

                    {/* Marketing Tools */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Marketing Tools</h3>
                        <ul className="space-y-2">
                            <li><a href="https://marketingcalculators.net/calculators/roi-calculator" className="hover:text-blue-600">ROI Calculator</a></li>
                            <li><a href="https://marketingcalculators.net/calculators/roas-calculator" className="hover:text-blue-600">ROAS Calculator</a></li>
                            <li><a href="https://marketingcalculators.net/calculators/ltv-calculator" className="hover:text-blue-600">LTV Calculator</a></li>
                            <li><a href="https://marketingcalculators.net/calculators/cac-calculator" className="hover:text-blue-600">CAC Calculator</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright and Disclaimer */}
                <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
                    <p className="mb-2">
                        This calculator is for informational purposes only. Please consult with financial professionals for specific investment advice.
                    </p>
                    <p>
                        © 2024 Dividend Reinvestment Calculator. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;