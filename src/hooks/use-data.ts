import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '@/lib/api-client';
import { Article } from '@/types/article';
import { Product, ProductCategory, ProductListResponse, ProductQuery } from '@/types/product';

function productQueryString(query: ProductQuery = {}) {
    const params = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined && value !== '') params.set(key, String(value));
    });
    const search = params.toString();
    return search ? `?${search}` : '';
}

export const useProducts = (query: ProductQuery = {}, enabled = true) => useQuery({
    queryKey: ['products', query],
    queryFn: () => ApiClient.get<ProductListResponse>(`/products${productQueryString(query)}`),
    enabled,
});

export const useProduct = (idOrSlug: string) => useQuery({
    queryKey: ['product', idOrSlug],
    queryFn: () => ApiClient.get<Product>(`/products/${encodeURIComponent(idOrSlug)}`),
    enabled: Boolean(idOrSlug),
});

export const useProductCategories = (enabled = true) => useQuery({
    queryKey: ['product-categories'],
    queryFn: () => ApiClient.get<ProductCategory[]>('/product-categories'),
    enabled,
});

export const usePosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: () => ApiClient.get<Article[]>('/posts'),
    });
};

export const usePost = (slug: string) => {
    return useQuery({
        queryKey: ['post', slug],
        queryFn: () => ApiClient.get<Article>(`/posts/${slug}`),
        enabled: !!slug,
    });
};

export const useCategoryPosts = (slug: string) => {
    return useQuery({
        queryKey: ['category-posts', slug],
        queryFn: () => ApiClient.get<Article[]>(`/categories/${slug}/posts`),
        enabled: !!slug,
    });
};

export const useAuthorPosts = (slug: string) => {
    return useQuery({
        queryKey: ['author-posts', slug],
        queryFn: () => ApiClient.get<Article[]>(`/authors/${slug}/posts`),
        enabled: !!slug,
    });
};
