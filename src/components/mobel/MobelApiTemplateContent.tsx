"use client";

import { useEffect, useRef } from "react";
import { useProduct, useProductCategories, useProducts } from "@/hooks/use-data";
import type { Product } from "@/types/product";

type Template = "products-grid" | "products-list" | "category" | "product";

function localImage(product: Product, index = 0) {
  return `/mobel/assets/images/product-${((product.id - 1 + index) % 6) + 1}.png`;
}

function updateCatalog(root: HTMLElement, products: Product[], total: number) {
  const grid = root.querySelector<HTMLElement>(".products .sort-bar + .row");
  if (!grid) return;

  const cardTemplate = grid.firstElementChild as HTMLElement | null;
  const cards = products.map((product) => {
    const card = cardTemplate?.cloneNode(true) as HTMLElement | null;
    if (!card) return null;

    const link = card.querySelector<HTMLElement>(".text .title a");
    if (link) {
      link.textContent = product.name;
      link.setAttribute("href", `/products/${product.slug}`);
    }

    card.querySelectorAll<HTMLAnchorElement>("a.mfp-open").forEach((anchor) => {
      anchor.href = `/products/${product.slug}`;
      anchor.classList.remove("mfp-open");
    });

    const image = card.querySelector<HTMLImageElement>(".figure-grid .image img, .figure-list .image img");
    if (image) {
      image.src = localImage(product);
      image.alt = product.name;
    }

    const oldPrice = card.querySelector<HTMLElement>(".text sub");
    if (product.compareAtPrice !== null) {
      const priceElement = oldPrice ?? document.createElement("sub");
      priceElement.textContent = `$ ${product.compareAtPrice.toLocaleString("en-US")},-`;
      card.querySelector(".text")?.insertBefore(priceElement, card.querySelector(".text sup"));
    } else {
      oldPrice?.remove();
    }

    const price = card.querySelector<HTMLElement>(".text sup");
    if (price) price.textContent = `$ ${product.price.toLocaleString("en-US")},-`;

    const description = card.querySelector<HTMLElement>(".text .description");
    if (description) description.textContent = product.description;

    const label = card.querySelector<HTMLElement>(".figure-grid > .label, .figure-list > .label");
    if (label) {
      if (product.compareAtPrice && product.compareAtPrice > product.price) {
        label.textContent = `-${Math.round((1 - product.price / product.compareAtPrice) * 100)}%`;
      } else if (product.stock > 0) {
        label.remove();
      } else {
        label.textContent = "Sold out";
      }
    }

    return card;
  }).filter((card): card is HTMLElement => card !== null);

  grid.replaceChildren(...cards);
  const counter = root.querySelector(".sort-bar .sort-results span");
  if (counter) counter.textContent = `Showing all ${products.length} of ${total} items`;
}

function updateProduct(root: HTMLElement, product: Product) {
  const title = root.querySelector<HTMLElement>(".product-flex-info h1.title");
  if (title) {
    title.childNodes[0].textContent = product.name;
    const subtitle = title.querySelector("small");
    if (subtitle) subtitle.textContent = product.brand;
  }

  const price = root.querySelector<HTMLElement>(".product-flex-info .price .h3");
  if (price) {
    const oldPrice = price.querySelector("small");
    price.childNodes[0].textContent = `$ ${product.price.toLocaleString("en-US")},00`;
    if (product.compareAtPrice !== null) {
      const compare = oldPrice ?? document.createElement("small");
      compare.textContent = `$ ${product.compareAtPrice.toLocaleString("en-US")},00`;
      price.append(compare);
    } else {
      oldPrice?.remove();
    }
  }

  const infoBoxes = root.querySelectorAll<HTMLElement>(".product-flex-info .info-box");
  if (infoBoxes[0]?.children[1]) infoBoxes[0].children[1].textContent = product.brand;
  if (infoBoxes[1]?.children[1]) infoBoxes[1].children[1].textContent = product.material;
  if (infoBoxes[2]?.children[1]) infoBoxes[2].children[1].textContent = product.stock > 0 ? `✓ In stock (${product.stock})` : "Out of stock";

  const gallery = root.querySelector<HTMLElement>(".owl-product-gallery");
  if (gallery) {
    gallery.replaceChildren(...[0, 1, 2, 3].map((index) => {
      const anchor = document.createElement("a");
      const imageUrl = localImage(product, index);
      anchor.href = imageUrl;
      const image = document.createElement("img");
      image.src = imageUrl;
      image.alt = `${product.name} – view ${index + 1}`;
      image.height = 500;
      anchor.append(image);
      return anchor;
    }));
  }

  const specification = root.querySelector<HTMLElement>("#design .content .col-md-8 p");
  if (specification) specification.textContent = product.description;
}

function updateCategories(root: HTMLElement, categories: ReturnType<typeof useProductCategories>["data"]) {
  const grid = root.querySelector<HTMLElement>(".products > .container > .row:last-child");
  if (!grid || !categories) return;
  const cardTemplate = grid.firstElementChild as HTMLElement | null;
  if (!cardTemplate) return;

  grid.replaceChildren(...categories.map((category, index) => {
    const card = cardTemplate.cloneNode(true) as HTMLElement;
    const link = card.querySelector<HTMLAnchorElement>(".text .title a, .image a");
    if (link) link.href = `/products?category=${encodeURIComponent(category.slug)}`;
    card.querySelectorAll<HTMLAnchorElement>(".image a").forEach((imageLink) => {
      imageLink.href = `/products?category=${encodeURIComponent(category.slug)}`;
    });
    const title = card.querySelector<HTMLElement>(".text .title a");
    if (title) title.textContent = category.name;
    const image = card.querySelector<HTMLImageElement>(".image img");
    if (image) {
      image.src = `/mobel/assets/images/product-${(index % 6) + 1}.png`;
      image.alt = category.name;
    }
    const subtitle = card.querySelector<HTMLElement>(".text sup");
    if (subtitle) subtitle.textContent = `${category.productCount ?? 0} products`;
    const description = card.querySelector<HTMLElement>(".text .description");
    if (description) description.textContent = category.description ?? `Browse ${category.name.toLowerCase()} from the Mobel collection.`;
    return card;
  }));
}

export default function MobelApiTemplateContent({
  template,
  productId,
  categorySlug,
  markup,
}: {
  template: Template;
  productId?: string;
  categorySlug?: string;
  markup: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const catalogQuery = useProducts({ page: 1, pageSize: 48, sort: "newest", category: categorySlug }, template !== "product");
  const productQuery = useProduct(template === "product" ? productId ?? "1" : "");
  const categoriesQuery = useProductCategories(template === "category");

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (template === "product" && productQuery.data) updateProduct(root, productQuery.data);
    if (template !== "product" && catalogQuery.data) {
      updateCatalog(root, catalogQuery.data.items, catalogQuery.data.total);
    }
    if (template === "category" && categoriesQuery.data) updateCategories(root, categoriesQuery.data);
    if (catalogQuery.data || productQuery.data || categoriesQuery.data) {
      window.dispatchEvent(new Event("mobel:content-updated"));
    }
  }, [catalogQuery.data, categoriesQuery.data, productQuery.data, template]);

  return <div ref={rootRef} className="mobel-template-content" dangerouslySetInnerHTML={{ __html: markup }} />;
}
