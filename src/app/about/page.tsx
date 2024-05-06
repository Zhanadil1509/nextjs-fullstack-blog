import Image from "next/image";
import classes from "./about.module.css";

type Props = {};
export default function AboutPage({}: Props) {
  return (
    <div className={classes.about}>
      <div className={classes.imageContainer}>
        <Image fill src="/about.webp" alt="" />
      </div>
    </div>
  );
}
