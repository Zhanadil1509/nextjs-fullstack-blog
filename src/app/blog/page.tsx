import classes from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";
import { PostType } from "@/shared/types/common";

type Props = {};
const BlogPage = async ({}: Props) => {
  const posts = await getPosts();

  return (
    <div className={classes.blogPage}>
      {posts?.map((post: PostType) => (
        <div key={post.userId} className={classes.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
