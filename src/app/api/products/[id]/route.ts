import { NextResponse } from 'next/server';
import { productService } from '@/services/product.service';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const product = await productService.getProduct(decodeURIComponent(id));
        if (!product) return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        return NextResponse.json(product, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } });
    } catch (error) {
        console.error('[API_PRODUCT_GET]', error);
        return NextResponse.json({ error: 'Unable to load product' }, { status: 500 });
    }
}
