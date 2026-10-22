import { NextResponse } from 'next/server';
import { productService } from '@/services/product.service';

export async function GET() {
    try {
        const categories = await productService.getCategories();
        return NextResponse.json(categories, { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' } });
    } catch (error) {
        console.error('[API_PRODUCT_CATEGORIES_GET]', error);
        return NextResponse.json({ error: 'Unable to load product categories' }, { status: 500 });
    }
}
