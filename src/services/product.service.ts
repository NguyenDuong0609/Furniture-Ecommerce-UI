import { productRepository } from '@/repositories/product.repository';
import { ProductQuery } from '@/types/product';

export class ProductService {
    getProducts(query: ProductQuery) {
        return productRepository.findMany(query);
    }

    getProduct(idOrSlug: string) {
        return productRepository.findByIdOrSlug(idOrSlug);
    }

    async getCategories() {
        const categories = await productRepository.findCategories();
        return categories.map(({ _count, ...category }) => ({ ...category, productCount: _count.products }));
    }
}

export const productService = new ProductService();
