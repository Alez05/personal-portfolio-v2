import { NextResponse } from "next/server"
import { careerData } from "./experience"

export const GET = () => {
  return NextResponse.json(careerData)
};
