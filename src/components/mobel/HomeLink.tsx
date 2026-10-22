"use client";

import Link from "@/components/mobel/MobelLink";
import type { ReactNode } from "react";

export default function HomeLink({ children }: { children: ReactNode }) {
  return (
    <Link
      href="/"
      onClick={(event) => {
        event.preventDefault();
        window.location.assign("/");
      }}
    >
      {children}
    </Link>
  );
}
