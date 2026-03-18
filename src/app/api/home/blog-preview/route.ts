import { NextResponse } from "next/server";
import { blogPreview } from "../../../../data/home/blog-preview";

export const GET = () => {
  return NextResponse.json(blogPreview);
};
