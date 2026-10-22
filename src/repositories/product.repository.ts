import { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { ProductQuery } from '@/types/product';

const productInclude = {
    category: true,
    images: { orderBy: { sortOrder: 'asc' as const } },
};

export class ProductRepository {
    async findMany(query: ProductQuery) {
        const page = Math.max(1, query.page ?? 1);
        const pageSize = Math.min(48, Math.max(1, query.pageSize ?? 12));
        const where: Prisma.ProductWhereInput = {
            ...(query.category ? { category: { slug: query.category } } : {}),
            ...(query.featured ? { featured: true } : {}),
            ...(query.inStock ? { stock: { gt: 0 } } : {}),
            ...(query.onSale ? { compareAtPrice: { not: null } } : {}),
            ...(query.material ? { material: { contains: query.material } } : {}),
            ...(query.q ? { OR: [
                { name: { contains: query.q } },
                { description: { contains: query.q } },
                { brand: { contains: query.q } },
                { material: { contains: query.q } },
            ] } : {}),
            ...(query.minPrice !== undefined || query.maxPrice !== undefined ? {
                price: {
                    ...(query.minPrice !== undefined ? { gte: query.minPrice } : {}),
                    ...(query.maxPrice !== undefined ? { lte: query.maxPrice } : {}),
                },
            } : {}),
        };
        const orderBy: Prisma.ProductOrderByWithRelationInput = query.sort === 'price-asc'
            ? { price: 'asc' }
            : query.sort === 'price-desc'
                ? { price: 'desc' }
                : query.sort === 'name'
                    ? { name: 'asc' }
                    : { createdAt: 'desc' };

        const [items, total] = await Promise.all([
            prisma.product.findMany({ where, include: productInclude, orderBy, skip: (page - 1) * pageSize, take: pageSize }),
            prisma.product.count({ where }),
        ]);
        return { items, total, page, pageSize, totalPages: Math.ceil(total / pageSize) };
    }

    findByIdOrSlug(idOrSlug: string) {
        const numericId = Number(idOrSlug);
        return prisma.product.findFirst({
            where: Number.isSafeInteger(numericId) && numericId > 0
                ? { OR: [{ id: numericId }, { slug: idOrSlug }] }
                : { slug: idOrSlug },
            include: productInclude,
        });
    }

    findCategories() {
        return prisma.productCategory.findMany({
            include: { _count: { select: { products: true } } },
            orderBy: { name: 'asc' },
        });
    }
}

export const productRepository = new ProductRepository();
