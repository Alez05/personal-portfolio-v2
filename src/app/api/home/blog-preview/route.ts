import { NextResponse } from "next/server";
import { bloghlData } from "./blog-hl";

export const GET = () => {
  return NextResponse.json(bloghlData);
};
