import type { AnchorHTMLAttributes } from "react";

type MobelLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function MobelLink({ href, ...props }: MobelLinkProps) {
  return <a href={href} {...props} />;
}
