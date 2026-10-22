import { NextRequest, NextResponse } from 'next/server';
import { productService } from '@/services/product.service';

function numberParam(value: string | null) {
    if (value === null || value === '') return undefined;
    const number = Number(value);
    return Number.isFinite(number) ? number : undefined;
}

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams;
    const sortValue = params.get('sort');
    const sort = sortValue === 'name' || sortValue === 'price-asc' || sortValue === 'price-desc' ? sortValue : 'newest';
    const page = Math.max(1, Number(params.get('page')) || 1);
    const pageSize = Math.min(48, Math.max(1, Number(params.get('pageSize')) || 12));
    const minPrice = numberParam(params.get('minPrice'));
    const maxPrice = numberParam(params.get('maxPrice'));
    if ((minPrice !== undefined && minPrice < 0) || (maxPrice !== undefined && maxPrice < 0) || (minPrice !== undefined && maxPrice !== undefined && minPrice > maxPrice)) {
        return NextResponse.json({ error: 'Invalid price range' }, { status: 400 });
    }

    try {
        const result = await productService.getProducts({
            q: params.get('q')?.trim() || undefined,
            category: params.get('category') || undefined,
            minPrice,
            maxPrice,
            sort,
            page,
            pageSize,
            featured: params.get('featured') === 'true' ? true : undefined,
            inStock: params.get('inStock') === 'true' ? true : undefined,
            onSale: params.get('onSale') === 'true' ? true : undefined,
            material: params.get('material')?.trim() || undefined,
        });
        return NextResponse.json(result, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } });
    } catch (error) {
        console.error('[API_PRODUCTS_GET]', error);
        return NextResponse.json({ error: 'Unable to load products' }, { status: 500 });
    }
}
