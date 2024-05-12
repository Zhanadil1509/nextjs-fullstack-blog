"use server";

import { connectToDb } from "@/lib/utils";
import { Post } from "@/lib/models";
import { PostType } from "@/shared/types/common";
import { revalidatePath } from "next/cache";

export const addPostAction = async ({
  title,
  desc,
  slug,
  userId,
  img,
}: PostType) => {
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });
    await newPost.save();
    console.log("save to DB");
    revalidatePath("/blog");
  } catch (e) {
    console.error(e);
  }
};

export const deletePostAction = async (id: string) => {
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("save to DB");
    revalidatePath("/blog");
  } catch (e) {
    console.error(e);
  }
};
