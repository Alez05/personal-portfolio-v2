import { NextResponse } from "next/server";
import { navSocials } from "./socials";

export const GET = () => {
  return NextResponse.json(navSocials);
};
