import { readFileSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import MobelApiTemplateContent from '@/components/mobel/MobelApiTemplateContent';

type MobelTemplate = 'products-grid' | 'products-list' | 'category' | 'product';

const routeMap: Record<string, string> = {
  'index.html': '/',
  'products-grid.html': '/products',
  'products-list.html': '/products/list',
  'category.html': '/category',
  'product.html': '/products/1',
  'login.html': '/login',
  'checkout-1.html': '/checkout',
};

export default function StaticMobelTemplate({ template, productId, categorySlug }: { template: MobelTemplate; productId?: string; categorySlug?: string }) {
  const filePath = path.join(process.cwd(), 'template-mobel-furniture', 'template', `${template}.html`);
  const $ = cheerio.load(readFileSync(filePath, 'utf8'));
  let inPageContent = false;
  let markup = '';

  $('.wrapper').first().children().each((_, element) => {
    const child = $(element);
    if (child.is('.main-header')) inPageContent = true;
    if (child.is('footer')) inPageContent = false;
    if (inPageContent) markup += $.html(element);
  });

  markup = markup
    .replaceAll('assets/images/', '/mobel/assets/images/')
    .replace(/href=(['"])([^'"]+\.html)\1/g, (_match, quote: string, route: string) => `href=${quote}${routeMap[route] || '/products'}${quote}`);

  return <MobelApiTemplateContent template={template} productId={productId} categorySlug={categorySlug} markup={markup} />;
}
