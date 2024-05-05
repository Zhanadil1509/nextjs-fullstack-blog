import Link from "next/link";
import { navLinks } from "@/shared/constants/navlinks";

type Props = {};
export default function Links({}: Props) {
  return (
    <>
      {navLinks.map((link, i) => (
        <Link key={i} href={link.path}>
          {link.title}
        </Link>
      ))}
    </>
  );
}
