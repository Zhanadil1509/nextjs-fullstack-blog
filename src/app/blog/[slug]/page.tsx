import Image from "next/image";
import classes from "./singlePost.module.css";

type Props = {};
export default function SinglePostPage({}: Props) {
  return (
    <div className={classes.singlePost}>
      <div className={classes.imgContainer}>
        <Image src="" alt="" fill className={classes.img} />
      </div>
      <div className={classes.textContainer}>
        <h1 className={classes.title}>Title</h1>
        <div className={classes.detail}>
          <Image src="" alt="" fill className={classes.avatar} />
          <div className={classes.detailText}>
            <span className={classes.detailTitle}>Author</span>
            <span className={classes.detailValue}>Terry John</span>
          </div>
          <div className={classes.detailText}>
            <span className={classes.detailTitle}>Publish</span>
            <span className={classes.detailValue}>10.10.2010</span>
          </div>
        </div>
      </div>
    </div>
  );
}
