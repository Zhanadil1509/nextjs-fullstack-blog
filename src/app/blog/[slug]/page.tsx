import Image from "next/image";
import classes from "./singlePost.module.css";
import { getPost } from "@/lib/data";
import PostUser from "@/components/postUser/PostUser";

type Props = {
  params: {
    slug: string;
  };
};
const SinglePostPage = async ({ params }: Props) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className={classes.singlePost}>
      <div className={classes.imgContainer}>
        <Image src={post?.img} alt="" fill className={classes.img} />
      </div>
      <div className={classes.textContainer}>
        <h1 className={classes.title}>{post?.title}</h1>
        <div className={classes.detail}>
          <PostUser userId={post?.userId} />
          <div className={classes.detailText}>
            <span className={classes.detailTitle}>Publish</span>
            <span className={classes.detailValue}>
              {post?.createdAt?.toString()?.slice(4, 16)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
