"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type JQueryCollection = {
  each: (callback: (index: number, element: HTMLElement) => void) => void;
  hasClass: (name: string) => boolean;
  owlCarousel: (options: Record<string, unknown>) => void;
};

type JQueryFactory = ((selector: string | HTMLElement) => JQueryCollection) & {
  fn?: { owlCarousel?: unknown };
};

function initializeMobelCarousels() {
  const jquery = (window as Window & { jQuery?: JQueryFactory }).jQuery;
  if (!jquery?.fn?.owlCarousel) return false;

  const carousels = [
    {
      selector: ".owl-icons",
      options: {
        autoHeight: false,
        pagination: false,
        navigation: true,
        navigationText: ['<span class="icon icon-chevron-left"></span>', '<span class="icon icon-chevron-right"></span>'],
        items: 6,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 5],
        itemsTablet: [768, 4],
        itemsMobile: [479, 3],
        addClassActive: true,
        autoPlay: 5500,
        stopOnHover: true,
      },
    },
    {
      selector: ".owl-product-gallery",
      options: {
        autoHeight: true,
        slideSpeed: 800,
        navigation: true,
        navigationText: ['<span class="icon icon-chevron-left"></span>', '<span class="icon icon-chevron-right"></span>'],
        pagination: true,
        items: 1,
        singleItem: true,
      },
    },
  ];

  carousels.forEach(({ selector, options }) => {
    jquery(selector).each((_index, element) => {
      const carousel = jquery(element);
      if (!carousel.hasClass("owl-carousel") && !carousel.hasClass("owl-loaded")) carousel.owlCarousel(options);
    });
  });
  return true;
}

function initializeMobelFilters() {
  document.querySelectorAll<HTMLElement>(".filters .filter-box").forEach((box) => {
    const title = box.querySelector<HTMLElement>(".title");
    const content = box.querySelector<HTMLElement>(".filter-content");
    if (!title || !content) return;
    const initializedByTheme = content.style.display === "block";
    if (box.classList.contains("active")) content.style.display = "block";
    if (initializedByTheme || title.dataset.mobelBound) return;

    title.dataset.mobelBound = "true";
    title.addEventListener("click", () => {
      const expanded = box.classList.toggle("active");
      content.style.display = expanded ? "block" : "none";
    });
  });

  document.querySelectorAll<HTMLElement>(".toggle-filters-mobile").forEach((button) => {
    if (button.dataset.mobelBound) return;
    button.dataset.mobelBound = "true";
    button.addEventListener("click", () => document.querySelector(".filters")?.classList.add("active"));
  });

  document.querySelectorAll<HTMLElement>(".toggle-filters-close").forEach((button) => {
    if (button.dataset.mobelBound) return;
    button.dataset.mobelBound = "true";
    button.addEventListener("click", () => document.querySelector(".filters")?.classList.remove("active"));
  });
}

function initializeMobelComponents() {
  initializeMobelCarousels();
  initializeMobelFilters();
}

export default function MobelScripts() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const sources = [
      "/mobel/js/jquery.min.js",
      "/mobel/js/jquery.bootstrap.js",
      "/mobel/js/jquery.magnific-popup.js",
      "/mobel/js/jquery.owl.carousel.js",
      "/mobel/js/jquery.ion.rangeSlider.js",
      "/mobel/js/jquery.isotope.pkgd.js",
      "/mobel/js/main.js",
    ];
    let cancelled = false;

    const loadScripts = async () => {
      for (const src of sources) {
        if (document.querySelector(`script[data-mobel-src="${src}"][data-mobel-loaded="true"]`)) continue;
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = false;
          script.dataset.mobelSrc = src;
          script.onload = () => {
            script.dataset.mobelLoaded = "true";
            resolve();
          };
          script.onerror = () => {
            script.remove();
            reject(new Error(`Unable to load ${src}`));
          };
          document.body.append(script);
        });
        if (cancelled) return;
      }
    };

    loadScripts().then(initializeMobelComponents).catch((error: unknown) => console.error("Mobel scripts failed to load", error));
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    let attempts = 0;
    let timer: ReturnType<typeof setTimeout>;
    const initialize = () => {
      const initialized = initializeMobelCarousels();
      if (!initialized && attempts < 10) {
        attempts += 1;
        timer = setTimeout(initialize, 200);
      }
    };

    initialize();
    window.addEventListener("mobel:content-updated", initializeMobelComponents);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mobel:content-updated", initializeMobelComponents);
    };
  }, [pathname]);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;
    initializeMobelComponents();
  }, [pathname]);

  return null;
}
