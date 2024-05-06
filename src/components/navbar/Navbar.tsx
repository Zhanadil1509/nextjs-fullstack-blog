import Links from "@/components/navbar/links/Links";
import classes from "./navbar.module.css";

type Props = {};
export default function Navbar({}: Props) {
  return (
    <div className={classes.container}>
      <div>Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
}
