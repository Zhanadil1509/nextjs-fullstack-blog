"use client";
import { useState } from "react";
import classNames from "classnames";
import classes from "./links.module.css";
import { navLinks } from "@/shared/constants/navlinks";
import NavLink from "@/components/navbar/links/navLink/navLink";

type Props = {};
export default function Links({}: Props) {
  const [open, setOpen] = useState(false);

  const isAdmin = true;
  const session = true;

  return (
    <>
      <div className={classNames(classes.links, open && classes.mobileLinks)}>
        {navLinks.map((link, i) => (
          <NavLink link={link} key={i} />
        ))}
        {session && isAdmin && (
          <>
            <NavLink link={{ title: "Admin", path: "/blog-admin-page" }} />
            <button className={classes.logout}>Logout</button>
          </>
        )}
      </div>
      <button
        className={classes.burger}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
    </>
  );
}
