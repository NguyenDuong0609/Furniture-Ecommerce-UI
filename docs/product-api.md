# Product API contract

The storefront keeps the original Mobel template markup, styles, and interactions while loading product catalog and product-detail fields through the JSON API with TanStack Query. Product copy and prices are seeded locally, and product/category images use files already shipped in `public/mobel/assets/images`; no third-party product content or image service is required. Prisma and SQLite are the current API implementation and can be replaced by another backend that preserves the response contract below.

Set `NEXT_PUBLIC_API_BASE_URL` to the API origin (for example `https://api.example.com`) or an API prefix ending in `/api` (for example `https://api.example.com/api`). When omitted, the frontend calls the current Next.js app's `/api` routes.

## `GET /api/products`

Query parameters: `q`, `category`, `minPrice`, `maxPrice`, `material`, `inStock` (`true`), `onSale` (`true`), `sort` (`newest`, `name`, `price-asc`, `price-desc`), `page`, `pageSize` (1–48), and `featured` (`true`). Response:

```json
{
  "items": [{
    "id": 1,
    "name": "Laura Modular Sofa",
    "slug": "laura-modular-sofa",
    "sku": "MOB-SOF-001",
    "description": "...",
    "material": "Solid oak, linen blend",
    "brand": "Mobel Studio",
    "price": 1999,
    "compareAtPrice": 2499,
    "stock": 12,
    "featured": true,
    "category": { "id": 1, "name": "Sofas", "slug": "sofas", "description": "...", "image": "..." },
    "images": [{ "id": 1, "url": "...", "alt": "...", "sortOrder": 0, "sourceName": "Unsplash", "sourceUrl": "..." }],
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-01T00:00:00.000Z"
  }],
  "total": 8,
  "page": 1,
  "pageSize": 12,
  "totalPages": 1
}
```

`GET /api/products/{id-or-slug}` returns one product in the same shape. `GET /api/product-categories` returns category objects with `productCount`. A replacement backend should preserve these response shapes; the UI can then switch by changing `NEXT_PUBLIC_API_BASE_URL` without changing pages or query hooks.

## Local development data

Apply migrations with `npx prisma migrate deploy`, then run `npm run seed:products`. This seeds only the furniture catalog and leaves the blog seed/data untouched. Product copy is sample/demo content. The seed stores local Mobel image paths; replace product copy and records through the API/database when adding the production backend.
