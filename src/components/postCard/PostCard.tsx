import Image from "next/image";
import Link from "next/link";
import classes from "./postCard.module.css";
import { PostType } from "@/shared/types/common";

type Props = {
  post: PostType;
};
export default function PostCard({ post }: Props) {
  return (
    <div className={classes.postCard}>
      <div className={classes.top}>
        <div className={classes.imgContainer}>
          <Image src={post.img} alt="" fill className={classes.img} />
        </div>
        <span className={classes.date}></span>
      </div>
      <div className={classes.bottom}>
        <h3 className={classes.title}>{post.title}</h3>
        <p className={classes.desc}>{post.desc}</p>
        <Link className={classes.link} href={`/blog/${post.slug}`}>
          Read more
        </Link>
      </div>
    </div>
  );
}
