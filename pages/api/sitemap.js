export default function handler(req, res) {
    res.setHeader("Content-Type", "application/xml");
  
    const domain = "https://www.dividendreinvestmentcalculator.net"; // Replace with your actual domain
    const lastMod = new Date().toISOString(); // Auto-updates last modified date
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${domain}/</loc>
          <lastmod>${lastMod}</lastmod>
          <priority>1.0</priority>
        </url>
      </urlset>`;
  
    res.status(200).send(sitemap);
  }
  