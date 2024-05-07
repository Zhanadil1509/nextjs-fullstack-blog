import classes from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";

type Props = {};
export default function BlogPage({}: Props) {
  return (
    <div className={classes.blogPage}>
      <div className={classes.post}>
        <PostCard />
      </div>
    </div>
  );
}
