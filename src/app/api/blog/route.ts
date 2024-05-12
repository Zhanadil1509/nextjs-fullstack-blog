import { connectToDb } from "@/lib/utils";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    connectToDb();
    const posts = await Post.find({});
    return NextResponse.json(posts);
  } catch (e) {
    console.log(e);
  }
};
