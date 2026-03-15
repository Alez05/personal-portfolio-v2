import { NextResponse } from "next/server";
import { skillsPreview } from "../../../../data/home/skills-preview";

export const GET = () => {
  return NextResponse.json(skillsPreview);
};
