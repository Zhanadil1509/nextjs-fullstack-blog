import { unstable_cache as noStore } from "next/cache";
import { Post, User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";

export const getPosts = async () => {
  try {
    connectToDb();
    return await Post.find();
  } catch (err) {
    console.log(err);
    throw new Error((err as Error).message);
  }
};

export const getPost = async (slug: string) => {
  try {
    connectToDb();
    return await Post.findOne({ slug });
  } catch (err) {
    console.log(err);
    throw new Error((err as Error).message);
  }
};

export const getCachedUser = noStore(async (id: number | string) => {
  return getUser(id);
});

export const getUser = async (id: number | string) => {
  try {
    connectToDb();
    return await User.findById(id);
  } catch (err) {
    console.log(err);
    throw new Error((err as Error).message);
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    return await User.find();
  } catch (err) {
    console.log(err);
    throw new Error((err as Error).message);
  }
};
