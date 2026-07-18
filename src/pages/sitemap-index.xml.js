const pages = [
  '',
  '/privacidad',
  '/terminos',
  '/sitios-web-para-medicos',
  '/sitios-web-para-dentistas',
  '/sitios-web-para-abogados',
  '/sitios-web-para-centros-de-estetica',
];

export function GET() {
  const urls = pages.map((path) => `<url><loc>https://growthclickslab.com${path}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
