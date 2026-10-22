"use client";

import { useEffect } from "react";
import { useProducts } from "@/hooks/use-data";

export default function MobelHomeProducts() {
  const { data } = useProducts({ page: 1, pageSize: 6, sort: "newest" });

  useEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-mobel-home-products]");
    const grid = section?.querySelectorAll<HTMLElement>(":scope > .container > .row")[1];
    const template = grid?.firstElementChild as HTMLElement | undefined;
    if (!grid || !template || !data) return;

    grid.replaceChildren(...data.items.map((product) => {
      const card = template.cloneNode(true) as HTMLElement;
      card.querySelectorAll<HTMLAnchorElement>(".info a.mfp-open, .image a.mfp-open").forEach((anchor) => {
        anchor.href = `/products/${product.slug}`;
        anchor.classList.remove("mfp-open");
      });
      const title = card.querySelector<HTMLAnchorElement>(".text .title a");
      if (title) {
        title.textContent = product.name;
        title.href = `/products/${product.slug}`;
      }
      const image = card.querySelector<HTMLImageElement>(".image img");
      if (image) {
        image.src = `/mobel/assets/images/product-${((product.id - 1) % 6) + 1}.png`;
        image.alt = product.name;
      }
      const price = card.querySelector<HTMLElement>(".text sup");
      if (price) price.textContent = `$ ${product.price.toLocaleString("en-US")},-`;
      const comparePrice = card.querySelector<HTMLElement>(".text sub");
      if (product.compareAtPrice !== null) {
        const compare = comparePrice ?? document.createElement("sub");
        compare.textContent = `$ ${product.compareAtPrice.toLocaleString("en-US")},-`;
        card.querySelector(".text")?.insertBefore(compare, price);
      } else {
        comparePrice?.remove();
      }
      const description = card.querySelector<HTMLElement>(".text .description");
      if (description) description.textContent = product.description;
      return card;
    }));
    window.dispatchEvent(new Event("mobel:content-updated"));
  }, [data]);

  return null;
}
