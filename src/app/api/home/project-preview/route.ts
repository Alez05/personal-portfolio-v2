import { NextResponse } from "next/server";
import { projectPreview } from "../../../../data/home/project-preview";

export const GET = () => {
  return NextResponse.json(projectPreview);
};
