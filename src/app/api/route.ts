import { NextResponse } from "next/server";

export const GET = async () => {
  console.log("clicked");
  const res = NextResponse.json({ msg: "success" });
  return res;
};
