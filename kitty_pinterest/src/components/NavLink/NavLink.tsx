"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, ReactNode } from "react";

import styles from "./NavLink.module.css";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export const NavLink = ({ href, children, className, ...rest }: Props) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${className ?? ""} ${path === href ? styles.active : ""}`}
      {...rest}
    >
      {children}
    </Link>
  );
};
