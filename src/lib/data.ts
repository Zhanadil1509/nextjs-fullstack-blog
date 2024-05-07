import { Post } from "@/lib/models";

export const getPosts = async () => {
  try {
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error((err as Error).message);
  }
};

export const getPost = async (slug: string) => {
  try {
    const post = await Post.find({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error((err as Error).message);
  }
};

export const getUser = async (id: number | string) => {
  try {
    const user = await Post.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error((err as Error).message);
  }
};

export const getUsers = async () => {
  try {
    const users = await Post.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error((err as Error).message);
  }
};
