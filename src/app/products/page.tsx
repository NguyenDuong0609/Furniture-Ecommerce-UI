import StaticMobelTemplate from '@/components/mobel/StaticMobelTemplate';

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  return <StaticMobelTemplate template="products-grid" categorySlug={category} />;
}
