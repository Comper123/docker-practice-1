import { NextRequest, NextResponse } from "next/server"
import { db } from "../../../db/db"
import { links } from "../../../db/schema"
import { generateCode } from "../../../lib/generateCode"

export async function POST(req: NextRequest) {
  const body = await req.json()

  if (!body.url) {
    return NextResponse.json({ error: "url required" }, { status: 400 })
  }

  const code = generateCode()

  await db.insert(links).values({
    code,
    url: body.url
  })

  return NextResponse.json({ code })
}