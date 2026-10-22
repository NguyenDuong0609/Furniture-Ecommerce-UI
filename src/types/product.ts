export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  productCount?: number;
}

export interface ProductImage {
  id: number;
  url: string;
  alt: string;
  sortOrder: number;
  sourceName: string | null;
  sourceUrl: string | null;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  sku: string;
  description: string;
  material: string;
  brand: string;
  price: number;
  compareAtPrice: number | null;
  stock: number;
  featured: boolean;
  category: ProductCategory;
  images: ProductImage[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductListResponse {
  items: Product[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ProductQuery {
  q?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: "name" | "price-asc" | "price-desc" | "newest";
  page?: number;
  pageSize?: number;
  featured?: boolean;
  inStock?: boolean;
  onSale?: boolean;
  material?: string;
}
