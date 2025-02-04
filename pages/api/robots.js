export default function handler(req, res) {
    res.setHeader("Content-Type", "text/plain");
  
    const robotsTxt = `
      User-agent: *
      Allow: /
  
      Sitemap: https://www.dividendreinvestmentcalculator.net/api/sitemap
    `;
  
    res.status(200).send(robotsTxt.trim());
  }
  