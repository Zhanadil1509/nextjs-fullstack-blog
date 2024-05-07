import Image from "next/image";
import classes from "./postUser.module.css";
import { getCachedUser } from "@/lib/data";

type Props = {
  userId: string;
};
const PostUser = async ({ userId = "Who is?" }: Props) => {
  const user = await getCachedUser(userId);

  return (
    <div className={classes.postUser}>
      <Image src={user?.img} alt="" fill className={classes.avatar} />
      <div className={classes.texts}>
        <span className={classes.title}>Author</span>
        <span className={classes.username}>{user?.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
