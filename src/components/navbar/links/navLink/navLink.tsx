"use client";

import Link from "next/link";
import { NavLinksType } from "@/shared/types/common";
import classes from "./navLink.module.css";
import { usePathname } from "next/navigation";

type Props = {
  link: NavLinksType;
};
export default function NavLink({ link }: Props) {
  const pathName = usePathname();

  return (
    <Link
      href={link.path}
      className={`${classes.container} ${pathName === link.path && classes.active}`}
    >
      {link.title}
    </Link>
  );
}
