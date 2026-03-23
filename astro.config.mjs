// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://epro.net.pl',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        // Strona główna - najwyższy priorytet, zmieniana rzadziej
        if (item.url === 'https://epro.net.pl/') {
          item.changefreq = 'monthly';
          item.priority = 1.0;
          item.lastmod = new Date().toISOString();
        }
        // Lista artykułów - zmieniana gdy dodajemy nowe
        else if (item.url === 'https://epro.net.pl/blog/') {
          item.changefreq = 'weekly';
          item.priority = 0.8;
          item.lastmod = new Date().toISOString();
        }
        // Artykuły blogowe
        else {
          item.changefreq = 'monthly';
          item.priority = 0.7;
          item.lastmod = new Date().toISOString();
        }
        return item;
      }
    })
  ]
});
