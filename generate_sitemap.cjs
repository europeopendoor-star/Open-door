const fs = require('fs');
const path = require('path');

// Extract slugs from blogPosts.ts
const blogPostsPath = path.join(__dirname, 'src', 'data', 'blogPosts.ts');
const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf8');

const slugRegex = /slug:\s*'([^']+)'/g;
let match;
const blogSlugs = [];

while ((match = slugRegex.exec(blogPostsContent)) !== null) {
  blogSlugs.push(match[1]);
}

const staticRoutes = [
  '',
  '/jobs',
  '/employers',
  '/relocation',
  '/about',
  '/visa-guide',
  '/success-stories',
  '/post-job',
  '/talent-solutions',
  '/pricing',
  '/blog',
  '/contact'
];

const domain = 'https://europeopendoor.com';

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static routes
staticRoutes.forEach(route => {
  sitemap += `  <url>
    <loc>${domain}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>\n`;
});

// Add blog posts
blogSlugs.forEach(slug => {
  sitemap += `  <url>
    <loc>${domain}/blog/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

sitemap += `</urlset>`;

// Ensure public directory exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('Generated sitemap.xml');

// Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('Generated robots.txt');
