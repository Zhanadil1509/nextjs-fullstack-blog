import { connectToDb } from "@/lib/utils";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";
import { PostType } from "@/shared/types/common";

export const GET = async (req: Request, { slug }: { slug: string }) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (e) {
    console.log(e);
  }
};

export const DELETE = async (req: Request, { slug }: { slug: string }) => {
  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted.");
  } catch (e) {
    console.log(e);
  }
};
