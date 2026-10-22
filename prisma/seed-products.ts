import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({ url: './prisma/dev.db' });
const prisma = new PrismaClient({ adapter });

const categories = [
    { name: 'Sofas', slug: 'sofas', description: 'Comfortable statement pieces for living spaces.', image: '/mobel/assets/images/product-1.png' },
    { name: 'Armchairs', slug: 'armchairs', description: 'Relaxed seating with timeless silhouettes.', image: '/mobel/assets/images/product-2.png' },
    { name: 'Tables', slug: 'tables', description: 'Dining and occasional tables in natural materials.', image: '/mobel/assets/images/product-3.png' },
    { name: 'Storage', slug: 'storage', description: 'Thoughtful storage for a calmer home.', image: '/mobel/assets/images/product-4.png' },
];

const products = [
    { name: 'Laura Modular Sofa', slug: 'laura-modular-sofa', sku: 'MOB-SOF-001', description: 'A generous modular sofa with soft, durable upholstery and a low contemporary profile. Designed for everyday lounging and flexible living rooms.', material: 'Solid oak, linen blend', brand: 'Mobel Studio', price: 1999, compareAtPrice: 2499, stock: 12, featured: true, category: 'sofas', images: ['photo-1555041469-a586c61ea9bc', 'photo-1550254478-ead40cc54513'] },
    { name: 'Nude Lounge Chair', slug: 'nude-lounge-chair', sku: 'MOB-ARM-002', description: 'A sculptural lounge chair with a supportive seat, rounded arms and warm wood details for reading corners and quiet evenings.', material: 'Oak, bouclé fabric', brand: 'Mobel Studio', price: 849, compareAtPrice: null, stock: 8, featured: true, category: 'armchairs', images: ['photo-1567538096630-e0c55bd6374c', 'photo-1598300056393-4aac492f4344'] },
    { name: 'Aurora Oak Dining Table', slug: 'aurora-oak-dining-table', sku: 'MOB-TBL-003', description: 'A solid oak dining table with a clean, balanced shape. Seats six comfortably and pairs naturally with modern or classic chairs.', material: 'Solid oak', brand: 'Northwood', price: 1299, compareAtPrice: 1499, stock: 5, featured: true, category: 'tables', images: ['photo-1499933374294-4584851497cc', 'photo-1600210492486-724fe5c67fb0'] },
    { name: 'Green Corner Sectional', slug: 'green-corner-sectional', sku: 'MOB-SOF-004', description: 'A roomy corner sectional with reversible configuration, deep cushions and textured green upholstery.', material: 'Pine frame, polyester fabric', brand: 'Mobel Studio', price: 2299, compareAtPrice: null, stock: 4, featured: true, category: 'sofas', images: ['photo-1555041469-a586c61ea9bc', 'photo-1600210492486-724fe5c67fb0'] },
    { name: 'Forma Accent Chair', slug: 'forma-accent-chair', sku: 'MOB-ARM-005', description: 'Compact accent seating with a gently curved back and a durable woven finish for flexible small spaces.', material: 'Ash wood, woven fabric', brand: 'Forma Living', price: 599, compareAtPrice: 699, stock: 15, featured: false, category: 'armchairs', images: ['photo-1598300056393-4aac492f4344', 'photo-1567538096630-e0c55bd6374c'] },
    { name: 'Milo Side Table', slug: 'milo-side-table', sku: 'MOB-TBL-006', description: 'A compact side table with a sturdy wood top and a versatile finish beside sofas, beds or reading chairs.', material: 'Walnut veneer, steel', brand: 'Northwood', price: 249, compareAtPrice: null, stock: 20, featured: false, category: 'tables', images: ['photo-1499933374294-4584851497cc', 'photo-1616486338812-3dadae4b4ace'] },
    { name: 'Sora Media Cabinet', slug: 'sora-media-cabinet', sku: 'MOB-STO-007', description: 'A low-profile media cabinet with concealed storage, cable access and softly rounded edges.', material: 'Oak veneer', brand: 'Forma Living', price: 899, compareAtPrice: null, stock: 6, featured: false, category: 'storage', images: ['photo-1598300056393-4aac492f4344', 'photo-1616486338812-3dadae4b4ace'] },
    { name: 'Linen Daybed Sofa', slug: 'linen-daybed-sofa', sku: 'MOB-SOF-008', description: 'A versatile daybed sofa in a natural linen blend, made for guest rooms and relaxed everyday seating.', material: 'Beech, linen blend', brand: 'Mobel Studio', price: 1599, compareAtPrice: 1799, stock: 3, featured: false, category: 'sofas', images: ['photo-1550254478-ead40cc54513', 'photo-1555041469-a586c61ea9bc'] },
];

function imageUrl(productIndex: number, imageIndex: number) {
    const localImageIndex = ((productIndex + imageIndex) % 6) + 1;
    return `/mobel/assets/images/product-${localImageIndex}.png`;
}

async function main() {
    const categoryRecords = new Map<string, { id: number }>();
    for (const category of categories) {
        const record = await prisma.productCategory.upsert({ where: { slug: category.slug }, update: category, create: category });
        categoryRecords.set(category.slug, record);
    }

    for (const product of products) {
        const category = categoryRecords.get(product.category);
        if (!category) continue;
        const { images } = product;
        const details = {
            name: product.name,
            slug: product.slug,
            sku: product.sku,
            description: product.description,
            material: product.material,
            brand: product.brand,
            price: product.price,
            compareAtPrice: product.compareAtPrice,
            stock: product.stock,
            featured: product.featured,
        };
        const saved = await prisma.product.upsert({
            where: { slug: product.slug },
            update: { ...details, categoryId: category.id },
            create: { ...details, categoryId: category.id },
        });
        await prisma.productImage.deleteMany({ where: { productId: saved.id } });
        await prisma.productImage.createMany({
            data: images.map((_, index) => ({
                url: imageUrl(products.indexOf(product), index),
                alt: `${saved.name} product photo ${index + 1}`,
                sortOrder: index,
                sourceName: null,
                sourceUrl: null,
                productId: saved.id,
            })),
        });
    }
    console.log(`Seeded ${products.length} furniture products in ${categories.length} categories.`);
}

main().finally(async () => prisma.$disconnect());
