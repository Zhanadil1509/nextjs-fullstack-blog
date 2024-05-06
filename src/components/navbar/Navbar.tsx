import Links from "@/components/navbar/links/Links";
import classes from "./navbar.module.css";
import Link from "next/link";

type Props = {};
export default function Navbar({}: Props) {
  return (
    <div className={classes.container}>
      <Link href="/">Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  );
}
