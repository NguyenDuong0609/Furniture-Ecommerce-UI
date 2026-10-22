import StaticMobelTemplate from '@/components/mobel/StaticMobelTemplate';

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <StaticMobelTemplate template="product" productId={id} />;
}
