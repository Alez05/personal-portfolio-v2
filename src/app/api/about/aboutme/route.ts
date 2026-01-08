import { NextResponse } from "next/server";
import { aboutMeData } from "./aboutme";

export const GET = () => {
  return NextResponse.json(aboutMeData);
};
