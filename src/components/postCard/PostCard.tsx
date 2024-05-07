import Image from "next/image";
import Link from "next/link";
import classes from "./postCard.module.css";

type Props = {};
export default function PostCard({}: Props) {
  return (
    <div className={classes.postCard}>
      <div className={classes.top}>
        <div className={classes.imgContainer}>
          <Image src="" alt="" fill className={classes.img} />
        </div>
        <span className={classes.date}></span>
      </div>
      <div className={classes.bottom}>
        <h3 className={classes.title}>Title</h3>
        <p className={classes.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
          veniam.
        </p>
        <Link className={classes.link} href="/blog/post">
          Read more
        </Link>
      </div>
    </div>
  );
}
