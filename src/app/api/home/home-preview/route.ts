import { NextResponse } from "next/server";
import { homePreview } from "../../../../data/home/home-preview";

export const GET = () => {
  return NextResponse.json(homePreview);
};
