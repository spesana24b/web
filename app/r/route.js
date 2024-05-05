import { NextResponse } from "next/server"
import fs from "fs"

export function GET(req) {
  const { searchParams } = new URL(req.url)
  if(searchParams.get("id")) {
    const file = JSON.parse(fs.readFileSync(`${process.cwd()}/data/redirect.json`, "utf-8"))
    if(!file[searchParams.get("id")]) {
      return NextResponse.redirect(new URL("/", req.url))
    }
    return NextResponse.redirect(new URL(file[searchParams.get("id")]))
  }
  return NextResponse.redirect(new URL("/", req.url))
}